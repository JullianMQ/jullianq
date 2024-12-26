import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-screen bg-gray-300/30 backdrop-blur">
      <div className="flex justify-between items-center h-20 mx-8">
        <div className="h-10 w-10 flex justify-center items-center
          font-bold text-3xl text-white">
          JQ
        </div>
        <div className="flex gap-12">

          <button className="bg-pink-600 p-2 rounded-md hover:bg-pink-500
            hover:scale-x-105 font-bold text-white">
            Get in touch
          </button>

          <button onClick={() => setIsOpen(!isOpen)}
            className="h-10 w-10 flex justify-center items-center
            rounded">

            {isOpen ? <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="24" height="24" fill="" /> <path d="M6 12H18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M6 15.5H18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M6 8.5H18" stroke="#fff" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" /> </svg>
              : <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 9H19M5 15H19M19 5L5 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            }

          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
