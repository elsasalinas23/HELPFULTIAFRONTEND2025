# 🍲 Helpful Tía — MERN Full Stack Capstone

## 📋 Overview
Helpful Tía is a bilingual healthy-recipe builder that lets users add their own recipes, view them, update them, and delete them (CRUD).  
The project uses:
- React (Vite) frontend  
- Express + Mongoose backend  
- MongoDB Atlas for data storage  

---

## 🧱 Project Structure

### Frontend
helpful-tia-frontend/
src/
main.jsx
App.jsx
styles/App.css
pages/
HomePage.jsx
RecipesPage.jsx
RecipesPage.css
AboutPage.jsx
NotFoundPage.jsx
components/
RecipeForm.jsx
RecipeForm.css
RecipeList.jsx
RecipeList.css
services/api.js

### Backend
helpful-tia-backend/
server.mjs
.env
models/
recipeModel.mjs
routes/
Recipe.mjs
middleware/
error.mjs
utilities/
recipedbcon.mjs

### Backend `.env`
PORT=3000
MONGO_URI=my_mongodb_connection_string


### Frontend `.env`
VITE_API_URL=http://localhost:3000

🔗 API Endpoints (Backend)
Method	Endpoint	    Description
GET	    /api/recipes	Get all recipes
POST	/api/recipes	Create a recipe
PUT	    /api/recipes/:id	Update recipe by ID
DELETE	/api/recipes/:id	Delete recipe by ID

💻 Frontend CRUD Flow
Action	Component	HTTP Call
Create	RecipeForm	POST /api/recipes
Read	RecipesPage	GET /api/recipes
Update	RecipeForm	PUT /api/recipes/:id
Delete	RecipeList	DELETE /api/recipes/:id

🧠 State Logic
*useState — keeps track of recipes, form fields, errors, and edit mode
*useEffect — loads data from MongoDB when the page starts
*Props — connect child components (form/list) to parent page actions

🎨 Styling
Each component has its own .css file:
-App.css — layout and navigation
-RecipeForm.css — form styling
-RecipeList.css — cards and buttons
-RecipesPage.css — page layout and error boxes

📚 Official Documentation
Category	        Link
React	            https://react.dev/learn

Vite	            https://vitejs.dev/guide

React Router	    https://reactrouter.com/en/main/start/tutorial

Axios	            https://axios-http.com/docs/intro

Express	            https://expressjs.com/en/starter/hello-world.html

Mongoose	        https://mongoosejs.com/docs/guide.html

MongoDB Atlas	    https://www.mongodb.com/docs/atlas/getting-started/

Postman	            https://learning.postman.com/docs/getting-started/introduction/