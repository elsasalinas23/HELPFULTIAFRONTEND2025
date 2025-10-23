// src/components/RecipeForm.jsx
import { useEffect, useState } from "react";
import "./RecipeForm.css";

export default function RecipeForm({ onCreate, onSaveEdit, editing, cancelEdit }) {
  // each field has its own state + setter
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");

 // In RecipeForm.jsx
useEffect(() => {
  if (editing && editing._id) {
    setTitle(editing.title || "");
    setIngredients(
      Array.isArray(editing.ingredients)
        ? editing.ingredients.join(", ")
        : (editing.ingredients || "")
    );
  } else {
    // IMPORTANT: only clear when leaving edit mode,
    // not on every parent re-render.
    setTitle("");
    setIngredients("");
  }
}, [editing?._id]);   // ✅ depends only on the identity of the item being edited


function toArray(str) {
  if (Array.isArray(str)) return str;
  if (typeof str === "string") {
    return str.split(",").map(s => s.trim()).filter(Boolean);
  }
  return [];
}

function handleSubmit(e) {
  e.preventDefault();

  // Build exactly what the API expects:
  const body = { title: title?.trim(), ingredients: toArray(ingredients) };

  console.log("Submitting body →", body); // <— open DevTools > Console to verify

  if (!title.trim() || ingredients.length === 0) {
  alert("Please enter a recipe title and at least one ingredient.");
  return;
}

if (ingredients.some(ing => ing.trim().length < 2)) {
  alert("Each ingredient must have at least two letters.");
  return;
}
}


  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title}                       // <- MUST be the title state (not title[0])
          onChange={(e) => setTitle(e.target.value)}   // <- MUST call setTitle
          name="title"
          placeholder="Arroz con leche"
          required
        />
      </label>

      <label>
        Ingredients (comma separated)
        <textarea
          value={ingredients}                 // <- MUST be the ingredients state
          onChange={(e) => setIngredients(e.target.value)} // <- MUST call setIngredients
          name="ingredients"
          placeholder="arroz, leche, canela, azúcar"
          rows={3}
          required
        />
      </label>
<div className="button-row">
  <button type="submit">Add Recipe</button>
  <button
    type="button"
    onClick={() => {
      setTitle("");
      setIngredients([]);
      setIngredientInput("");
    }}
  >
    Clear Form
  </button>
</div>

      
    </form>
  );
}
