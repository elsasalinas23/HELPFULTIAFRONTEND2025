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


  function toArray(csv) {
    return String(csv)
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = { title, ingredients: toArray(ingredients) };

    if (editing && editing._id) {
      onSaveEdit(editing._id, body); // update existing
    } else {
      onCreate(body);                 // create new
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

      <div className="actions">
        <button className="btn" type="submit">
          {editing && editing._id ? "Save changes" : "Add recipe"}
        </button>
        {editing && (
          <button
            className="btn secondary"
            type="button"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
