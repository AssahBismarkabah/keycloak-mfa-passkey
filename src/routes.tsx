import { Routes, Route, Navigate } from 'react-router-dom';
import { KeycloakCallback } from './components/KeycloakCallback';
import {Dashboard} from './pages/Dashboard';
import {Login} from './pages/Login';
import {Settings} from './pages/Settings';
import {Statements} from './pages/Statements';
import {Transfer} from './pages/Transfer';
import {useAuth } from './lib/auth/AuthContext';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/silent-check-sso.html" element={<KeycloakCallback />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
      <Route
        path="/statements"
        element={
          <PrivateRoute>
            <Statements />
          </PrivateRoute>
        }
      />
      <Route
        path="/transfer"
        element={
          <PrivateRoute>
            <Transfer />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
