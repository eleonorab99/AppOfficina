import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;