import { motion, AnimatePresence } from "motion/react"
import { useToast } from "@/hooks/use-toast"
import { useCallback, useEffect, useState } from "react"

const fadeOut = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: { duration: 0.3 }
  },
  exit: { opacity: 0 }
}

const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const ContactSection = () => {
  const { toast } = useToast()
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [isPending, setIsPending] = useState(false)
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

  const nameInput = document.querySelector("#Name")
  const emailInput = document.querySelector("#Email")
  const subjectInput = document.querySelector("#Subject")
  const messageInput = document.querySelector("#Message")
  const honeypotInput = document.querySelector("#Honeypot")

  const nameVal = nameInput ? nameInput.value : ""
  const emailVal = emailInput ? emailInput.value : ""
  const subjectVal = subjectInput ? subjectInput.value : ""
  const messageVal = messageInput ? messageInput.value : ""
  const honeypotVal = honeypotInput ? honeypotInput.value : ""

  const checkFormValues = useCallback(() => {
    if (formValues["Name"].length > 0 ||
      formValues["Email"].length > 0 ||
      formValues["Subject"] !== "invalid" ||
      formValues["Message"].length > 0) {
      setEmptyFields(false)
      setNameValid(nameVal ? nameVal.length > 2 : 0)
      setEmailValid(validateEmail(emailVal))
      setSubjectValid(subjectVal !== "invalid")
      setMessageValid(messageVal.length > 0 && messageVal.length <= 500)
      if (honeypotVal.value) setHoneypotFilled(true)
    } else {
      setEmptyFields(true)
    }
  }, [formValues,
    nameVal,
    emailVal,
    subjectVal,
    messageVal,
    honeypotVal
  ])

  useEffect(() => {
    //console.log(formValues)
    checkFormValues()
  }, [formValues, checkFormValues])

  const validateEmail = (email) => {
    //console.log("Validating email: ", email)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleBlur = (e) => {
    const { name, value } = e.target

    switch (name) {
      case "Name":
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
        break
      case "Subject":
        setSubjectValid(value !== "invalid")
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break
      case "Message":
        setMessageValid(value.length > 0 && value.length <= 500)
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break
      case "Honeypot":
        if (value) setHoneypotFilled(true)
        setFormValues(prevState => ({
          ...prevState,
          [name]: value
        }))
        break
      default:
        break
    }
  }

  const handleClick = async () => {
    if (isPending) return;

    setActive(true)
    setIsPending(true)
    setTimeout(() => setActive(false), 150)

    const honey = document.querySelector("#Honeypot")
    if (honey.value !== "" || honeypotFilled) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
      setIsFormVisible(false)
      setIsPending(false)
      return
    }

    if (emptyFields) {
      toast({
        description: "The form was not filled."
      })
      setIsFormVisible(false)
      setIsPending(false)
      return
    }

    if (nameValid && emailValid && subjectValid && messageValid) {
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_API_TOKEN);

      try {
        const response = await fetch('https://api-portfolio-4637.onrender.com/v1/create', {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(formValues),
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        await new Promise(resolve => setTimeout(resolve, 3000))

        toast({
          description: "Your message has been sent."
        })

        setFormValues({
          Name: "",
          Email: "",
          Subject: "invalid",
          Message: "",
          Honeypot: "",
        })

        setIsFormVisible(false)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
        })
        console.error('Error sending message:', error)
      } finally {
        setIsPending(false)
      }
      return
    }

    toast({
      description: "Properly fill the form, thank you!"
    })
    setIsPending(false)
    return
  }

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
              lg:col-span-4 lg:col-start-3 lg:bg-gray-300/0 lg:text-gray-200
              lg:font-normal lg:hover:bg-gray-300 lg:hover:text-gray-800
              lg:hover:font-bold lg:hover:rounded-3xl md:col-start-2 
              transition-all duration-300">
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
                  id="Name"
                  placeholder="Name"
                  onBlur={handleBlur}
                  onChange={handleBlur}
                  className={`w-full rounded-md bg-gray-500/60 border p-3
                  text-gray-200 outline-none font-bold focus:scale-105
                  transition-all duration-300 
                  ${emptyFields ? "border-gray-200" :
                      nameValid ? "border-green-500" : "border-red-500"}`}
                />
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  onBlur={handleBlur}
                  onChange={handleBlur}
                  className={`w-full rounded-md bg-gray-500/60 border p-3 
                text-gray-200 outline-none font-bold focus:scale-105
                  transition-all duration-300  
                  ${emptyFields ? "border-gray-200" :
                      emailValid ? "border-green-500" : "border-red-500"}`}
                />
                <select
                  name="Subject"
                  id="Subject"
                  onBlur={handleBlur}
                  onChange={handleBlur}
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
                  id="Message"
                  placeholder="Your Message"
                  onChange={handleBlur}
                  onBlur={handleBlur}
                  className={`w-full rounded-md bg-gray-500/60 border p-3
                  text-gray-200 outline-none font-bold focus:scale-105 
                  transition-all duration-300 resize-none
                  ${emptyFields ? "border-gray-200" :
                      messageValid ? "border-green-500" : "border-red-500"}`}
                />
                <input
                  type="text"
                  id="Honeypot"
                  name="Honeypot"
                  placeholder="Well hello there!"
                  onBlur={handleBlur}
                  className="opacity-0 w-30 h-20 absolute left-32 bottom-56 
                  z-0 px-4 pointer-events-none"
                  tabIndex="-1"
                  aria-hidden
                />
                <button
                  type="submit"
                  className={`rounded-md px-4 py-2 font-bold text-4xl 
                  transition-all duration-300 
                  ${active ? "bg-gray-900 scale-105 text-white" :
                    isPending ? "bg-gray-400 text-gray-600 cursor-not-allowed" :
                    "bg-gray-200 text-gray-800"}`}
                  onClick={handleClick}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ContactSection
