
const HeroSection = () => {
  return (
    <>
      <TopSection />
      <section className="mx-2 my-8">
        <BottomSection />
      </section>
    </>
  )
}

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="mx-2 my-8 grid grid-cols-8 grid-rows-4">

        <div className="col-span-3 col-start-2 row-span-4 rounded-xl 
          transition-all duration-200 hover:rounded-3xl overflow-hidden 
          border border-white">
          <img className="rounded-xl hover:scale-105
            transition-all duration-200 hover:rounded-3xl"
            src="/my_pic.webp" alt="my picture" />
        </div>

        <div className="-col-start-4 row-span-2 my-4 flex items-end
            justify-center rounded-xl text-white">
          <a href="#" className="flex h-24 w-24 items-center justify-center 
              rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
              hover:bg-gray-400 transition-colors duration-300
            ">
            FB
          </a>
        </div>

        <div className="-col-start-4 row-span-2 my-4 flex items-start
            justify-center rounded-xl text-white">
          <a href="#" className="flex h-24 w-24 items-center justify-center 
              rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
              hover:bg-gray-400 transition-colors duration-300
              ">
            IG
          </a>
        </div>

        <div className="-col-start-3 row-span-2 row-start-1 my-4 flex 
            items-end justify-center rounded-xl text-white">
          <a href="#" className="flex h-24 w-24 items-center justify-center 
              rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
              hover:bg-gray-400 transition-colors duration-300
              ">
            GH
          </a>
        </div>

        <div className="-col-start-3 row-span-2 row-start-3 my-4 flex
            items-start justify-center rounded-xl text-white">
          <a href="#" className="flex h-24 w-24 items-center justify-center 
              rounded-full border-2 border-blue-500 bg-gray-200 text-gray-800
              hover:bg-gray-400 transition-colors duration-300
              ">
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
      <div className="mx-28 grid grid-cols-8 grid-rows-4">
        <h1 className="col-span-8 row-span-1 text-5xl font-bold uppercase
          text-gray-100">
          Jullian Quiambao
        </h1>

        <h1 className="col-span-8 row-span-1 text-5xl font-bold uppercase
          text-gray-100">
          Full Stack Developer
        </h1>

        <p className="col-span-8 row-span-2 mt-4 text-2xl text-gray-100
          tracking-tight leading-7">
          A full stack developer that focuses on the functionalities of the website. An effective website but an impactful experience.
        </p>
      </div>
    </>
  )
}


export default HeroSection
