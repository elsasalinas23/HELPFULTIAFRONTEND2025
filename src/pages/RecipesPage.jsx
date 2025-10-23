import { useEffect, useState } from "react";
import api from "../services/api/api";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

export default function RecipesPage() {   //page container 
    const [recipes, setRecipes] = useState([]);  //all docs from DB 
    const [editing, setEditing] = useState(null); // currently editing doc 
    const [loading, setLoading] = useState(false); // fetchi spinner flag 
    const [error, setError] = useState(""); // user error message

    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? recipes : recipes.slice(0, 5);

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
    // call the loader once when the page mounts
    useEffect(() => {
        setLoading(true);      // show spinner flag
        load();                // runs your GET /recipes
    }, []);


return (
  <div className="recipes-page">   {/* page container */}
    <h1 className="page-title">Recipe Manager</h1>

    {error && <div className="error-box">{error}</div>}

    {/* Form handles both Create and Edit */}
    <RecipeForm
      onCreate={create}
      onSaveEdit={saveEdit}
      editing={editing}
      cancelEdit={() => setEditing(null)}
    />

    <hr className="page-divider" />

    {/* List shows recipes and supports Edit/Delete/Refresh */}
    <RecipeList
      items={visible}       // <= use visible (slice or full)
      loading={loading}
      onRefresh={load}
      onEdit={setEditing}
      onDelete={remove}
    />

    {/* HYBRID: only show first 5, let user expand */}
    {recipes.length > 5 && (
      <div className="list-footer">
        <button className="btn" onClick={() => setShowAll(v => !v)}>
          {showAll ? "Show less" : "Show all"}
        </button>
      </div>
    )}
  </div>
)};
