import { routes } from "@/routes";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        console.log("routes is", route)
        return (
          <Route key={route.name} path={route.path} element={<route.element />} /> 
        )
      })}
    </Routes>
  );
};
export default AppRoutes;
