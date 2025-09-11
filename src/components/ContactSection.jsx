import { motion, AnimatePresence } from "motion/react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const fadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0 },
};

const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setNameValid(value.trim().length > 2);
        break;
      case "email":
        setEmailValid(validateEmail(value));
        break;
      case "message":
        setMessageValid(value.trim().length > 20 && value.length <= 500);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPending) return;

    setActive(true);
    setIsPending(true);
    setTimeout(() => setActive(false), 150);

    if (formValues.honeypot !== "") {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      setIsPending(false);
      return;
    }

    if (
      !formValues.name ||
      !validateEmail(formValues.email) ||
      !formValues.message
    ) {
      toast({
        description: "Properly fill the form, thank you!",
      });
      setIsPending(false);
      return;
    }

    try {
      const endpoint =
        "https://formsubmit.co/ajax/dccab63810415a366f88e848b14fc714";

      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("message", formValues.message);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || data.success === "false") {
        throw new Error(data.message || "Submission failed");
      }

      toast({ description: "Your message has been sent." });

      setFormValues({ name: "", email: "", message: "", honeypot: "" });
      setIsFormVisible(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
      console.error("Error sending message:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contactme" className="mx-2 mt-20 md:h-auto">
      <div className="grid-rows-8 mx-2 mb-20 mt-8 grid grid-cols-8 gap-2 xl:grid-rows-4">
        <h2
          className="font-pridi col-span-full justify-self-center text-4xl font-semibold text-gray-200 
          sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
        >
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
              transition-all duration-300"
            >
              Message me
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isFormVisible && (
            <motion.form
              onSubmit={handleSubmit}
              variants={slideDown}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="row-span-7 col-span-full row-start-2 flex 
              flex-col items-center md:col-span-6 md:col-start-2"
            >
              <div
                className="flex w-full max-w-md flex-col space-y-4
                rounded-md border-2 border-gray-200 px-4 py-8 hover:rounded-3xl
                transition-all duration-300 focus-within:rounded-3xl 
                focus-within:scale-105 mt-8"
              >
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  placeholder="John Doe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full rounded-md bg-gray-500/60 border p-3
                  text-gray-200 outline-none font-bold focus:scale-105
                  transition-all duration-300 ${formValues.name === "" ? 
                  "border-gray-500" : nameValid ? "border-green-500" :
                  "border-red-500"}`}
                />
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  placeholder="johndoe@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full rounded-md bg-gray-500/60 border p-3 
                  text-gray-200 outline-none font-bold focus:scale-105
                  transition-all duration-300 ${formValues.email === "" ? 
                  "border-gray-500" : emailValid ? "border-green-500" :
                  "border-red-500"}`}
                />
                <textarea
                  maxLength="500"
                  name="message"
                  value={formValues.message}
                  placeholder="Your Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full rounded-md bg-gray-500/60 border p-3
                  text-gray-200 outline-none font-bold focus:scale-105 
                  transition-all duration-300 resize-none  ${formValues.message === "" ? 
                  "border-gray-500" : messageValid ? "border-green-500" :
                  "border-red-500"}`}
                />
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formValues.honeypot}
                  onChange={handleChange}
                  className="opacity-0 absolute left-32 bottom-56 z-0 pointer-events-none"
                  tabIndex="-1"
                  aria-hidden
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className={`rounded-md px-4 py-2 font-bold text-4xl 
                  transition-all duration-300 
                  ${
                    active
                      ? "bg-gray-900 scale-105 text-white"
                      : isPending
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
