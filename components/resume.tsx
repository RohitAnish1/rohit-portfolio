"use client"

import { motion } from "framer-motion"
import { FileText, Download, ExternalLink } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Download my resume to learn more about my education, work experience, and skills.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-t from-purple-500/10 to-cyan-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="p-4 rounded-full bg-gray-700 mr-6">
                  <FileText className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">My Resume</h3>
                  <p className="text-gray-400">Updated April 2025</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://drive.google.com/file/d/1z-_v9dd6uPkF8q_6QDlGTP2tgj7fhUrY/view?usp=sharing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Online
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">Bachelor of Technology</h4>
                  <p className="text-purple-400">Govt Model Engineering College</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

