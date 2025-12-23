// components/AuthGuard.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const AuthGuard = () => {
  const { isLoading, isError } = useAuth();

  if (isLoading) {
    return <div>Checking authentication...</div>;
  }

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
