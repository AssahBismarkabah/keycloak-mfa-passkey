import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth/AuthContext';
import { keycloak } from '../lib/auth/keycloak';

export const KeycloakCallback = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      if (keycloak.authenticated) {
        console.log('Keycloak authenticated in callback');
        await keycloak.updateToken(5);
        navigate('/dashboard', { replace: true });
      } else {
        console.log('Keycloak not authenticated in callback');
        navigate('/login', { replace: true });
      }
    };

    handleCallback();
  }, [isAuthenticated, navigate]);

  return null;
};
