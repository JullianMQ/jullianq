import React from 'react'
import { motion } from 'motion/react'
import { useState } from 'react'

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
        lg:text-7xl xl:text-8xl 2xl:text-9xl pb-4">Skills & Experience</h2>
      <h3 className="font-regular mr-8 pr-1 text-2xl leading-6 text-gray-200 
        xl:text-4xl" style={{ fontFamily: "'Exo 2'" }}>
        I excel in designing a full stack development from diagrams to graphs</h3>
      <p className="font-regular mt-4 leading-5 text-gray-200 lg:max-w-[60%]
        xl:max-w-[80%] xl:text-xl">
        I can create small to medium web applications with or without a team. Although my focus is back-end, I have been steadily learning how to create interactive and beautiful websites.
      </p>
    </>
  )
}

const fadeInUp = {
  initial: { y: 100, opacity: 0 },
  animate: (index) => ({
    y: 0, opacity: 1,
    transition: {
      duration: .1,
      delay: (index * .2),
      damping: 200,
      stiffness: 50,
    },
  })
}

const mapSkills = (array) => {
  return (
    array.map((val, index) => {
      const [animationDone, setAnimationDone] = useState(false)
      return (
        <motion.li
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          transition="transition"
          custom={index}
          viewport={{ once: true }}
          onAnimationComplete={() => {
            setAnimationDone(true)
          }}
          key={index}
          className={`flex items-center gap-x-1 rounded
                    border border-white py-2 pl-1 pr-3 text-xl
                  hover:bg-gray-200 hover:rounded-xl hover:text-gray-800
                    hover:font-semibold cursor-context-menu 
                    ${animationDone ? "transition-all duration-300" : ""}`}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full">
            <img src={val.logo} alt={val.name + "logo"} className="h-full w-full" width="20" height="20" />
          </span>
          {val.name}
        </motion.li>
      )
    }))
}

const Skills = ({ languages, others, tools }) => {
  const categories = [
    { title: "Languages", skills: languages },
    { title: "Frameworks & Databases", skills: others },
    { title: "Tools", skills: tools },
  ];

  return (
    <div className="mt-8 grid gap-8">
      {categories.map(({ title, skills }) => (
        <div key={title} className="grid-rows-auto grid grid-cols-4">
          <h2 className="col-span-full text-3xl font-semibold tracking-wide">
            {title}
          </h2>
          <div className="col-span-full">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">{mapSkills(skills)}</ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection
