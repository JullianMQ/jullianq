const ProjectSection = () => {
  return (
    <section className="h-dvh flex flex-col items-center mx-2 gap-8">
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
    <div className="grid grid-cols-6 grid-rows-8 w-full">

      <div className="space-y-2 row-span-3 col-span-1 justify-self-center">
        <div className="w-10 h-10 rounded-full border-2 border-white"> </div>
        <div className="w-10 h-10 rounded-full border-2 border-white"> </div>
        <div className="w-10 h-10 rounded-full border-2 border-white"> </div>
      </div>

      <div className="border border-white col-span-4 row-span-3 text-white
        justify-center items-center flex">
        <h1 className="text-5xl">Image</h1>
      </div>

      <div className="space-y-2 row-span-3 col-span-1 justify-self-center ">
        <div className="w-12 h-12 rounded-full border-2 border-white"> </div>
        <div className="w-12 h-12 rounded-full border-2 border-white"> </div>
      </div>

      <div className="row-start-5 col-span-full font-bold mx-2">
        <h1 className="text-white text-4xl">Title of Project</h1>
      </div>

      <div className="row-start-6 col-span-full row-span-3 mx-2">
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, deleniti officiis. Molestiae, nulla! In, id totam sed minus veniam enim a quaerat! 
        </p>
      </div>
    </div>
  )
}

export default ProjectSection
