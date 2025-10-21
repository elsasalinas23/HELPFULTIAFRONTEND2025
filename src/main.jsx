import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter allows our pages to change without reloading */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
