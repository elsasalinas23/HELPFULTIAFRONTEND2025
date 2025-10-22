import { useEffect, useState } from "react";
import "./RecipeForm.css";

export default function RecipeForm({ onCreate, onSaveEdit, editing, cancelEdit }) { // react state's

const [title, setTitle] = useState("");  // what the user typed for the title 
const [ingredients, setIngredients] = useState("");  //the text box for ingredients (comma seperated)

// if swtich into edit mode, prefill the fields; if we cancel,clear them 
useEffect(() => {
    if (editing) {
        setTitle(editing.title || "");
        setIngredients((editing.ingredients || []).join("."));
    } else {
        setTitle("");
        setIngredients("");
    }
}, [editing]);


function handleSubmit(e) {    // when the user submits the form
    e.preventDefault();
    const body = { title, ingredients: toArray(ingredients) };
    editing ? onSaveEdit(editing._id, body) : onCreate(body); // if editing, call save; otherwise create new 
}

return (
    <form className="recipe-form" onSubmit={handleSubmit}>
        <label className="form-label">
            Title
            <input className="form-input"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Pollo Guisado" />
        </label>
        <label className="form-label">
            Ingredients (comma seperated)
            <input className="form-input"
                value={ingredients}
                onChange={e => setTitle(e.target.value)}
                placeholder="chicken, tomato, garlic" />
        </label>
        <div className="form-actions">
            <button className="btn primary" type="submit">
                {editing ? "Save" : "Add Recipe"} </button>
            {editing && (
                <button className="btn" type="button" onClick={cancelEdit}> Cancel</button>
            )}
        </div>
    </form>
);
}
