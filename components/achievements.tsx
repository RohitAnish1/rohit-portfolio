"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Calendar, Users, Lightbulb, Trophy, Briefcase } from "lucide-react"

const achievements = [
  {
    title: "HackForTomorrow Winner",
    date: "2023",
    description: "First place in a 24-hour hackathon.",
    icon: <Trophy className="h-6 w-6 text-yellow-400" />,
  },
  {
    title: "MECLABS Best Performing Team Award",
    date: "2022",
    description: "Recognized for outstanding research contributions in machine learning applications.",
    icon: <Trophy className="h-6 w-6 text-yellow-400" />,
  },
  {
    title: "EXCELMEC Tech Core",
    date: "2024-2025",
    description: "Led a team of 50+ volunteers to organize a 24 hour hackathon and conducted an online ML competition.",
    icon: <Users className="h-6 w-6 text-cyan-400" />,
  },
  {
    title: "CSTECH QUIZ",
    date: "2022",
    description: "First place in a Computer Science quiz organized by MACE.",
    icon: <Trophy className="h-6 w-6 text-yellow-400" />,
  },
]

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="achievements" className="py-20 bg-gray-950">
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
              Achievements & Activities
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A timeline of my professional journey, highlighting key milestones and contributions.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col text-center md:text-left`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-10 shadow-lg shadow-purple-500/20"></div>

              {/* Content */}
              <div className="w-full md:w-1/2 md:pr-12 md:pl-0">
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    <div className="p-2 rounded-lg bg-gray-800 mr-3">{achievement.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                      <span className="text-sm text-gray-400">{achievement.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

