import { motion } from 'motion/react';

const ProjectSection = () => {
  return (
    <section id="projects" className="h-full flex flex-col items-center mx-2 gap-8">
      <h1 className="text-4xl text-white font-bold">
        PROJECTS
      </h1>

      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}

const ProjectCard = () => {
  return (
    <motion.div className="grid grid-cols-6 grid-rows-8 w-full md:grid-cols-12 
      md:grid-rows-4"
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: .5, delay: .3 }}
      viewport={{
        once: true,
        //rootMargin: "50% 0px 0px 0px",
        //checkView: () => { console.log("Animation starts ")},
      }}>

      <div className="space-y-2 row-span-3 col-span-1 justify-self-center">
        <div className="w-10 h-10 rounded-full border-2 border-white"> </div>
        <div className="w-10 h-10 rounded-full border-2 border-white"> </div>
        <div className="w-10 h-10 rounded-full border-2 border-white"> </div>
      </div>
      <div className="border border-white col-span-4 row-span-3 text-white
      justify-center items-center flex md:row-span-4">
        <h1 className="text-5xl">Image</h1>
      </div>

      <div className="space-y-2 row-span-3 col-span-1 justify-self-center 
        md:col-span-2 md:row-span-1 md:flex md:justify-center md:items-center md:gap-4 md:space-y-0">
        <div className="w-12 h-12 rounded-full border-2 border-white"> </div>
        <div className="w-12 h-12 rounded-full border-2 border-white"> </div>
      </div>

      <div className="row-start-5 col-span-full font-bold mx-2 md:row-start-1 
        md:col-start-6 md:col-span-4 md:flex md:items-center">
        <h1 className="text-white text-4xl">Title of Project</h1>
      </div>

      <div className="row-start-6 col-span-full row-span-3 mx-2 md:col-start-6 
        md:row-start-2 md:mt-2">
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, deleniti officiis. Molestiae, nulla! In, id totam sed minus veniam enim a quaerat!
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectSection
