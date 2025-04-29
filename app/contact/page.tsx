export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Let's Connect!</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        I’m always excited to connect with new people, collaborate on innovative projects, or just chat about technology and design.
      </p>

      <p className="text-md text-gray-600 mb-10 text-center">
        Whether you have a question, an opportunity, or just want to say hello — my inbox is always open.  
        I’ll try my best to get back to you as soon as possible!
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl">📧</span>
          <a href="mailto:yourname@example.com" className="text-blue-600 hover:underline text-lg">
            yourname@example.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl">💼</span>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-blue-600 hover:underline text-lg"
          >
            linkedin.com/in/yourprofile
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl">🐙</span>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="text-blue-600 hover:underline text-lg"
          >
            github.com/yourgithub
          </a>
        </div>

        {/* You can add more social links similarly */}
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Looking forward to hearing from you! 🚀</p>
      </div>
    </section>
  );
}
