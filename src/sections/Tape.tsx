import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
export const TapeSection = () => {
  const words =["Performant","Accessible","Secure","Interactive","Scalable","User Friendly","Responsive","Maintainable","Search Optimized","Usuable","Reliable"];
  return <div className="py-16 lg:py-24">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 [maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5) 90%, transparent 100%)']">
      <div className="flex">
        <div className="flex flex-none gap-4 pr-4 py-3 -translate-x-1/2 animate-move-left [animation-duration:30s] ">
          {[...new Array(2).fill(0).map((_,idx) =>(
              <Fragment key={idx}>
                {words.map(word =>(
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 text-sm uppercase font-extrabold">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-2"/>
                  </div>
                ))}
              </Fragment>
          ))]}
          
        </div>
      </div>
    </div>
  </div>;
};
