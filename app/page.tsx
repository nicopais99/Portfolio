"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function Home() {
  console.log("Renderizado pagina principal.")
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="container mx-auto py-6">
        <nav className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Nicolas Pais</h2>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/imagen_progra3.jpg" alt="Hero Background" fill className="object-cover" priority />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg">Nicolás Pais</h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 mb-8 drop-shadow-md">Junior Software Developer</h2>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => document.getElementById("projects").scrollIntoView()}
            >
              View Projects
            </Button>
            <Button size="lg" onClick={() => document.getElementById("contact").scrollIntoView()}>
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Arcade Game with Score Database"
            description="A classic-style game built with Pygame. Stores player scores using MySQL."
            technologies={["Python", "Pygame", "PostgreSQL"]}
            githubLink="https://github.com/nicolaspais/inventory-system"
          />
          <ProjectCard
            title="Voice Weather App"
            description="A voice-activated app that fetches real-time weather data via API and uses speech synthesis."
            technologies={["Python", "pyttsx3", "requests"]}
            githubLink="https://github.com/nicolaspais/weather-analyzer"
          />
          <ProjectCard
            title="Task Scheduler API"
            description="RESTful API for managing and scheduling tasks with authentication."
            technologies={["Node.js", "Express", "JWT"]}
            githubLink="https://github.com/nicolaspais/task-scheduler"
          />
          <ProjectCard
            title="Stock Market Behavior Predictor"
            description=" A Python-based program that analyzes historical stock data and attempts to predict short-term behavior using data visualization and pattern recognition. Utilizes Pandas for data manipulation and Matplotlib for insightful charts."
            technologies={["Python, Pandas, Matplotlib"]}
            githubLink="https://github.com/nicolaspais/data-dashboard"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-800">
            <Image src="/nicolas_pais.jpeg"alt="Nicolás Pais"width={256}height={256}quality={100}className="rounded-full object-cover shadow-lg"/>            
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-gray-400" />
              <span className="text-gray-400">Buenos Aires, Argentina</span>
            </div>
            <p className="text-lg mb-6">
              I'm a passionate Junior Software Developer with a strong focus on backend development. I enjoy solving
              complex problems and building robust, scalable systems that make a difference.
            </p>
            <p className="text-lg mb-6">
              My journey in software development started with a curiosity about how systems work behind the scenes. This
              led me to explore various backend technologies and frameworks, where I found my passion.
            </p>
            <p className="text-lg">
              I'm committed to continuous learning and staying updated with the latest technologies, including
              advancements in machine learning and AI. I believe in writing clean, maintainable code and creating
              solutions that are both efficient and user-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Or reach me directly at:</p>
            <div className="flex justify-center gap-4">
              <a href="mailto:nicopais99@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Mail size={20} />
                <span>nicopais99@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Nicolas Pais. All rights reserved.</p>
          <div className="flex justify-center mt-4 gap-4">
            <a href="https://github.com/nicolaspais" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="mailto:nicolas.pais@example.com" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, technologies, githubLink }) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <Github size={16} />
          <span>View on GitHub</span>
        </a>
      </CardFooter>
    </Card>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

    // Open email client
    window.location.href = `mailto:nicopais99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          className="bg-gray-900 border-gray-700"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Your email"
          className="bg-gray-900 border-gray-700"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Your message"
          rows={6}
          className="bg-gray-900 border-gray-700"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}