import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id="nav" className="w-screen bg-gray-300/40 backdrop-blur-sm
        sticky top-0 z-20 md:backdrop-blur">
        <div className="mx-8 flex h-20 items-center justify-between">
          <div className="flex h-16 w-16 items-center justify-center
          text-3xl font-bold text-neutral-100">
            <img src="/JullianQ-Logo.svg" alt="logo" width="200" height="200" />
          </div>
          <div className="flex gap-12">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen ? "true" : "false"}
              className="flex h-10 w-10 items-center justify-center rounded">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative w-6 h-6 flex items-center justify-center"
              >
                <motion.div
                  className="absolute w-6 h-0.5 bg-white"
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-6 h-0.5 bg-white"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-6 h-0.5 bg-white"
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", duration: 0.3, stiffness: 300, damping: 40, ease: "easeInOut" }}
            className="w-dvw mt-2 flex items-center fixed justify-center z-10"
          >
            <div id="glass-menu" className="h-[80vh] w-dvw m-2 flex items-center justify-start rounded-3xl bg-gray-500/40 p-1 md:m-8 md:w-[90dvw] lg:justify-center backdrop-blur-lg">
              <ul className="ml-4 grid gap-16 md:gap-10">
                {['Home', 'Projects', 'Skills', 'Contact Me'].map((item) => (
                  <li 
                    className="text-5xl md:text-8xl font-bold text-gray-200 
                    hover:text-gray-400 transition-colors duration-300"
                    key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsOpen(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

