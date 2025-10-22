import { useEffect, useState } from "react";
import api from "../services/api/api";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";
 
export default function RecipesPage(){   //page container 
    const [recipes,setRecipes] = useState([]);  //all docs from DB 
    const [editing, setEditing] = useState(null); // currently editing doc 
    const [loading, setLoading]= useState(false); // fetchi spinner flag 
    const [error, setError] = useState(""); // user error message
 
    async function load() {                   /// READ ALL
        try {
           const {data }= await api.get("/recipes");
           setRecipes(data); 
        } catch {
            setError ("Failed to load recipes");
        } finally {
            setLoading(false);
        }    
        }
        
        useEffect(()=>{ load(); },[]);  /// load once the page mounts 

        async function create( body) {     //// create 
            try {
                const { data} = await api.post("/recipes", body);
                setRecipes(prev => [data, ...prev]);
            } catch { setError("Create Failed");}
         }

         async function saveEdit(id, body) {   /// Update 
            try {
                const { data} = await api.put(`/recipes/${id}`, body);
                setRecipes(prev => prev.map(r =>(r._id === data._id ? data : r )));
                setEditing(null);
            } catch { setError ("Update Failed");}                
        }
    
        async function remove(id) {    /// Delete 
           try {
            await api.delete(`/recipes/${id}`);
            setRecipes(prev => prev.filter(r=> r._id !== id));
            if (editing?._id === id) setEditing(null);
             } catch  { setError ("Deleted Failed"); }
         }
            

         return (      // compose the page 
            <div>
                <h1> Recipe Manager</h1>     
                {error && <div style={{ color: "red"}}>{error}</div>}
            
            <RecipeForm       // create + edit form 
            onCreate={create}
            onSaveEdit={saveEdit}
            editing={editing}
            cancelEdit={()=> setEditing(null)} />
            <hr />

            <RecipeList      /// listing + actions
            items={recipes}
            loading={loading}
            onRefresh={load}
            onEdit= {setEditing}
            onDelete={remove} />
        </div>
         );
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    













