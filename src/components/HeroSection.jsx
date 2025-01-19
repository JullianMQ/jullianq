const HeroSection = () => {
  return (
    <>
      <section id="home" className="mx-2 h-[75%] sm:h-auto">
        <TopSection />
        <section className="md:mb-20 md:mt-8 xl:hidden">
          <BottomSection />
        </section>
      </section>
    </>
  )
}

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="mx-2 mt-8 grid grid-cols-8 grid-rows-2 gap-2 md:grid-rows-1 
        xl:grid-rows-4">

        <div className="col-span-2 col-start-1 col-end-5 row-span-2 row-start-1 
          overflow-hidden rounded-xl border border-white transition-all duration-200 
          hover:rounded-3xl md:col-span-4 md:col-start-1 md:row-span-2
          lg:col-span-3 lg:col-start-2 lg:col-end-4 lg:row-span-1 xl:row-span-3">

          <img className="h-full max-h-[600px] w-full rounded-xl object-cover
            transition-all duration-200 hover:scale-105 hover:rounded-3xl"
            src="/my_pic.webp" alt="my picture" />
        </div>

        {/* LOGOS */}
        <div className="md:-col-start-4 col-start-5 col-end-7 row-start-1 
          my-4 flex items-end justify-center rounded-xl text-white lg:row-start-1 
          lg:items-start xl:col-span-1 xl:col-start-4 xl:col-end-4 xl:row-start-1 
          xl:mb-0 xl:mt-10 xl:items-end 2xl:row-start-1 2xl:row-end-2 2xl:items-center">

          <a href="https://www.facebook.com/JulzMQ" target="_blank" 
            className="flex h-12 w-12 items-center justify-center rounded-full
            border-2 bg-gray-200 text-gray-800 transition-colors duration-300
            hover:bg-gray-400 md:h-24 md:w-24 ">
            <img src="/facebook-logo.svg" alt="facebook logo" height="200" width="200" />
          </a>
        </div>

        <div className="md:-col-start-3 col-start-6 col-end-9 row-start-1 my-4 flex 
          items-end justify-center rounded-xl text-white lg:row-start-1 lg:items-start
          xl:col-span-1 xl:col-start-5 xl:row-start-1 xl:mb-0 xl:mt-10 xl:items-end
          2xl:row-start-1 2xl:row-end-2 2xl:items-center">

          <a href="https://www.instagram.com/julz.m.l/" target="_blank" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            <img src="/instagram-logo.svg" alt="instagram logo" height="200" width="200" />          
          </a>
        </div>

        <div className="md:-col-start-4 col-start-5 col-end-7 row-start-2 
          my-4 flex items-start justify-center rounded-xl text-white
          lg:row-start-1 lg:items-end xl:col-span-1 xl:col-start-6 xl:row-start-1
          xl:mb-0 xl:mt-10 xl:items-end 2xl:row-start-1 2xl:row-end-2 2xl:items-center">

          <a href="https://github.com/JullianMQ" target="_blank" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            <img src="/github-logo.svg" alt="github logo" height="200" width="200" />          
          </a>
        </div>

        <div className="md:-col-start-3 col-start-6 col-end-9 row-start-2 my-4
          flex items-start justify-center rounded-xl text-white lg:row-start-1
          lg:items-end xl:col-span-1 xl:col-start-7 xl:row-start-1 xl:mb-0
          xl:mt-10 xl:items-end 2xl:row-start-1 2xl:row-end-2 2xl:items-center">

          <a href="https://www.linkedin.com/in/jullian-quiambao-28142a2a2/" target="_blank" className="flex h-12 w-12 items-center justify-center 
            rounded-full border-2 bg-gray-200 text-gray-800
            transition-colors duration-300 hover:bg-gray-400 md:h-24 md:w-24 ">
            <img src="/linkedin-logo.svg" alt="linkedin logo" height="200" width="200" />          
          </a>
        </div>
        {/* LOGOS */}

        {/* INTRODUCTION */}
        <div className="mt-8 hidden xl:col-span-4 xl:col-start-4 xl:row-span-4 
          xl:row-start-2 xl:ml-8 xl:block 2xl:ml-12">
          <BottomSection />
        </div>
        {/* INTRODUCTION */}

      </div>
    </section>
  )
}

const BottomSection = () => {
  return (
    <>
      <div className="mb-12 ml-2 mr-2 grid grid-cols-8 grid-rows-4">
        <h1 className="col-span-8 row-span-1 self-end text-3xl font-semibold
          uppercase leading-3 text-gray-100 sm:text-6xl md:col-start-1 
          md:row-start-1 md:text-7xl lg:col-start-2 xl:col-start-1 xl:row-start-1 
          xl:text-6xl 2xl:text-7xl ">
          Jullian Quiambao
        </h1>

        <h1 className="col-span-8 col-start-1 row-span-1 row-start-2 text-2xl 
          font-semibold uppercase text-gray-100 sm:text-5xl md:col-start-1 
          md:row-span-2 md:row-start-1 md:mt-16 md:text-6xl lg:col-start-2 
          xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:mt-14 xl:text-5xl 
          2xl:mt-16 2xl:text-6xl">
          Full Stack Developer
        </h1>

        <p className="col-span-8 col-start-1 row-span-3 row-start-2 mt-12 self-start 
          text-lg leading-5 tracking-normal text-gray-100 md:col-start-1 md:mt-20 
          md:text-2xl md:leading-6 lg:col-start-2 lg:mt-16 xl:col-start-1 xl:mt-16 
          2xl:mt-20">
          A full stack developer that builds functional websites without sacrificing beauty. I thrive in high-pressure environments, delivering exceptional results while continously seeking ways to grow and master new skills. I would <b>love</b> to work with you.
        </p>
      </div>
    </>
  )
}


export default HeroSection
