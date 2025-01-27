import React from 'react'

const SkillsSection = ({ languages, others, tools }) => {
  const skills_lang = languages

  return (
    <>
      <section id="skills" className="projects-padding mx-2 p-1 text-gray-200
        flex xl:mt-12 xl:grid xl:grid-cols-12 xl:items-center">
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
      <h2 className="text-6xl font-semibold text-gray-200  
        lg:text-7xl xl:text-8xl 2xl:text-9xl">Skills & Experience</h2>
      <h3 className="font-regular mr-8 pr-1 text-2xl leading-6 text-gray-200 
        xl:text-4xl" style={{ fontFamily: "'Exo 2'" }}>
        Backend Development is my main area of expertise</h3>
      <p className="font-regular mt-4 leading-5 text-gray-200 lg:max-w-[60%]
        xl:max-w-[80%] xl:text-xl">
        I can create small to medium web applications with or without a team. Although my focus is back-end, I have been steadily learning how to create interactive and beautiful websites.
      </p>
    </>
  )
}

const Skills = ({ languages, others, tools }) => {
  return (
    <div className="mt-8 grid gap-8">

      {/* They all take an array to map over */}
      {/* Languages */}
      <div className="grid-rows-auto grid grid-cols-4">
        <h2 className="col-span-full text-3xl font-semibold tracking-wide">
          Languages
        </h2>

        <div className="col-span-full">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ">
            {
              languages.map((lang, index) => {
                return (
                  <li key={index} className="flex items-center gap-x-1 rounded
                    border border-white p-1 pr-2 text-xl
                    hover:bg-gray-200 hover:rounded-xl transition-all hover:text-gray-800 hover:font-semibold cursor-context-menu duration-300">
                    <span className="inline-flex h-10 w-10 items-center 
                      justify-center rounded-full">
                      <img src={lang.logo} alt={lang.name + "logo"} className="h-full w-full"
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
      <div className="grid-rows-auto grid grid-cols-4">
        <h2 className="col-span-full text-3xl font-semibold tracking-wide">
          Frameworks & Databases
        </h2>

        <div className="col-span-full mr-2">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ">
            {
              others.map((value, index) => {
                return (
                  <li key={index} className="flex flex-wrap items-center gap-x-1 rounded
                    border border-white p-1 pr-2 text-xl hover:bg-gray-200
                    hover:rounded-xl transition-all hover:text-gray-800
                    hover:font-semibold cursor-context-menu duration-300">
                    <span className="inline-flex h-10 w-10 flex-wrap 
                items-center justify-center rounded-full">
                      <img src={value.logo} alt={value.name + "logo"} className="h-full w-full"
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
      <div className="grid-rows-auto grid grid-cols-4">
        <h2 className="col-span-full text-3xl font-semibold tracking-wide">
          Tools
        </h2>

        <div className="col-span-full mr-2">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 ">
            {
              tools.map((value, index) => {
                return (
                  <li key={index} className="flex flex-wrap items-center gap-x-1 rounded
                    border border-white py-1 pr-2 text-xl hover:bg-gray-200 
                    hover:rounded-xl transition-all hover:text-gray-800 
                    hover:font-semibold cursor-context-menu duration-300">
                    <span className="inline-flex h-10 w-10 flex-wrap items-center justify-center rounded-full">
                      <img src={value.logo} alt={value.name + "logo"} className="h-full w-full"
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
