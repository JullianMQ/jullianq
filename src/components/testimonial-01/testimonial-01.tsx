import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 2,
    name: "Bryan Santiago",
    designation: "Frontend Developer",
    testimonial:
      "Julz is one of the most exceptional backend developers I know. His deep understanding of backend systems, efficiency in problem-solving, and ability to optimize performance make him stand out as one of the best in our batch. Working with him has been an enjoyable experience, and his passion for backend development continuously pushes those around him to strive for excellence.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Frances Tumampos",
    designation: "Paid Customer, Frontend Developer",
    testimonial:
      "Jullian is a very capable developer and project manager. He is in a league of his own in our class and our debugger for our projects. Made my job in the frontend easy.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Kurt Christian",
    designation: "Paid Customer, Frontend Developer",
    testimonial:
      "Jullian did an amazing job bringing my vision for KC Travels to life. He was professional, easy to work with, and always open to feedback, ensuring that every aspect of the site matched my expectations. If you need a reliable and talented web developer for your next project, Jullian is the one to go to!",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 1,
    name: "Mark Quiambao",
    designation: "Frontend Developer",
    testimonial:
      "Working with Jullian Quiambao for a group project was an absolute pleasure! From start to finish, the process was seamless delivering beyond expectations and i couldn't be more pleased with the way he handles the backend with its clean, scalable code, problem-solving skills, and leadership that keeps the whole backend team organized.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 5,
    name: "Rham Viray",
    designation: "UI/UX Designer",
    testimonial:
      "Working with Jullian has been great. He's a really good and skilled developer, and he makes it easy to understand things. Communicating with him is simple. I'd definitely recommend him to anyone who needs a skilled and easy-to-work-with developer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 6,
    name: "Ariana Punsalang",
    designation: "Backend Developer",
    testimonial:
      "Jullian Quiambao is a highly skilled and dedicated to work with. He constantly delivers high quality work.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const Testimonial01 = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <h2 className="font-pridi text-6xl font-semibold text-gray-200  
        lg:text-7xl xl:text-8xl 2xl:text-9xl pb-4">
        Testimonials
      </h2>
      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 rounded-xl p-6 break-inside-avoid border-white border"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-gray-200 text-zinc-900">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold text-gray-200">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-gray-200 text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial01
