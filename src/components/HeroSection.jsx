const HeroSection = () => {
  return (
    <>
      <section id="home" className="mx-2 h-full md:h-auto">
        <TopSection />
        <section className="my-8 xl:hidden">
          <BottomSection />
        </section>
      </section>
    </>
  )
}

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="xl:grid-rows-4 mx-2 my-8 grid grid-cols-8 grid-rows-2 gap-2 md:grid-rows-1">

        <div className="col-span-2 col-start-1 col-end-5 row-span-2 row-start-1 
          overflow-hidden rounded-xl border border-white transition-all duration-200 
          hover:rounded-3xl md:col-span-4 md:col-start-1 md:row-span-2
          lg:col-span-3 lg:col-start-2 lg:col-end-4 lg:row-span-1 xl:row-span-3">

          <img className="h-full max-h-[600px] w-full rounded-xl object-cover transition-all duration-200
            hover:scale-105 hover:rounded-3xl"
            src="/my_pic.webp" alt="my picture" />
        </div>

        <div className="mt-8 hidden xl:col-span-4 xl:col-start-4 xl:row-span-3 
          xl:row-start-1 xl:block xl:ml-8 2xl:ml-12">
          <BottomSection />
        </div>

        <div className="md:-col-start-4 col-start-5 col-end-7 row-start-1 
          my-4 flex items-end justify-center rounded-xl text-white lg:row-start-1 
          lg:items-start xl:col-span-1 xl:col-start-4 xl:col-end-4 xl:row-start-3 
          xl:mb-0 xl:mt-10 xl:items-end 2xl:row-start-2 2xl:row-end-4 2xl:items-center">

          <a href="#" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800 
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">

            FB
          </a>
        </div>

        <div className="md:-col-start-3 col-start-6 col-end-9 row-start-1 my-4 flex 
          items-end justify-center rounded-xl text-white lg:row-start-1 lg:items-start
          xl:col-span-1 xl:col-start-5 xl:row-start-3 xl:mb-0 xl:mt-10 xl:items-end
          2xl:row-start-2 2xl:row-end-4 2xl:items-center">

          <a href="#" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            IG
          </a>
        </div>

        <div className="md:-col-start-4 col-start-5 col-end-7 row-start-2 
          my-4 flex items-start justify-center rounded-xl text-white
          lg:row-start-1 lg:items-end xl:col-span-1 xl:col-start-6 xl:row-start-3
          xl:mb-0 xl:mt-10 xl:items-end 2xl:row-start-2 2xl:row-end-4 2xl:items-center">

          <a href="#" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            GH
          </a>
        </div>

        <div className="md:-col-start-3 col-start-6 col-end-9 row-start-2 my-4
          flex items-start justify-center rounded-xl text-white lg:row-start-1
          lg:items-end xl:col-span-1 xl:col-start-7 xl:row-start-3 xl:mb-0
          xl:mt-10 xl:items-end 2xl:row-start-2 2xl:row-end-4 2xl:items-center">

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
      <div className="mb-12 ml-2 mr-2 grid grid-cols-8 grid-rows-4">
        <h1 className="col-span-8 row-span-1 self-end text-3xl font-semibold 
          uppercase leading-3 text-gray-100 md:col-start-1 md:text-5xl lg:col-start-2
          xl:col-start-1">
          Jullian Quiambao
        </h1>

        <h1 className="col-span-8 row-span-1 text-2xl font-semibold uppercase 
          text-gray-100 md:col-start-1 md:text-5xl lg:col-start-2 xl:col-start-1">
          Full Stack Developer
        </h1>

        <p className="col-span-8 row-span-2 self-start text-lg leading-5 
          tracking-normal text-gray-100 md:col-start-1 md:text-2xl md:leading-7 
          lg:col-start-2 xl:col-start-1">
          A full stack developer that builds functional websites without sacrificing beauty. I thrive in high-pressure environments, delivering exceptional results while continously seeking ways to grow and master new skills. I would <b>love</b> to work with you.
        </p>
      </div>
    </>
  )
}


export default HeroSection
