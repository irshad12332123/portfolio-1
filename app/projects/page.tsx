const projects = [
  { title: "Portfolio Website", description: "Built with Next.js 15" },
  { title: "E-commerce Store", description: "Built with React & Stripe" },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
