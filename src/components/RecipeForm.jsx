// src/components/RecipeForm.jsx
import React, { useEffect, useState } from "react";
import "./RecipeForm.css";

// helper: "a, b, c" -> ["a","b","c"]
function toArray(csv) {
  if (Array.isArray(csv)) return csv;
  if (typeof csv === "string") {
    return csv
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
  }
  return [];
}

export default function RecipeForm({ onCreate, onSaveEdit, editing, cancelEdit }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState(""); // keep as TEXT in the textarea
  const [error, setError] = useState("");

  // when entering/leaving edit mode, prefill / clear
  useEffect(() => {
    if (editing && editing._id) {
      setTitle(editing.title || "");
      // if editing.ingredients is an array, show it as csv in the textarea
      setIngredients(Array.isArray(editing.ingredients) ? editing.ingredients.join(", ") : (editing.ingredients || ""));
    } else {
      setTitle("");
      setIngredients("");
    }
    setError("");
  }, [editing?._id]);

  function handleSubmit(e) {
    e.preventDefault();
    const ingArr = toArray(ingredients);

    // simple validations
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (ingArr.length === 0) {
      setError("Please add at least one ingredient (comma separated).");
      return;
    }
    // require each token to be at least 2 characters (tweak if you want)
    if (ingArr.some(s => s.length < 2)) {
      setError("Each ingredient should be at least 2 characters.");
      return;
    }

    const body = { title: title.trim(), ingredients: ingArr };
    console.log("Submitting body →", body);

    if (editing && editing._id) {
      onSaveEdit(editing._id, body);
    } else {
      onCreate(body);
    }

    // clear after successful submit (optional; or rely on parent refresh)
    setTitle("");
    setIngredients("");
    setError("");
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      {error && <div className="error-box">{error}</div>}

      <div className="form-row">
        <label className="form-label" htmlFor="title">Title</label>
        <input
          id="title"
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="turkey sandwich"
          required
        />
      </div>

      <div className="form-row">
        <label className="form-label" htmlFor="ingredients">Ingredients (comma separated)</label>
        <textarea
          id="ingredients"
          className="form-input textarea"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="turkey, bread, mayo"
          rows={3}
          required
        />
      </div>

      <div className="form-actions">
        <button className="btn primary" type="submit">
          {editing && editing._id ? "Save changes" : "Add Recipe"}
        </button>

        {/* Clear button you asked for */}
        <button
          className="btn"
          type="button"
          onClick={() => { setTitle(""); setIngredients(""); setError(""); }}
        >
          Clear Form
        </button>

        {editing && (
          <button className="btn secondary" type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
