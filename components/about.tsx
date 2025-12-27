"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, LineChart, Layers } from "lucide-react"
import Image from "next/image"

const skills = [
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6 text-purple-400" />,
    items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6 text-cyan-400" />,
    items: ["Node.js", "Express", "Python","FastAPI"],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6 text-emerald-400" />,
    items: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    name: "Machine Learning",
    icon: <Cpu className="h-6 w-6 text-pink-400" />,
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"],
  },
  {
    name: "Data Science",
    icon: <LineChart className="h-6 w-6 text-yellow-400" />,
    items: ["Pandas", "NumPy","Data Analysis"],
  },
  {
    name: "DevOps",
    icon: <Layers className="h-6 w-6 text-orange-400" />,
    items: ["Docker", "AWS", "Git"],
  },
]

export default function About() {
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
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 z-10 mix-blend-overlay"></div>
              <Image
                src="/photo-mine.jpg?height=320&width=320"
                alt="Rohit Anish"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Hello, I'm Rohit</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a dedicated Full Stack Developer and Machine Learning enthusiast who 
            transforms complex challenges into innovative digital solutions.
             With a strong foundation in both frontend design and backend architecture, 
             I build modern web applications that are as visually engaging as they are functionally robust. 
             My work is driven by a passion for technology and an unwavering curiosity to explore emerging methodologies and tools.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
            I thrive on pushing the boundaries of what's possible,crafting seamless user experiences
             while developing intelligent systems that make a meaningful impact.
              Whether refining intricate algorithms or architecting scalable software,
               I remain committed to excellence and continuous learning in every project I undertake.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#resume"
                className="px-6 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-12 text-center text-white"
          >
            My Skills & Expertise
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-800 mr-4 group-hover:bg-gray-700 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

