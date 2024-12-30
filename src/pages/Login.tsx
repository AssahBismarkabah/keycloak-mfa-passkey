import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Fingerprint, AlertCircle } from 'lucide-react';
import { useAuth } from '../lib/auth/AuthContext';

export function Login() {
  const { login, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (isAuthenticated) {
      // Redirect to the attempted URL or dashboard
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome to SecureBank</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-center">
            <p className="text-gray-500">Sign in securely with your credentials</p>
          </div>
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm">{error}</p>
            </div>
          )}
          <Button
            className="w-full"
            size="lg"
            onClick={handleLogin}
          >
            <Fingerprint className="mr-2 h-5 w-5" />
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}