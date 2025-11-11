import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Layout> { /* for sidebar */}
       <Toaster position="top-right"/>
        <AppRoutes /> { /* for routes */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
