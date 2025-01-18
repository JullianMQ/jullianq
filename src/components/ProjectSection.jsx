import { motion } from 'motion/react';

const ProjectSection = () => {
  return (
    <section id="projects" className="mx-2 flex h-auto flex-col items-center gap-8">

      <ProjectCard
        title="Akaru"
        role="Lead Backend Developer"
        description="Akaru is a digital library that allows readers to read in a way that is engaging, is easy and fun. Akaru aims to bridge a gap between the reading experience and ease of use."
        image="src/assets/akaru-hero.png"
        languages={["src/assets/javascript-logo.svg", "src/assets/firebase-logo.svg", "src/assets/express-logo.svg"]}
      />
      <ProjectCard
        title="Kalium"
        role="Frontend Developer"
        description="Kalium is a project that showcases the design and development of a user-friendly website for Kalium Drugstore's pharmacy services. It highlights skills in web development, UI/UX design, and e-commerce functionality to enhance customer engagement and streamline access to pharmaceutical products."
        image="src/assets/kalium-hero.png"
        languages={["src/assets/javascript-logo.svg", "src/assets/tailwind-logo.svg", "src/assets/mongodb-logo.svg"]}
      />
      <ProjectCard
        title="Medica"
        role="PM/Lead Backend"
        description="Medica Pharmacy is a student project that aims to create a user-friendly website that streamlines the process of ordering medication from a pharmacy. The website is designed to be visually appealing, easy to navigate, and provides a seamless shopping experience for customers."
        image="src/assets/medica-hero.png"
        languages={["src/assets/javascript-logo.svg", "src/assets/mysql-logo.svg", "src/assets/php-logo.svg"]}
      />
    </section>
  )
}

const ProjectCard = ({ image, title, role, description, languages, links }) => {
  const project_title = title
  const project_image = image
  const project_description = description
  const project_languages = languages

  return (
    <motion.div className="grid-rows-8 lg:grid-rows-6 grid w-full grid-cols-6 md:gap-2 
      xl:grid-cols-12 xl:grid-rows-6"
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: .4, stiffness: 300, damping: 40, ease: "easeInOut" }}
      viewport={{ once: true, amount: .6, }}>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-start-2 xl:mr-8 xl:place-self-end">
        {project_languages.map((language, index) => {
          return (
            <div
              key={index}
              className="group h-10 w-10 rounded-full border-2 border-white 
             hover:border-gray-400 transition-colors duration-300"
            >
              <div className="h-full w-full bg-transparent group-hover:bg-black/50
                transition-colors duration-300 rounded-full">
                <img
                  src={language}
                  alt="language logo"
                  className="h-full w-full object-contain group-hover:opacity-50
                  transition-opacity duration-300"
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="col-span-4 row-span-3 flex justify-center 
      text-white border border-white md:row-span-4 xl:col-span-3 
        xl:row-span-5 rounded-md">
        <img className="object-cover h-full w-full rounded" src={project_image} alt="project image" />
      </div>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-span-2 xl:col-start-9 xl:row-span-1 xl:row-start-1 xl:flex 
        xl:items-center xl:justify-center xl:gap-4 xl:space-y-0">
        <div className="h-12 w-12 rounded-full border-2 border-white"> </div>
        <div className="h-12 w-12 rounded-full border-2 border-white"> </div>
      </div>

      <div className="projects-padding flex col-start-1 col-span-full
        row-start-5 mx-2 font-bold md:col-span-full md:row-start-5 md:col-start-1 
        xl:col-span-4 xl:col-start-6 xl:col-end-9 xl:row-start-1 xl:flex
        xl:items-center">

        <h1 className="text-4xl text-white xl:text-3xl 2xl:text-4xl uppercase">
          {project_title}
        </h1>
        <p className="text-neutral-400 ml-8 mt-3 uppercase"
          style={{ fontFamily: "Pridi" }}
        >{role}</p>
      </div>

      <div className="projects-padding col-start-1 col-span-full row-span-3
        row-start-5 mx-2 md:col-start-1 md:col-end-7 mt-16 
        xl:col-start-6 xl:col-end-12 xl:row-start-2 xl:mt-2">
        <p className="text-white font-semibold">
          {project_description}
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectSection
