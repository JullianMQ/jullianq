import { motion } from 'motion/react';

const ProjectSection = () => {
  return (
    <section id="projects" className="mx-2 flex h-auto flex-col items-center gap-8">

      <ProjectCard 
        title="Akaru"
        description="Akaru is a digital library that allows readers to read in a way that is engaging, and that is easy and fun. Akaru aims to bridge a gap between the reading experience and ease of use."
        image="src/assets/index.png"
      />
      <ProjectCard 
        title="Akaru"
        description="Akaru is a digital library that allows readers to read in a way that is engaging, and that is easy and fun. Akaru aims to bridge a gap between the reading experience and ease of use."
        image="src/assets/index.png"
      />
      <ProjectCard 
        title="Akaru"
        description="Akaru is a digital library that allows readers to read in a way that is engaging, and that is easy and fun. Akaru aims to bridge a gap between the reading experience and ease of use."
        image="src/assets/index.png"
      />
    </section>
  )
}

const ProjectCard = ({ image, title, description }) => {
  const project_title = title
  const project_image = image
  const project_description = description

  return (
    <motion.div className="grid-rows-8 grid w-full grid-cols-6 md:gap-2 
      xl:grid-cols-12 xl:grid-rows-6"
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: .4, stiffness: 300, damping: 40, ease: "easeInOut" }}
      viewport={{ once: true, amount: .6, }}>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-start-2 xl:mr-8 xl:place-self-end">
        <div className="h-10 w-10 rounded-full border-2 border-white"> </div>
        <div className="h-10 w-10 rounded-full border-2 border-white"> </div>
        <div className="h-10 w-10 rounded-full border-2 border-white"> </div>
      </div>

      <div className="col-span-4 row-span-3 flex items-center justify-center border
      border-white text-white md:row-span-4 xl:col-span-3 xl:row-span-5">
        <img src={project_image} alt="akaru image" />
      </div>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-span-2 xl:col-start-9 xl:row-span-1 xl:row-start-1 xl:flex 
        xl:items-center xl:justify-center xl:gap-4 xl:space-y-0">
        <div className="h-12 w-12 rounded-full border-2 border-white"> </div>
        <div className="h-12 w-12 rounded-full border-2 border-white"> </div>
      </div>

      <div className="projects-padding col-span-full row-start-5 mx-2
        font-bold md:col-span-4 md:row-start-5 lg:col-span-3 xl:col-span-4
        xl:col-start-6 xl:col-end-9 xl:row-start-1 xl:flex xl:items-center">
        <h1 className="text-4xl text-white xl:text-3xl 2xl:text-4xl">{project_title}</h1>
      </div>

      <div className="projects-padding col-span-full row-span-3 row-start-6 mx-2
        md:row-start-6 xl:col-start-6 xl:col-end-12 xl:row-start-2 xl:mt-2">
        <p className="text-white">
          {project_description}
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectSection
