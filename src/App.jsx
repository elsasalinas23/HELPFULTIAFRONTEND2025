// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div>
      <header style={{ padding: 16, background: "#f5f5f5" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">🏠 Home</Link>
          <Link to="/recipes">🍲 Recipes</Link>
          <Link to="/about">ℹ️ About</Link>
        </nav>
      </header>

      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

