import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faq = [
  {
    question: "Who am I?",
    answer:
      "Hello! I am Jullian Quiambao a Full Stack Developer and a somewhat Project Manager, I have been working hard as a developer for about 3 years now. I have experience in both development and management during my projects and I specialize in creating amazing web applications.",
  },
  {
    question: "What do you specialize in?",
    answer:
      "I specialize in creating web applications, I ensure that the final product is user-friendly, responsive, and visually appealing. I also ensure that the application is secure and follows best practices for web development.",
  },
  {
    question: "What technologies do I use?",
    answer:
      "I work with modern web technologies such as JavaScript, TypeScript, Go, Python along with frameworks like Django, React, Angular and databases like PostgreSQL and MongoDB.",
  },
  {
    question: "What sets me apart?",
    answer:
      "Beyond coding, I have a strong understanding of project management and business needs. I can bridge the gap between technical and non-technical teams, ensuring smooth development cycles. My problem-solving skills and adaptability make me a valuable asset to any project.",
  },
  {
    question: "What are my future goals?",
    answer:
      "I am always eager to learn and explore new technologies. Currently, I am diving deeper into distributed systems, microservices, and AI-driven applications. My long-term goal is to contribute to impactful projects that enhance user experiences and streamline business processes.",
  }
];

const dumpling = [
  {
    question: "Meeow mew mow?",
    answer:
      "Meow meow meoooow meow meo meow meooow meow meeeooow mmmeow, Meow meow meoooow meow meo meooow meeeooow mmmeow",
  },
  {
    question: "Meeeow meooow meow meooowm?",
    answer:
      "Graawrr, graaaaawr raaaarrrrr, graawrr, graaaaawr raaaarrrrr, graawrr, graaaaawr raaaarrrrr",
  },
  {
    question: "Graawr rawr raar?",
    answer:
      "Meow meow meoooow meow meo meow meooow meow meeeooow mmmeow, Meow meow meoooow meow meo meooow meeeooow mmmeow",
  },
  {
    question: "Graawr raar rawrr raww raarrr?",
    answer:
      "Graawrr, graaaaawr raaaarrrrr, graawrr, graaaaawr raaaarrrrr, graawrr, graaaaawr raaaarrrrr",
  },
  {
    question: "Meeow meow meeow?",
    answer:
      "Meow meow meoooow meow meo meow meooow meow meeeooow mmmeow, Meow meow meoooow meow meo meooow meeeooow mmmeow",
  }
];
const FAQ02 = () => {
  const [isHovered, setIsHovered] = useState(true)

  return (
    <div className="col-start-1 col-end-12 2xl:col-start-3 2xl:col-end-11 min-h-screen flex items-center justify-center px-6 py-12 text-gray-200">
      <div className="flex flex-col lg:flex-row items-start gap-x-12 gap-y-6">
        <div onMouseEnter={()=> setIsHovered(false)} onMouseLeave={()=> setIsHovered(true)} className="">

          <h2 className="text-4xl lg:text-5xl 2xl:text-8xl !leading-[1.15] font-bold tracking-tight">
            {isHovered ? "About Me" : "GRaWrRrR"}
          </h2>

          <img className="lg:h-96 w-full object-cover rounded-md"
            src={isHovered ? ("my_pic.webp") : ("dumpling.webp")} alt="Jullian Quiambao's Picture" />

        </div>

        <Accordion type="single" defaultValue="question-0" className="max-w-xl">
          {(isHovered ? faq : dumpling).map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-xl md:text-3xl lg:text-4xl text-nowrap">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base 2xl:text-xl">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ02;
