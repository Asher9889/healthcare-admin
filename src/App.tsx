import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Layout> { /* for sidebar */}
        <AppRoutes /> { /* for routes */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
