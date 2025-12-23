import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";

const AuthGuard = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError } = useAuth();

  useEffect(() => {
    const logoutHandler = () => {
      queryClient.removeQueries({ queryKey: ["auth", "me"] });
    };

    window.addEventListener("auth:logout", logoutHandler);
    return () =>
      window.removeEventListener("auth:logout", logoutHandler);
  }, [queryClient]);

  if (isLoading) return <div>Checking authentication...</div>;
  if (isError) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default AuthGuard;
