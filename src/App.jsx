import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import Navbar from "./components/Navbar"
import SkillsSection from "./components/SkillsSection"
import ContactSection from "./components/ContactSection"
import { Toaster } from "@/components/ui/toaster"

const languages = [
  {
    name: "JavaScript",
    logo: "/javascript-logo-2.svg"
  },
  {
    name: "TypeScript",
    logo: "/typescript-logo.svg"
  },
  {
    name: "Java",
    logo: "/java-logo.svg"
  },
  {
    name: "Python",
    logo: "/python-logo.svg"
  },
  {
    name: "Go",
    logo: "/go-logo.svg"
  },
  {
    name: "PHP",
    logo: "/php-logo.svg"
  }
]

const others = [
  {
    name: "SQL",
    logo: "/mysql-logo.svg"
  },
  {
    name: "Firebase",
    logo: "/firebase-logo.svg"
  },
  {
    name: "Supabase",
    logo: "/supabase-logo.svg"
  },
  {
    name: "MongoDB",
    logo: "/mongodb-logo.svg"
  },
  {
    name: "NodeJS",
    logo: "/nodejs-logo.svg"
  },
  {
    name: "Express",
    logo: "/express-logo.svg"
  },
  {
    name: "React",
    logo: "/react-logo.svg"
  },
  {
    name: "Angular",
    logo: "/angular-logo.svg"
  },
]

const tools = [
  {
    name: "Vim/Neovim",
    logo: "/neovim-logo.svg"
  },
  {
    name: "Tmux",
    logo: "/tmux-logo.svg"
  },
  {
    name: "Linux",
    logo: "/linux-logo.svg"
  },
  {
    name: "Figma",
    logo: "/figma-logo.svg"
  },
  {
    name: "Postman",
    logo: "/postman-logo.svg"
  },
]

function App() {

  return (
    <>
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/background-vid-mobile.webm" type="video/webm"></source>
        Your browser does not support the video tag.
      </video>

      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SkillsSection
        languages={languages}
        others={others}
        tools={tools}
      />
      <Toaster />
      <ContactSection />
    </>
  )
}

export default App
