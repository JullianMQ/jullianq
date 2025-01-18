import React from 'react'

const SkillsSection = ({ languages, others, tools }) => {
  const skills_lang = languages

  return (
    <>
      <section id="skills" className="text-gray-200 h-[85%] ml-4 p-1 projects-padding
        xl:flex xl:flex-col xl:items-center xl:mt-12">
        <div className="">
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
      <h1 className="text-4xl">Skills & Experience</h1>
      <h2 className="text-2xl text-gray-300 leading-6 font-regular pr-1 mr-8"
        style={{ fontFamily: "'Exo 2'" }}>
        Backend Development is my main area of expertise</h2>
      <p className="leading-5 mt-4 text-gray-300 font-regular mr-8 pr-8 
        ">
        I can create small to medium web applications with or without a team. Although my focus is back-end, I have been steadily learning how to create interactive and beautiful websites.
      </p>
    </>
  )
}

const Skills = ({ languages, others, tools }) => {
  return (
    <div className="grid gap-8 mt-8 mr-8">

      {/* They all take an array to map over */}
      {/* Languages */}
      <div className="grid grid-cols-4 grid-rows-auto">
        <h2 className="text-3xl col-span-full font-semibold tracking-wide">
          Languages
        </h2>

        <div className="col-span-full mr-2">
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
          Others
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
      {/* Others */}
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
