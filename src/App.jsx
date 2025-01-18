import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import Navbar from "./components/Navbar"
import SkillsSection from "./components/SkillsSection"

const languages = [
  {
    name: "JavaScript",
    logo: "/src/assets/javascript-logo-2.svg"
  },
  {
    name: "TypeScript",
    logo: "/src/assets/typescript-logo.svg"
  },
  {
    name: "Java",
    logo: "/src/assets/java-logo.svg"
  },
  {
    name: "Python",
    logo: "/src/assets/python-logo.svg"
  },
  {
    name: "Go",
    logo: "/src/assets/go-logo.svg"
  },
  {
    name: "PHP",
    logo: "/src/assets/php-logo.svg"
  }
]

const others = [
  {
    name: "SQL",
    logo: "/src/assets/mysql-logo.svg"
  },
  {
    name: "Firebase",
    logo: "/src/assets/firebase-logo.svg"
  },
  {
    name: "MongoDB",
    logo: "/src/assets/mongodb-logo.svg"
  },
  {
    name: "Express",
    logo: "/src/assets/express-logo.svg"
  },
  {
    name: "React",
    logo: "/src/assets/react-logo.svg"
  },
  {
    name: "Angular",
    logo: "/src/assets/angular-logo.svg"
  },
]

const tools = [
  {
    name: "Vim/Neovim",
    logo: "/src/assets/neovim-logo.svg"
  },
  {
    name: "Tmux",
    logo: "/src/assets/tmux-logo.svg"
  },
  {
    name: "Linux",
    logo: "/src/assets/linux-logo.svg"
  },
  {
    name: "Figma",
    logo: "/src/assets/figma-logo.svg"
  },
  {
    name: "Postman",
    logo: "/src/assets/postman-logo.svg"
  },
]

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SkillsSection
        languages={languages}
        others={others}
        tools={tools}
      />
    </>
  )
}

export default App
