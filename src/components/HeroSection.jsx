
const HeroSection = () => {
  return (
    <>
      <TopSection />
      <section className="my-8 mx-2">
        <BottomSection />
      </section>
    </>
  )
}

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="grid grid-cols-8 grid-rows-4 my-8 mx-2">

        <div className="col-start-2 col-span-3 row-span-4">
          <img className="rounded-3xl"
            src="/my_pic.webp" alt="my picture" />
        </div>

        <div className="flex justify-center items-end -col-start-4 my-4
            row-span-2 rounded-xl text-white">
          <a href="#" className="flex justify-center items-center w-24 h-24 
              rounded-full bg-white text-gray-800 border-2 border-blue-500
              ">
            FB
          </a>
        </div>

        <div className="flex justify-center items-start -col-start-4 my-4
            row-span-2 rounded-xl text-white">
          <a href="#" className="flex justify-center items-center w-24 h-24 
              rounded-full bg-white text-gray-800 border-2 border-blue-500
              ">
            IG
          </a>
        </div>

        <div className="flex justify-center items-end -col-start-3 my-4 
            row-start-1 row-span-2 rounded-xl text-white">
          <a href="#" className="flex justify-center items-center w-24 h-24 
              rounded-full bg-white text-gray-800 border-2 border-blue-500
              ">
            GH
          </a>
        </div>

        <div className="flex justify-center items-start -col-start-3 my-4
            row-span-2 row-start-3 rounded-xl text-white">
          <a href="#" className="flex justify-center items-center w-24 h-24 
              rounded-full bg-white text-gray-800 border-2 border-blue-500
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
      <div className="grid grid-cols-8 grid-rows-4 mx-28">
        <h1 className="text-5xl font-bold text-gray-100 uppercase col-span-8
          row-span-1">
          Jullian Quiambao
        </h1>

        <h1 className="text-5xl font-bold text-gray-100 uppercase col-span-8
          row-span-1">
          Full Stack Developer
        </h1>

        <p className="text-gray-100 col-span-8 text-2xl row-span-2 mt-6">
          A full stack developer that focuses on the functionalities of the website. An effective website but an impactful experience.
        </p>
      </div>
    </>
  )
}


export default HeroSection
