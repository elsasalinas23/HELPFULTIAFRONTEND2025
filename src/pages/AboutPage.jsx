export default function AboutPage() {
  return (
    <section>
      <h1>About Helpful Tía</h1>
        <p>Helpful Tía is a MERN project built for my capstone.</p>
        <p>It demonstrates a React front end talking to an Express + Mongoose REST API with full CRUD.</p>
        <p>The Recipes page shows full CRUD functionality.</p>
        <p>I use useState and useEffect hooks for managing my recipe list.</p>
        <p>My frontend sends requests through Axios to my backend routes.</p>
        <p>Each component has its own CSS file, which keeps my code organized.</p>
      <p>
        Next steps: bilingual ingredient mapping, swap rules, grocery list generation.
      </p>
    </section>
  );
}
