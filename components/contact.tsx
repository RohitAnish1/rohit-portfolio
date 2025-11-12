"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gray-950">
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
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm currently available for freelance work, full-time positions, and collaborative projects. If you have
              any questions or would like to discuss potential opportunities, please don't hesitate to contact me.
            </p>

            <div className="space-y-6">
              <a href="mailto:rohitanish158@gmail.com" className="flex items-center group">
                <div className="p-3 rounded-full bg-gray-800 mr-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rohit-anish-b6b587140/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="p-3 rounded-full bg-gray-800 mr-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Linkedin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                </div>
              </a>

              <a
                href="https://github.com/RohitAnish1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="p-3 rounded-full bg-gray-800 mr-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Github className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">GitHub</h4>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                >
                  <p className="text-green-400 font-medium">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

