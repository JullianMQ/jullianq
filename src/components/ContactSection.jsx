const ContactSection = () => {
  return (
    <section id="contactme" className="mx-2 md:h-auto mt-20">
      <div className="mx-2 mt-8 grid grid-cols-8 grid-rows-6 gap-2 xl:grid-rows-4">
        <h2 className="text-gray-200 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 
        2xl:text-9xl font-semibold col-span-full justify-self-center">
          Let's work together!
        </h2>

        {/* Mobile view */}
        <a href="mailto:jullianq.dev@gmail.com?subject=Inquiry from jullianq.tech"  target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-800 font-bold
          border border-white rounded-md py-2 px-4 col-span-full row-span-2
          text-4xl bg-gray-300 lg:hidden md:col-span-6 md:col-start-2
          sm:text-6xl">
          Message me
        </a>

        {/* Desktop view */}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jullianq.dev@gmail.com&su=Inquiry+from+jullianq.tech&body=" target="_blank" rel="noopener noreferrer"
          className="hidden text-gray-200 border border-white rounded-md pt-2
          pb-6 px-4 col-span-4 col-start-3 row-span-1 text-7xl hover:bg-gray-300 
          lg:flex justify-center items-center hover:text-gray-800 
          hover:font-bold hover:rounded-3xl hover:border-none transition-all
          duration-300 ">
          Message me
        </a>

      </div>
    </section>
  )
}

// Not sure yet what do with these
//const SocButttons = ({ logo, link }) => {
//  return (
//    <div className="">
//
//    </div>
//  )
//}

export default ContactSection
