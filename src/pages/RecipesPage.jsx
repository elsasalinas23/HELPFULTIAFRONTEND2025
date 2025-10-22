import { useEffect, useState } from "react";
import api from "../services/api/api";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

export default function RecipesPage() {   //page container 
    const [recipes, setRecipes] = useState([]);  //all docs from DB 
    const [editing, setEditing] = useState(null); // currently editing doc 
    const [loading, setLoading] = useState(false); // fetchi spinner flag 
    const [error, setError] = useState(""); // user error message

    async function load() {                   /// READ ALL
        try {
            const { data } = await api.get("/recipes");  // GET/api/recipes
            setRecipes(data);                         // save the list into state
        } catch {
            setError("Failed to load recipes");       // show user friendly error
        } finally {
            setLoading(false);                         // turn off loading flag
        }
    }

    useEffect(() => { load(); }, []);  /// when the page opens the first time, load recipes 

    async function create(body) {     //// create 
        try {
            const { data } = await api.post("/recipes", body);  // POST/ api/ recipes
            setRecipes(prev => [data, ...prev]);               // add nes to the list 
        } catch { setError("Create Failed"); }
    }

    async function saveEdit(id, body) {   /// Update 
        try {
            const { data } = await api.put(`/recipes/${id}`, body);  // PUT/ api/ recipes/:id
            setRecipes(prev => prev.map(r => (r._id === data._id ? data : r)));  // replace the old recipe in the list with the update one 
            setEditing(null);                                       // close edit mode
        } catch { setError("Update Failed"); }
    }

    async function remove(id) {    /// Delete 
        try {
            await api.delete(`/recipes/${id}`);    // DELETE/ api/ recipes/:id
            setRecipes(prev => prev.filter(r => r._id !== id));  // remove from list 
            if (editing?._id === id) setEditing(null);  // if we deleted the one we editing, exit mode 
        } catch { setError("Deleted Failed"); }
    }

    // The JSX below is the page layout + child components
    return (
        <div className="recipes-page">
            <h1 className="page-title">Recipe Manager</h1>

            {error && <div className="error-box">{error}</div>}

            {/* The form handles both Create and Edit */}
            <RecipeForm
                onCreate={create}
                onSaveEdit={saveEdit}
                editing={editing}
                cancelEdit={() => setEditing(null)}
            />

            <hr className="page-divider" />

            {/* The list shows all recipes and lets you Edit/Delete/Refresh */}
            <RecipeList
                items={recipes}
                loading={loading}
                onRefresh={load}
                onEdit={setEditing}
                onDelete={remove}
            />
        </div>
    );
}














