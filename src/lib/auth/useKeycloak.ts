import { useState, useCallback, useRef } from 'react';
import { keycloak } from './keycloak';
import { keycloakConfig } from './keycloak-config';

export function useKeycloak() {
  const [error, setError] = useState<string | null>(null);
  const initializingRef = useRef(false);

  const initialize = useCallback(async () => {
    if (initializingRef.current || keycloak.authenticated) {
      console.log('Keycloak already initialized or authenticated');
      return keycloak.authenticated;
    }
    initializingRef.current = true;
    try {
      const authenticated = await keycloak.init({
        ...keycloakConfig.initOptions,
        onLoad: 'check-sso',
      });
      console.log('Keycloak initialized, authenticated:', authenticated);
      return authenticated;
    } catch (err) {
      console.error('Failed to initialize Keycloak:', err);
      setError('Failed to initialize authentication');
      return false;
    } finally {
      initializingRef.current = false;
    }
  }, []);
  
  
  const login = useCallback(async () => {
    try {
      await keycloak.login(keycloakConfig.loginOptions);
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed');
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await keycloak.logout(keycloakConfig.logoutOptions);
    } catch (err) {
      console.error('Logout failed:', err);
      setError('Logout failed');
    }
  }, []);

  return {
    initialize,
    login,
    logout,
    error,
  };
}
