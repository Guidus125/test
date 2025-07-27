import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ← add this import
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/test">    {/* ← wrap App in this */}
    <App />
  </BrowserRouter>
);
