import { routes } from "@/routes";
import { Route, Routes, Outlet } from "react-router-dom";
import Layout from "@/layout";
import AuthGuard from "@/components/custom/AuthGuard";

const AppRoutes = () => {
  const loginRoute = routes.find((r) => r.path === "/login");
  const otherRoutes = routes.filter((r) => r.path !== "/login");

  return (
    <Routes>
      {/* Public Route - Login */}
      {loginRoute && (
        <Route
          key={loginRoute.name}
          path={loginRoute.path}
          element={<loginRoute.element />}
        />
      )}

      {/* Auth Guard */}
      <Route element={<AuthGuard />}>
        {/* Protected Routes - with Layout */}
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {otherRoutes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
