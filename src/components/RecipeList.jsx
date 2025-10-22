import "./RecipeList.css";

export default function RecipeList({ items, onEdit, onDelete, onRefresh, loading }) {

    return {
        <
        <div className="list-header">
            <h2 className="list-title">Saved Recipes</h2>
            <button className="btn" onClick={onRefresh} disabled={loading}>
                {loading ? "loading..." : "Refresh"} </button>
        </div>
    {
        items.length === 0 ? (
            <p className="list-empty">No recipes yet- add one above</p>
        ) : (
        <ul className="recipe-list">
            {items.map(r => (
                <li key={r._id} className="recipe-card">
                    <div className="card-top">
                        <div className="card-text">
                            <strong className="card-title">{r.title}</strong>
                            <div className="card-sub">{r.ingredients.join(",")}</div>
                            <div className="card-meta">
                                id: {r._id.slice(0, 8)}… • updated: {new Date(r.updatedAt).toLocaleString()}
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn" onClick={() => onEdit(r)}>Edit</button>
                            <button className="btn danger" onClick={() => onDelete(r._id)}>Delete</button>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
            )}
</>
    
    }
