import { useEffect } from "react";
import "./HomePage.css";


export default function HomePage() {
// Make the whole page use the pink theme while on Home
      useEffect(() => {
    document.body.classList.add("theme-pink");
    return () => document.body.classList.remove("theme-pink");
  }, []);
  return (
    <section className="home-container">
      <h1>
        Hola, ¡bienvenid@s a <span className="brand">Helpful Tía</span>! 🫶🌺
      </h1>

      <p>
        <strong>Welcome, mis amores.</strong>  this is <strong>Helpful Tía</strong>!  
        I know you miss <em>grandma’s</em> and <em>mami’s</em> cooking, but I also know that 
        we all want to feel healthy and radiant — mas <strong>Selena</strong>, menos <strong>Yolanda</strong> 😄. 💃✨.
        Aquí puedes <strong>guardar</strong> tus recetas favoritas y también ver
        <strong> healthier verison</strong> de esos platos tradicionales que te llenan
        el corazón ❤️ y la pancita 🍽️.
      </p>

      <h2>Ready / ¿List@? ¡Vámonos! 🚀</h2>
      <ul className="home-steps">
        <li>
          Ve a <strong>Recipes</strong> → <em>write oyur favorite recipe</em> (ej. <em>arroz con leche</em> 🍚🥛).
        </li>
        <li>
          Add los <strong>ingredientes</strong> (arroz, leche, canela…) y pulsa <em>Save</em> 💾.
        </li>
        <li>
          Próximamente: <strong>Tía Tips</strong> con <em>healthy swaps</em> (menos aceite, más sabor) 🌿🥗.
        </li>
      </ul>

      <p className="closing">
        Con mucho amor y cariño, <strong>tu Tía</strong> 💛
      </p>
    </section>
  );
}

