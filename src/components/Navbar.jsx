import { useState } from 'react'
import { motion } from 'motion/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <>
      <nav className="w-screen bg-gray-300/40 backdrop-blur">
        <div className="mx-8 flex h-20 items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center
          text-3xl font-bold text-neutral-100">
            JQ
          </div>
          <div className="flex gap-12">

            <button onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center
            rounded">

              {isOpen ? <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 9H19M5 15H19M19 5L5 19" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                : <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="24" height="24" fill="" /> <path d="M6 12H18" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M6 15.5H18" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M6 8.5H18" stroke="#f5f5f5" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" /> </svg>
              }

            </button>
          </div>
        </div>
      </nav>

      {isOpen &&
        <section
          className="h-dvh w-dvw mt-2 flex items-center fixed justify-center md:mt-8">
          <div className="h-dvh w-dvw m-2 flex items-start justify-start rounded-3xl 
            bg-gray-500/40 p-1 backdrop-blur-lg md:m-8 md:w-[90dvw] lg:justify-center">
            <ul className="ml-4 mt-32 grid gap-16 md:gap-10">
              <li className="text-5xl md:text-8xl font-bold text-neutral-100">
                <a className="hover:text-neutral-400 transition-colors duration-300" 
                  href="#">Home</a>
              </li>
              <li className="text-5xl md:text-8xl font-bold text-neutral-100">
                <a className="hover:text-neutral-400 transition-colors duration-300"
                  href="#">Projects</a>
              </li>
              <li className="text-5xl md:text-8xl font-bold text-neutral-100">
                <a className="hover:text-neutral-400 transition-colors duration-300"
                  href="#">Skills</a>
              </li>
              <li className="text-5xl md:text-8xl font-bold text-neutral-100">
                <a className="hover:text-neutral-400 transition-colors duration-300"
                  href="#">Contact Me</a>
              </li>
            </ul>
          </div>
        </section>
      }
    </>
  )
}

export default Navbar
