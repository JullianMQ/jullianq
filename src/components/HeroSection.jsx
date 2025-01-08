const HeroSection = () => {
  return (
    <>
      <section className="h-dvh">
        <TopSection />
        <section className="my-8">
          <BottomSection />
        </section>
      </section>
    </>
  )
}

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="mx-2 my-8 grid grid-cols-8 grid-rows-2 gap-2 ">

        <div className="col-span-2 col-start-1 col-end-5 row-span-2 row-start-1 
          overflow-hidden rounded-xl border border-white transition-all duration-200 
          hover:rounded-3xl md:col-span-3 md:col-start-2 md:row-span-2
          lg:col-end-4">

          <img className="rounded-xl transition-all
            duration-200 hover:scale-105 hover:rounded-3xl max-h-[600px]"
            src="/my_pic.webp" alt="my picture" />
        </div>

        <div className="md:-col-start-4 col-start-5 col-end-7 row-start-1 
          my-4 flex items-end justify-center rounded-xl text-white">
          <a href="#" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800 
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            FB
          </a>
        </div>

        <div className="md:-col-start-3 col-start-6 col-end-9 row-start-1 my-4 flex 
          items-end justify-center rounded-xl text-white">
          <a href="#" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            IG
          </a>
        </div>

        <div className="md:-col-start-4 col-start-5 col-end-7 row-start-2 
          my-4 flex items-start justify-center rounded-xl text-white">

          <a href="#" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            GH
          </a>
        </div>

        <div className="md:-col-start-3 col-start-6 col-end-9 row-start-2 my-4
          flex items-start justify-center rounded-xl text-white ">
          <a href="#" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            LK
          </a>
        </div>

      </div>
    </section>
  )
}

const BottomSection = () => {
  return (
    <>
      <div className="ml-2 mr-2 grid grid-cols-8 grid-rows-4 gap-2">
        <h1 className="col-span-8 row-span-1 text-3xl font-bold uppercase 
          md:col-start-2 text-gray-100 md:text-5xl self-end leading-3 ">
          Jullian Quiambao
        </h1>

        <h1 className="col-span-8 row-span-1 text-2xl font-bold uppercase 
          md:col-start-2 text-gray-100 md:text-5xl">
          Full Stack Developer
        </h1>

        <p className="col-span-8 row-span-2 text-lg self-start leading-tight 
          tracking-tight md:col-start-2 text-gray-100 md:text-2xl md:leading-7">
          A full stack developer that focuses on the functionalities of the website. An effective website but an impactful experience.
        </p>
      </div>
    </>
  )
}


export default HeroSection
