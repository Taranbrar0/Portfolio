import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24 ">
    <div className="container">
      <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center bg-clip-text text-transparent">Happy Clients</p>
      <h2 className="font-serif text-3xl mt-6 text-center md:5xl">What Clients Say About Me</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        Don't just take my words for it. See what my clients have to say about my work.
      </p>
    </div>

    <div className="mt-16 md:mt-20 flex overflow-x-clip">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_,index)=>(
          <Fragment key={index}>
            {testimonials.map(testimonial=>(
              <div key={testimonial.name}
              className="bg-gray-800 rounded-xl relative m-3 z-0 
              after:[outline] after:[outline-white/20 ]overflow-hidden p-6 max-w-xs md:max-w-md [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] hover:-rotate-3 transition duration-300"
              >

                <div
                  className="absolute inset-0 opacity-5 -z-10 "
                  style={{
                    backgroundImage: `url(${grainImage.src})`, 
                  }}
                >
                </div>
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center">
                  <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" /> 
                  </div>
                  <div>
                  <div className="text-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                  </div>
                  <div className="mt-4 text-sm text-center justify-center md:text-base md:mt-6">{testimonial.text}</div>
                
                </div>
              ))}
          </Fragment>
        ))}
      
      </div>
    </div>
  </div>;
};
