export default function Footer() {
    return (
      <footer className="text-center p-4 bg-gray-800 text-gray-300 mt-10">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com" target="_blank" className="mx-2 hover:underline">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="mx-2 hover:underline">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" className="mx-2 hover:underline">Twitter</a>
        </div>
      </footer>
    )
  }
  