// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage";
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
       <nav className="nav container">
  <div className="spacer" />
  <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
  <NavLink to="/recipes" className={({isActive}) => isActive ? "active" : ""}>Recipes</NavLink>
  <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
</nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

