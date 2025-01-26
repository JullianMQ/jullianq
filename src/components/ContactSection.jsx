const ContactSection = () => {
  return (
    <section id="contact" className="mx-2 md:h-auto mt-20">
      <div className="mx-2 mt-8 grid grid-cols-8 grid-rows-6 gap-2 xl:grid-rows-4">
        <h2 className="text-gray-200 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 
        2xl:text-9xl font-semibold col-span-full justify-self-center">
          Let's work together!
        </h2>

        <a href="mailto:jullianq.dev@gmail.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-800 font-bold
          border border-white rounded-md py-2 px-4 col-span-full row-span-2
          text-4xl bg-gray-300 lg:hidden md:col-span-6 md:col-start-2
          sm:text-6xl">
          Message me
        </a>

        <a href="mailto:jullianq.dev@gmail.com" target="_blank" rel="noopener noreferrer"
          className="hidden text-gray-200 border border-white rounded-md py-2
          px-4 col-span-6 col-start-2 row-span-2 text-7xl hover:bg-gray-300 lg:flex 
          justify-center items-center hover:text-gray-800 hover:font-bold
          hover:rounded-3xl hover:border-none transition-all duration-300 ">
          Message me
        </a>

      </div>
    </section>
  )
}

const SocButttons = ({ logo, link }) => {
  return (
    <div className="">

    </div>
  )
}

export default ContactSection
