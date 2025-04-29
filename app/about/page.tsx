export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Hello! I am [Your Name], a passionate web developer with a love for creating beautiful, functional, and user-friendly websites.
      </p>

      <div className="space-y-6">
        <p>
          I specialize in frontend technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and modern frameworks such as <strong>React.js</strong> and <strong>Next.js</strong>. My goal is always to build responsive, high-performance web applications that provide excellent user experiences.
        </p>

        <p>
          Over the past few years, I have worked on a variety of projects, ranging from simple landing pages to full-stack web applications. I am always eager to learn new technologies and continuously improve my skills.
        </p>

        <p>
          In my free time, I love exploring new tech, contributing to open-source projects, and writing technical blogs to share my knowledge with the community.
        </p>

        <p>
          My approach to work is simple: <em>Write clean code, build with passion, and always focus on the user!</em>
        </p>

        <p>
          Feel free to check out my <a href="/projects" className="text-blue-500 hover:underline">Projects</a> or <a href="/contact" className="text-blue-500 hover:underline">Contact</a> me if you had like to collaborate!
        </p>
      </div>
    </section>
  );
}
