import { Link } from "react-router-dom";
 export default function NotFoundPage(){
    return (
        <section>
            <hi>404- Page Not Found</hi>
            <p>That route doesn"t exist. Try one of these;</p>
            <p>
                <Link to="/">Home</Link> · <Link to="/recipes">Recipes</Link> · <Link to="/about">About</Link>
            </p>
        </section>
    )
 }