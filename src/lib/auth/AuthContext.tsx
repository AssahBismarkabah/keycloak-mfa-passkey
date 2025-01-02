  import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
  import { useNavigate, useLocation } from 'react-router-dom';
  import { keycloak } from './keycloak';
  import { useKeycloak } from './useKeycloak';

  interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    token: string | null;
    login: () => Promise<void>;
    logout: () => Promise<void>;
  }

  const AuthContext = createContext<AuthContextType | null>(null);

  export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { initialize, login, logout, error } = useKeycloak();
  
    const updateToken = useCallback((newToken: string) => {
      setToken(newToken);
    }, []);
  
    useEffect(() => {
      const initAuth = async () => {
        console.log('Initializing auth');
        try {
          const authenticated = await initialize();
          console.log('Auth initialized, authenticated:', authenticated);
          setIsAuthenticated(authenticated ?? false);
          if (authenticated && keycloak.token) {
            console.log('User authenticated, token:', keycloak.token);
            updateToken(keycloak.token);
            if (location.pathname === '/login') {
              console.log('Redirecting to dashboard');
              navigate('/dashboard', { replace: true });
            }
          } else {
            console.log('User not authenticated');
          }
        } catch (error) {
          console.error('Error initializing auth:', error);
        } finally {
          setIsLoading(false);
        }
      };
      
      initAuth();
    }, [initialize, updateToken, navigate, location.pathname]);
  
    useEffect(() => {
      if (isAuthenticated) {
        console.log('User is authenticated, token:', token);
      } else {
        console.log('User is not authenticated');
      }
    }, [isAuthenticated, token]);
  
    const value = {
      
      isAuthenticated,
      isLoading,
      error,
      token,
      login: async () => {
        await keycloak.handleAuthentication();
        await login();
        if (keycloak.authenticated) {
          setIsAuthenticated(true);
          updateToken(keycloak.token!);
          navigate('/dashboard', { replace: true });
        }
      },
      logout: async () => {
        await logout();
        setIsAuthenticated(false);
        setToken(null);
        navigate('/login', { replace: true });
      },
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }

  export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }
