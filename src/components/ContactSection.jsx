import { motion, AnimatePresence } from "motion/react";
import { useCallback } from "react";
import { useEffect } from "react";
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
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [nameValid, setNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [messageValid, setMessageValid] = useState(false)
  const [subjectValid, setSubjectValid] = useState(false)
  const [honeypotFilled, setHoneypotFilled] = useState(false)
  const [emptyFields, setEmptyFields] = useState(true)
  const [formValues, setFormValues] = useState({
    "Name": "",
    "Email": "",
    "Subject": "invalid",
    "Message": "",
  })

  const checkFormValues = useCallback(() => {
    if (formValues["Name"].length > 0 ||
      formValues["Email"].length > 0 ||
      formValues["Subject"] !== "invalid" ||
      formValues["Message"].length > 0) {
      setEmptyFields(false)
    } else {
      setEmptyFields(true)
    }
  }, [formValues])

  useEffect(() => {
    checkFormValues()
  }, [formValues, checkFormValues])

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };

  const handleBlur = (e) => {
    const { name, value } = e.target

    switch (name) {
      case "Name":
        console.log("name called")
        setNameValid(value.length > 2)
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break
      case "Email":
        setEmailValid(validateEmail(value))
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break;
      case "Subject":
        setSubjectValid(value !== "invalid")
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break;
      case "Message":
        setMessageValid(value.length > 0 && value.length <= 500)
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break;
      case "Honeypot":
        if (value) setHoneypotFilled(true);
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 150);
  };

  return (
    <section id="contactme" className="mx-2 mt-20 md:h-auto">
      <div className="grid-rows-8 mx-2 mb-20 mt-8 grid grid-cols-8 gap-2 xl:grid-rows-4">
        <h2 className="col-span-full justify-self-center text-4xl font-semibold text-gray-200 
          sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Let's work together!
        </h2>

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
              <div className="flex w-full max-w-md flex-col space-y-4
                rounded-md border-2 border-gray-200 px-4 py-8 hover:rounded-3xl
                transition-all duration-300 focus-within:rounded-3xl 
                focus-within:scale-105 mt-8">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  onBlur={handleBlur}
                  className={`w-full rounded-md bg-gray-500/60 border p-3
                  text-gray-200 outline-none font-bold focus:scale-105
                  transition-all duration-300 
                  ${emptyFields ? "border-gray-200" :
                  nameValid ? "border-green-500" : "border-red-500"}`}
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  onBlur={handleBlur}
                  className={`w-full rounded-md bg-gray-500/60 border p-3 
                text-gray-200 outline-none font-bold focus:scale-105
                  transition-all duration-300  
                  ${emptyFields ? "border-gray-200" :
                      emailValid ? "border-green-500" : "border-red-500"}`}
                />
                <select
                  name="Subject"
                  onBlur={handleBlur}
                  className={`w-full rounded-md bg-gray-500/60 border p-3
                  py-[.93rem] text-gray-200 outline-none font-bold
                  transition-all duration-300 focus:scale-105
                  ${emptyFields ? "border-gray-200" :
                      subjectValid ? "border-green-500" : "border-red-500"}`}
                >
                  <option value="invalid">Select Option</option>
                  <option value="student_serv">Student Service Inquiry</option>
                  <option value="business_serv">Business Service Inquiry</option>
                  <option value="job_opportunity">Job Opportunity</option>
                  <option value="help_services">Help Services</option>
                  <option value="others">Others</option>
                </select>
                <textarea
                  maxLength="500"
                  name="Message"
                  placeholder="Your Message"
                  onBlur={handleBlur}
                  className={`w-full rounded-md bg-gray-500/60 border p-3
                  text-gray-200 outline-none font-bold focus:scale-105 
                  transition-all duration-300
                  ${emptyFields ? "border-gray-200" :
                      messageValid ? "border-green-500" : "border-red-500"}`}
                />
                <input
                  type="text"
                  name="Honeypot"
                  onBlur={handleBlur}
                  className="opacity-0 absolute inset-0 z-0 w-0 h-0"
                  tabIndex="-1"
                  aria-hidden
                />
                <button
                  type="submit"
                  className={`rounded-md px-4 py-2 font-bold text-4xl transition-all duration-300 
                  ${active ? "bg-gray-900 scale-105 text-white" : "bg-gray-200 text-gray-800"}`}
                  onClick={handleClick}
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;

