"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "FinRAG",
    description: `Built a financial QA platform using RAG (LangChain + sentence transformers) to retrieve and summarize
market-related information`,
    image: "/finrag1.png?height=400&width=600",
    tags: ["TypeScript", "Node.js", "Langchain", "Python"],
    demoLink: "#",
    githubLink: "https://github.com/RohitAnish1/FinRAG.git",
  },
  {
    title: "EchoFrame",
    description: `Led the development of EchoFrame, an AI-powered smart glass for the visually impaired, 
                 using YOLO-based object detection and real-time audio
                feedback for enhanced navigation.`,
    image: "/echo-frame.jpeg?height=400&width=600",
    tags: ["React", "Python", "Node.js", "TensorFlow.js"],
    githubLink: "https://github.com/RohitAnish1/quad_squad.git",
  },
  {
    title: "Answerly",
    description: `Designed and developed Answerly, an ML and NLP-based system that extracts
                    handwritten text using OCR and evaluates answers using SBERT and
                  cosine similarity for accurate grading.`,
    image: "/answerly.png?height=400&width=600",
    tags: ["Next.js", "Python", "NLP", "MongoDB"],
    githubLink: "https://github.com/RohitAnish1/AIEVAL.git",
  },
  {
    title: "Vision",
    description: `Designed and developed Vision, a web-based tool that provides live colour correction
                  for images to enhance visibility for colour-blind users, along
                  with a browser extension for seamless integration into daily browsing activities`,
    image: "/vision.jpeg?height=400&width=600",
    tags: ["PyTorch", "OpenCV", "FastAPI", "React"],
    githubLink: "https://github.com/RohitAnish1/Vision.git",
  },
  {
    title: "Payroll Management System",
    description: `Designed and developed Payroll Management System, a web-based application that automates
       payroll processing, tracks attendance, and manages
       leave requests efficiently.`,
    image: "/payroll.jpeg?height=400&width=600",
    tags: ["React", "Express", "PostgreSQL"],
    githubLink: "https://github.com/RohitAnish1/payroll.git",
  },
  {
    title: "MEC Cupid",
    description: `Designed and developed MEC Cupid, a React-based matchmaking platform for a college event, 
           using Supabase, Node.js, and PostgreSQL for
             compatibility matching, admin approval, and automated WhatsApp notifications.`,
    image: "/mec-cupid.png?height=400&width=600",
    tags: ["React", "Firebase", "Node.js"],
    githubLink: "https://github.com/RohitAnish1/mec_cupid",
  }
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore a selection of my recent work spanning web development, machine learning, and more. Each project
            represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" /> Source Code
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeProject === index ? 1 : 0,
                  y: activeProject === index ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-b from-purple-600/80 to-cyan-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-6">{project.description}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.githubLink}
                      className="px-4 py-2 rounded-full bg-gray-900/50 text-white border border-white/30 font-medium hover:bg-gray-900/70 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/RohitAnish1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 inline-flex items-center"
          >
            <Github className="h-5 w-5 mr-2" />
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

