import Autoplay from "embla-carousel-autoplay"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { motion } from 'motion/react';

const ProjectSection = () => {
  return (
    <section id="projects" className="mx-2 flex flex-col items-center gap-8">
      <h2 className="text-6xl font-semibold text-white lg:my-12
        lg:text-7xl xl:text-8xl 2xl:text-9xl">
        Projects
      </h2>

      <ProjectCard
        title="Akaru"
        role="Lead Backend Developer"
        description="Akaru is a digital library that allows readers to read in a way that is engaging, is easy and fun. Akaru aims to bridge a gap between the reading experience and ease of use."
        image={["/akaru-hero.webp", "/akaru-borrowed.webp", "akaru-login.webp", "akaru-manage.webp"]}
        languages={["/javascript-logo.svg", "/firebase-logo.svg", "/express-logo.svg"]}
        links={[["https://github.com/JullianMQ/Akaru", "/github-logo.svg"], ["http://www.akaru.rf.gd", "/browser-logo.svg"]]}
      />
      <ProjectCard
        title="Kalium"
        role="Frontend Developer"
        description="Kalium is a project that showcases the design and development of a user-friendly website for Kalium Drugstore's pharmacy services. It highlights skills in web development, UI/UX design, and e-commerce functionality to enhance customer engagement and streamline access to pharmaceutical products."
        image={["/kalium-hero.webp", "/kalium-banner.webp", "/kalium-gallery.webp", "/kalium-contact.webp"]}
        languages={["/javascript-logo.svg", "/tailwind-logo.svg", "/mongodb-logo.svg"]}
        links={[["https://github.com/JullianMQ/kalium-drugstore", "/github-logo.svg"], ["https://jullianmq.github.io/kalium-drugstore/public/", "/browser-logo.svg"]]}
      />
      <ProjectCard
        title="Medica"
        role="PM/Lead Backend"
        description="Medica Pharmacy is a student project that aims to create a user-friendly website that streamlines the process of ordering medication from a pharmacy. The website is designed to be visually appealing, easy to navigate, and provides a seamless shopping experience for customers."
        image={["/medica-hero.webp", "/medica-reviews.webp", "/medica-login.webp", "/medica-contact.webp"]}
        languages={["/javascript-logo.svg", "/mysql-logo.svg", "/php-logo.svg"]}
        links={[["https://github.com/JullianMQ/medica-pharmacy", "/github-logo.svg"]]}
      />
    </section>
  )
}

function getLangName(name) {
  const langName = name.slice(1, 2).toUpperCase() + name.slice(2, name.indexOf('-'));
  return langName;
}

const ProjectCard = ({ image, title, role, description, languages, links }) => {
  const project_title = title
  const project_image = image
  const project_description = description
  const project_languages = languages
  const project_links = links

  return (
    <motion.div className="grid-rows-8 grid w-full grid-cols-6 md:gap-2
      lg:grid-rows-6 xl:grid-cols-12 xl:grid-rows-6"
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: .4, stiffness: 300, damping: 40, ease: "easeInOut" }}
      viewport={{ once: true, amount: (window.innerWidth > 768 ? 0.6 : 0.1) }}>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-start-2 xl:mr-8 xl:place-self-end z-10">
        {project_languages.map((language, index) => {
          return (
            <div
              key={index}
              className="group h-10 w-10 rounded-full border-2 border-white 
             transition-colors duration-300 hover:border-gray-400">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="h-full w-full cursor-context-menu rounded-full
                bg-transparent transition-colors duration-300 
                      group-hover:bg-black/50">
                      <img
                        src={language}
                        alt={getLangName(language)}
                        className="h-full w-full object-contain transition-opacity
                  duration-300 group-hover:opacity-50"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm text-white">{getLangName(language)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )
        })}

      </div>


      <div className="col-span-4 row-span-3 flex cursor-pointer justify-center
      overflow-hidden rounded-md border border-white text-white transition-all 
        duration-300 hover:scale-105 hover:border-red-500 hover:border-2 md:row-span-4 xl:col-span-3 xl:row-span-5">

        <Dialog>
          <DialogTrigger>
            <Carousel plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false
              })
            ]}
              className="w-full h-full justify-center items-center">
              <CarouselContent>
                {Array.from({ length: project_image.length }).map((_, index) => (
                  <CarouselItem key={index}>
                    <img className="h-full w-full rounded hover:rounded-3xl object-cover
                transition-all duration-300 hover:scale-105"
                      src={project_image[index]} alt="project image" loading="lazy"/>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] md:max-w-[90%] lg:max-w-[80%]
            max-h-[900px] pb-8 ">
            <Carousel plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false
              })
            ]}
              className="w-full justify-center items-center mt-2">
              <CarouselContent className="max-h-[800px]">
                {Array.from({ length: project_image.length }).map((_, index) => (
                  <CarouselItem key={index}>
                    <img className="w-full rounded hover:rounded-3xl
                      object-cover transition-all duration-300 
                      cursor-grab active:cursor-grabbing"
                      src={project_image[index]} alt="project image" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            <CarouselNext className="hidden md:flex"/>
            <CarouselPrevious className="hidden md:flex"/>
            </Carousel>
          </DialogContent>
        </Dialog>

      </div>

      <div className="col-span-1 row-span-3 space-y-2 justify-self-center 
        xl:col-span-2 xl:col-start-9 xl:row-span-1 xl:row-start-1 xl:flex 
        xl:items-center xl:justify-center xl:gap-4 xl:space-y-0">
        {project_links.map((element, index) => {
          return (
            <div key={index} className="flex h-12 w-12 items-center 
              justify-center overflow-hidden rounded-full border-2 border-white
              bg-white transition-colors duration-300 
              hover:border-gray-400">

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a href={element[0]} target="_blank">
                      <img
                        src={element[1]}
                        alt="github logo"
                        className="z-10 h-full w-full object-contain
                        transition-colors duration-300 hover:border-gray-400 
                      hover:bg-gray-400 group-hover:opacity-50"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm text-white">
                      {"Go to " + getLangName(element[1])}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

            </div>
          )
        })}
      </div>

      <div className="projects-padding col-span-full col-start-1 row-start-5
        mx-2 flex font-bold md:col-span-full md:col-start-1 md:row-start-5 
        xl:col-span-4 xl:col-start-6 xl:row-start-1 xl:flex xl:items-center z-0">
        <h1 className="text-4xl uppercase text-white xl:text-3xl 2xl:text-4xl">
          {project_title}
        </h1>
        <p className="ml-8 mt-3 text-sm uppercase tracking-wide text-neutral-400"
          style={{ fontFamily: "Pridi" }}
        >{role}</p>
      </div>

      <div className="projects-padding col-span-full col-start-1 row-span-3
        row-start-5 mx-2 mt-16 md:col-start-1 md:col-end-7 xl:col-span-6
        xl:col-start-6 xl:row-start-2 xl:mt-2 2xl:col-end-10">
        <p className="font-regular text-white md:text-lg xl:leading-6">
          {project_description}
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectSection
