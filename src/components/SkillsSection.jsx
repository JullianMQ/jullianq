import React from 'react'

const SkillsSection = ({ languages, others, tools }) => {
  const skills_lang = languages

  return (
    <>
      <section id="skills" className="text-gray-200 mx-2 p-1 projects-padding
        xl:grid xl:grid-cols-12 xl:items-center xl:mt-12">
        <div className="xl:col-span-10 xl:col-start-3 ">
          <HeadersSkills />
          <Skills languages={skills_lang}
            others={others}
            tools={tools} />
        </div>
      </section>
    </>
  )
}

const HeadersSkills = () => {
  return (
    <>
      <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold">Skills & Experience</h2>
      <h3 className="text-2xl xl:text-4xl text-gray-200 leading-6 font-regular pr-1 mr-8"
        style={{ fontFamily: "'Exo 2'" }}>
        Backend Development is my main area of expertise</h3>
      <p className="leading-5 mt-4 text-gray-200 font-regular xl:text-xl lg:max-w-[60%] xl:max-w-[80%]">
        I can create small to medium web applications with or without a team. Although my focus is back-end, I have been steadily learning how to create interactive and beautiful websites.
      </p>
    </>
  )
}

const Skills = ({ languages, others, tools }) => {
  return (
    <div className="grid gap-8 mt-8">

      {/* They all take an array to map over */}
      {/* Languages */}
      <div className="grid grid-cols-4 grid-rows-auto">
        <h2 className="text-3xl col-span-full font-semibold tracking-wide">
          Languages
        </h2>

        <div className="col-span-full">
          <ul className="flex gap-x-4 gap-y-2 flex-wrap ">
            {
              languages.map((lang, index) => {
                return (
                  <li key={index} className="flex gap-x-1 items-center text-xl
                    border border-white p-1 pr-2 rounded">
                    <span className="inline-flex h-10 w-10 rounded-full items-center justify-center">
                      <img src={lang.logo} alt={lang.name + "logo"} className="w-full h-full"
                        width="20" height="20" />
                    </span>
                    {lang.name}
                  </li>
                )
              })}

          </ul>
        </div>

      </div>
      {/* Languages */}

      {/* Others */}
      <div className="grid grid-cols-4 grid-rows-auto">
        <h2 className="text-3xl col-span-full font-semibold tracking-wide">
          Frameworks & Databases
        </h2>

        <div className="col-span-full mr-2">
          <ul className="flex gap-x-4 gap-y-2 flex-wrap ">
            {
              others.map((value, index) => {
                return (
                  <li key={index} className="flex flex-wrap gap-x-1 items-center text-xl
                    border border-white p-1 pr-2 rounded">
                    <span className="inline-flex flex-wrap h-10 w-10 
                rounded-full items-center justify-center">
                      <img src={value.logo} alt={value.name + "logo"} className="w-full h-full"
                        width="20" height="20" />
                    </span>
                    {value.name}
                  </li>
                )
              })}

          </ul>
        </div>

      </div>
      {/* Others */}

      {/* Tools */}
      <div className="grid grid-cols-4 grid-rows-auto">
        <h2 className="text-3xl col-span-full font-semibold tracking-wide">
          Tools
        </h2>

        <div className="col-span-full mr-2">
          <ul className="flex gap-x-4 gap-y-2 flex-wrap ">
            {
              tools.map((value, index) => {
                return (
                  <li key={index} className="flex flex-wrap gap-x-1 items-center text-xl
                    border border-white py-1 pr-2 rounded">
                    <span className="inline-flex flex-wrap h-10 w-10 rounded-full items-center justify-center">
                      <img src={value.logo} alt={value.name + "logo"} className="w-full h-full"
                        width="20" height="20" />
                    </span>
                    {value.name}
                  </li>
                )
              })}

          </ul>
        </div>

      </div>
      {/* Tools */}

    </div>
  )
}

export default SkillsSection
