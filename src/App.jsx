import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import Navbar from "./components/Navbar"
import SkillsSection from "./components/SkillsSection"
import ContactSection from "./components/ContactSection"
import Background from "./components/Background"
import { Toaster } from "@/components/ui/toaster"
import TestimonialsSection from "./components/TestimonialsSection"
import AboutSection from "./components/AboutSection"

const languages = [
  {
    name: "JavaScript",
    logo: "/svgs/javascript-logo-2.svg"
  },
  {
    name: "TypeScript",
    logo: "/svgs/typescript-logo.svg"
  },
  {
    name: "Java",
    logo: "/svgs/java-logo.svg"
  },
  {
    name: "Python",
    logo: "/svgs/python-logo.svg"
  },
  {
    name: "Go",
    logo: "/svgs/go-logo.svg"
  },
  {
    name: "PHP",
    logo: "/svgs/php-logo.svg"
  }
]

const others = [
  {
    name: "SQL",
    logo: "/svgs/mysql-logo.svg"
  },
  {
    name: "Firebase",
    logo: "/svgs/firebase-logo.svg"
  },
  {
    name: "Supabase",
    logo: "/svgs/supabase-logo.svg"
  },
  {
    name: "MongoDB",
    logo: "/svgs/mongodb-logo.svg"
  },
  {
    name: "NodeJS",
    logo: "/svgs/nodejs-logo.svg"
  },
  {
    name: "Express",
    logo: "/svgs/express-logo.svg"
  },
  {
    name: "React",
    logo: "/svgs/react-logo.svg"
  },
  {
    name: "Angular",
    logo: "/svgs/angular-logo.svg"
  },
]

const tools = [
  {
    name: "Vim/Neovim",
    logo: "/svgs/neovim-logo.svg"
  },
  {
    name: "Tmux",
    logo: "/svgs/tmux-logo.svg"
  },
  {
    name: "Linux",
    logo: "/svgs/linux-logo.svg"
  },
  {
    name: "Figma",
    logo: "/svgs/figma-logo.svg"
  },
  {
    name: "Postman",
    logo: "/svgs/postman-logo.svg"
  },
]

function App() {

  return (
    <>
      <Background />
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <TestimonialsSection />
      <SkillsSection
        languages={languages}
        others={others}
        tools={tools}
      />
      <Toaster />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default App
