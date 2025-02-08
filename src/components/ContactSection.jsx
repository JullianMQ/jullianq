import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const fadeOut = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: { duration: 0.3 }
  },
  exit: { opacity: 0 }
};

const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ContactSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section id="contactme" className="mx-2 mt-20 md:h-auto">
      <div className="grid-rows-8 mx-2 mb-20 mt-8 grid grid-cols-8 gap-2 xl:grid-rows-4">
        <h2 className="col-span-full justify-self-center text-4xl font-semibold text-gray-200 
        sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Let's work together!
        </h2>

        {/* Desktop view */}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jullianq.dev@gmail.com&su=Inquiry+from+jullianq.tech&body="
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 col-start-3 row-span-1 hidden items-center justify-center
          rounded-md border border-white px-4 pb-6 pt-2 text-7xl 
          text-gray-200 transition-all duration-300 hover:rounded-3xl 
          hover:border-none hover:bg-gray-300 hover:font-bold hover:text-gray-800
          lg:flex">
          Message me
        </a>

        {/* Button fades out, form slides down */}
        <AnimatePresence>
          {!isFormVisible && (
            <motion.button
              variants={fadeOut}
              initial="initial"
              animate="initial"
              exit="animate"
              onClick={() => setIsFormVisible(true)}
              className="col-span-full row-start-2 flex items-center justify-center
              rounded-md border border-white bg-gray-300 px-4 pb-4 pt-2
              text-4xl font-bold text-gray-800 sm:text-6xl md:col-span-6
              md:col-start-2 lg:hidden">
              Message me
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              variants={slideDown}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="row-span-7 col-span-full row-start-2 flex 
              flex-col items-center md:col-span-6 md:col-start-2"
            >
              <form action="" className="flex w-full max-w-md flex-col space-y-4
                rounded-md border-2 border-gray-200 px-4 py-8 hover:rounded-3xl
                transition-all duration-300 focus-within:rounded-3xl 
                focus-within:scale-105 mt-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md bg-gray-500/60 border p-3 text-gray-200
                  outline-none font-bold focus:scale-105 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md bg-gray-500/60 border p-3 text-gray-200
                  outline-none font-bold focus:scale-105 transition-all duration-300"
                />
                <select name="subject" id="subject"
                className="w-full rounded-md bg-gray-500/60 border p-3 py-[.93rem]
                  text-gray-200 outline-none font-bold transition-all 
                  duration-300 focus:scale-105">
                  <option value="invalid">Select Option</option>
                  <option value="student_serv">Student Service Inquiry</option>
                  <option value="business_serv">Business Service Inquiry</option>
                  <option value="job_opportunity">Job Opportunity</option>
                  <option value="help_services">Help Services</option>
                  <option value="others">Others</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  className="w-full rounded-md bg-gray-500/60 border p-3
                  text-gray-200 outline-none font-bold focus:scale-105 
                  transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="09XX XXX XXXX"
                  className="opacity-0 absolute inset-0 z-0 w-0 h-0"
                  tabIndex="-1"
                  aria-hidden
                />
                <button
                  type="submit"
                  className="rounded-md bg-gray-200 px-4 py-2 font-bold text-4xl text-gray-800"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ContactSection;

