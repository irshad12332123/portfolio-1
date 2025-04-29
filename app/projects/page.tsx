const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects. Built with Next.js 15 and Tailwind CSS.",
    link: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Store",
    description: "A fully functional e-commerce store built with React.js, Node.js, and Stripe for payments.",
    link: "https://yourecommercestore.com",
  },
  {
    title: "Blog Platform",
    description: "A dynamic blog platform where users can create, edit, and publish posts. Built with Next.js, Prisma, and PostgreSQL.",
    link: "https://yourblogplatform.com",
  },
  {
    title: "Weather App",
    description: "A simple and clean weather app using React.js and OpenWeatherMap API.",
    link: "https://yourweatherapp.com",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <li
            key={idx}
            className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              View Project ➔
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
