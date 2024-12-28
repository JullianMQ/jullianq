import { useState } from 'react'
import { motion } from 'motion/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <>
      <nav className="w-screen bg-gray-300/40 backdrop-blur">
        <div className="flex justify-between items-center h-20 mx-8">
          <div className="h-10 w-10 flex justify-center items-center
          font-bold text-3xl text-neutral-100">
            JQ
          </div>
          <div className="flex gap-12">

            <button onClick={() => setIsOpen(!isOpen)}
              className="h-10 w-10 flex justify-center items-center
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
          className="h-dvh w-dvw flex justify-center items-center mt-2 md:mt-8">
          <div className="flex justify-start items-start 
          bg-gray-500/40 backdrop-blur h-dvh w-dvw md:w-[90dvw] 
          m-2 md:m-8 p-1 rounded">
            <ul className="grid ml-4 mt-32 gap-16">
              <li className="text-neutral-100 font-bold text-5xl">Home</li>
              <li className="text-neutral-100 font-bold text-5xl">Projects</li>
              <li className="text-neutral-100 font-bold text-5xl">Skills</li>
              <li className="text-neutral-100 font-bold text-5xl">Contact Me</li>
            </ul>
          </div>
        </section>
      }
    </>
  )
}

export default Navbar
