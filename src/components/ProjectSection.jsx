import { motion } from 'motion/react';

const ProjectSection = () => {
  return (
    <section id="projects" className="mx-2 flex h-auto flex-col items-center gap-8">
      <h1 className="text-4xl font-bold text-white">
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
    <motion.div className="grid-rows-8 grid w-full grid-cols-6 xl:grid-cols-12 
      md:gap-2"
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: .5, delay: .3 }}
      viewport={{
        once: true,
        //rootMargin: "50% 0px 0px 0px",
        //checkView: () => { console.log("Animation starts ")},
      }}>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-start-2 xl:mr-8 xl:place-self-end">
        <div className="h-10 w-10 rounded-full border-2 border-white"> </div>
        <div className="h-10 w-10 rounded-full border-2 border-white"> </div>
        <div className="h-10 w-10 rounded-full border-2 border-white"> </div>
      </div>

      <div className="col-span-4 row-span-3 flex items-center justify-center border
      border-white text-white xl:row-span-5 xl:col-span-3 md:row-span-4">
        <h1 className="text-5xl">Image</h1>
      </div>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-span-2 xl:row-span-1 xl:flex xl:items-center xl:justify-center 
        xl:gap-4 xl:space-y-0 xl:col-start-9 xl:row-start-1">
        <div className="h-12 w-12 rounded-full border-2 border-white"> </div>
        <div className="h-12 w-12 rounded-full border-2 border-white"> </div>
      </div>

      <div className="col-span-full row-start-5 mx-2 font-bold
        md:col-span-3 md:row-start-6 xl:col-span-4 projects-padding
        xl:col-start-6 xl:row-start-1 xl:flex xl:items-center xl:col-end-9">
        <h1 className="text-4xl xl:text-3xl  2xl:text-4xl text-white">Title of Project</h1>
      </div>

      <div className="col-span-full row-span-3 row-start-6 mx-2 xl:row-start-2
        xl:mt-2 xl:col-start-6 xl:col-end-12 md:row-start-7 projects-padding">
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, deleniti officiis. Molestiae, nulla! In, id totam sed minus veniam enim a quaerat!
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectSection
