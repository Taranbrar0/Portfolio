import tripPlanner from "@/assets/images/tripPlanner.png";
import musicBinge from "@/assets/images/musicBinge.png";
import portfolio from "@/assets/images/portfolio.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from"@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
const portfolioProjects = [
  {
    company: "Trip Planner Ai",
    year: "2024",
    title: "Ai To Genrate Trip Plans",
    results: [
      { title: "Implented Google Gemni to genrate trips" },
      { title: "Used Google Places Api to get Pictures" },
      { title: "Stored Database of Application on firebase" },
    ],
    link: "https://trip-planner-ai.netlify.app/",
    image: tripPlanner,
  },
  {
    company: "Music Binge",
    year: "2024",
    title: "Full Stack Music Streaming WebApp",
    results: [
      { title: "Developed a full-stack music streaming application using the MERN stack" },
      { title: "Implemented user authentication, music library management, and streaming capabilities" },
      { title: "Customized user experience based on song listen activity and most liked song categories" },
    ],
    link: "https://musicbinge.netlify.app/",
    image: musicBinge,
  },
  {
    company: "Portfolio",
    year: "2024",
    title: "nextJs Portfolio",
    results: [
      { title: "Taken TypeScript into play" },
      { title: "Userfriendly UI/UX" },
      { title: "Tailwind to style" },
    ],
    link: "#",
    image: portfolio,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="Projects">
      <div className="container">

        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center bg-clip-text text-transparent">Real-world Results</p>
        </div>
        <h2 className="font-serif text-3xl mt-6 text-center md:5xl">Featured projects</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">See how I transformed concepts into engaging digital experiences.</p>

        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 pb-0 after:pointer-events-none md:pt-12 md:px-10 lg:mt-16 lg:px-20 sticky" style={{
              top:`calc(64px + ${projectIndex * 40}px)`
            }}>
              
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`, 
                }}
              >
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300  to-sky-400 inline-flex font-bold tracking-widest text-sm gap-2 text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
              
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base md:mt-5" key={result.title}>
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">Vist live Site
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
              <div>
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
