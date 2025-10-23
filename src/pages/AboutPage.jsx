export default function AboutPage() {
  return (
    <div className="about">
      <h1>ℹ️ About / Acerca de Helpful Tía</h1>

      <p>
        <strong>Helpful Tía</strong> is my MERN capstone project — un pequeño sueño hecho
        realidad 👩‍💻💭. It was built to honor la tradición familiar de cocinar con amor,
        while embracing healthier habits for our future.
      </p>

      <h2>🧩 Tech Stack / Tecnologías</h2>
      <ul>
        <li>Frontend: React + Vite + React Router DOM</li>
        <li>Backend: Express + MongoDB + Mongoose</li>
        <li>Axios for API calls & custom CSS styling</li>
      </ul>
      <h2>🎯 What It Demonstrates / Qué Demuestra</h2>
      <ul>
        <li>CRUD functionality (Create, Read, Update, Delete)</li>
        <li>State management with <code>useState</code> and <code>useEffect</code></li>
        <li>Frontend–backend communication with Axios</li>
        <li>Error handling and friendly UI feedback</li>
      </ul>


      <h2>🎯 Purpose / Propósito</h2>
      <p>
        The goal is to let users <strong>add, edit, delete, and view</strong> their favorite
        recipes (CRUD functionality) while preparing for future features:
      </p>
      <ul>
        <li> 🌎 Bilingual ingredient mapping (English & Español)</li>
        <li> 🌿Healthy swap rules — convertir tus recetas favoritas en versiones light</li>
        <li> 🛒 Grocery list generator</li>
        <li>Basic login for personalized collections</li>
      </ul>


      <h2>🚀 What I Learned / Lo que aprendí</h2>
      <ul>
        <li>React state management with <code>useState</code> & <code>useEffect</code></li>
        <li>API communication using Axios</li>
        <li>Routing and navigation with <code>react-router-dom</code></li>
        <li>Error handling and full CRUD integration</li>
      </ul>

      <p>
        This app is my way of saying: <em>“La comida une a las familias”</em> — food connects
        families. And technology can help us keep those memories alive.
      </p>

      <p><strong>Gracias por visitar — Thank you for visiting 💜 Con amor y sazón,Tu Tía 💜</strong></p> 
    </div>
  );
}
