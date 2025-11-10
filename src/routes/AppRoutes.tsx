import Dashboard from "@/pages/Dashboard";
import Orders from "@/pages/orders";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};
export default AppRoutes;
