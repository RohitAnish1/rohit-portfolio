"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Rohit Anish
            </h2>
            <p className="text-gray-400">Full Stack & ML Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex space-x-4 mt-6 md:mt-0"
          >
            <a
              href="https://github.com/rohitanish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/rohitanish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/rohitanish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:rohitanish158@gmail.com"
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Rohit Anish. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Designed and built with ❤️</p>
        </motion.div>
      </div>
    </footer>
  )
}

