'use client';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JsIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import React, { Fragment, useRef } from "react";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.jpeg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
const toolboxItems = [
  {
    title: 'JavaScript',
    iconType:JsIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
];
const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: "5%",
    top: "5%"
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Hiking',
    emoji: '⛰️',
    left: '35%',
    top: '40%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%'
  },
  {
    title: 'Fitness',
    emoji: '🏋🏼',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%'
  }
]
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return( 
    <div className="py-16 md:p-24 lg:p-32 container " id="About">
      
      {/* headder of About section */}
      <div className="container">
      <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center bg-clip-text text-transparent">About me</p>
      <h2 className="font-serif text-3xl mt-6 text-center md:5xl">A Glimpse Into My World</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        Learn more about who I am, what I do, and what inspires me.
      </p>
    </div>
      

      {/* //mento cards */}

      <div className="mt-20">
       
        <div className="md:grid md:grid-cols-5 gap-8 lg:grid-cols-3">
           {/* Book card */}
          <div 
          className="bg-gray-800 rounded-xl relative m-3 z-0 
          outline outline-white/20 overflow-hidden p-6 max-w-xs md:max-w-md lg:max-w-lg h-[320px] md:col-span-2 lg:col-span-1"
          >
            <div
              className="absolute inset-0 opacity-5 -z-10 "
              style={{
                backgroundImage: `url(${grainImage.src})`, 
              }}
            >
            </div>
            <div>
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif font-3xl">My Reads</h3>
              </div>
              <p className="text-sm text-white/60 mt-2">Explore the books shaping my perspectives.</p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </div>

          {/* Technology Card */}
          <div 
          className="bg-gray-800 rounded-xl relative m-3 z-0 
          outline outline-white/20 overflow-hidden p-6 max-w-xs md:max-w-md lg:max-w-xl h-[320px] md:col-span-3 lg:col-span-2"
          >
            <div
              className="absolute inset-0 opacity-5 -z-10 "
              style={{
                backgroundImage: `url(${grainImage.src})`, 
              }}
            >
            </div>
            <div >
            <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300"/>
                <h3 className="font-serif font-3xl">My Toolbox</h3>
              </div>
              <p className="text-sm text-white/60 mt-2">Explore the technologies and tools Iuse to craft exceptional digital experiences.</p>
            </div>
            <div className="grid grid-rows-2 gap-8 -mx-16 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] mt-6">
              <div className="inline-flex gap-4 animate-move-left [animation-duration:30s] pr-2">
                {[...new Array(2)].fill(0).map((_,index) =>(
                    <Fragment key={index}>
                      {toolboxItems.map(item => (
                      <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg max-w-xs">
                  
                          <TechIcon component={item.iconType} />
                          <span className="font-semibold ">{item.title}</span>
                        </div>
                      ))}
                    </Fragment>
                ))}
                
              </div>

              <div className="inline-flex gap-4 animate-move-right [animation-duration:15s] pr-2">
                {[...new Array(2)].fill(0).map((_,index) =>(
                    <Fragment key={index}>
                      {toolboxItems.map(item => (
                      <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg max-w-xs">
                  
                          <TechIcon component={item.iconType} />
                          <span className="font-semibold ">{item.title}</span>
                        </div>
                      ))}
                    </Fragment>
                ))}
                
              </div>

            </div>
          </div>
        </div>

           
          <div className="md:grid md:grid-cols-5 gap-8 lg:grid-cols-3">
             {/* hobby card */}
            <div 
            className="bg-gray-800 rounded-xl relative m-3 z-0 
            outline outline-white/20 overflow-hidden max-w-xs md:max-w-md h-[320px] p-0 md:col-span-3 lg:col-span-2 lg:max-w-xl"
          >
            <div
              className="absolute inset-0 opacity-5 -z-10 "
              style={{
                backgroundImage: `url(${grainImage.src})`, 
              }}
            ></div>
            <div className="p-6 flex-1">
            <div className="inline-flex items-center gap-2 ">
                <StarIcon className="size-9 text-emerald-300"/>
                <h3 className="font-serif font-3xl">Beyond the Code</h3>
              </div>
              <p className="text-sm text-white/60 mt-2">Explore my interests and hobbies beyond the digital round.</p>
            </div>

            <div className="relative min-h-48 flex-1" ref={constraintRef}>
              {hobbies.map(hobby =>(
                <motion.div className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute" key={hobby.title}
                style={{
                  left:hobby.left,
                  top:hobby.top,
                }} 
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
            </div>
          

            {/* map card */}

            <div 
            className="bg-gray-800 rounded-xl relative m-3 z-0 
            outline outline-white/20 overflow-hidden max-w-xs md:max-w-md lg:-ml-8 h-[320px] md:col-span-2 lg:col-span-1"
          >
            <div
              className="absolute inset-0 opacity-5 -z-10 "
              style={{
                backgroundImage: `url(${grainImage.src})`, 
              }}
            ></div>
            <Image src={mapImage} alt="map image" className="h-full w-full object-cover object-left-top" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1 -translate-y-1/4 size-20 bg-gradient-to-r from-emerald-300 to-sky-400 after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
            <Image src={smileMemoji} alt="smile-memoji" className="absolute size-20" />
            </div>
            </div>
          </div>
      </div> 

    </div>
  );
};
