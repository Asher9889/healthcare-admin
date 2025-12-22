import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter basename="/admin">
      <Toaster position="top-right" />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
