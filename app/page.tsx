"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center px-5 py-5"
      >
        Hi, I am <span className="text-blue-600">Md Irshad</span>
      </motion.h1>
                      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-lg md:text-2xl text-gray-600 text-center"
      >
        Full Stack Developer | Software Engineer | Gen AI
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
