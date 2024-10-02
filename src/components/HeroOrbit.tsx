import { PropsWithChildren } from "react";

export const HeroOrbit = ({ 
    children,
    size,
    rotation,
    shouldOrbit=false,
    orbitDuration ,
    shouldSpin=false,
    spinDuration
    }: PropsWithChildren<{
      size: number;
      rotation: number;
      orbitDuration?:string;
      shouldOrbit?: boolean;
      shouldSpin?: boolean;
      spinDuration?: string
    }>)=>{
    return(
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
        <div className={shouldOrbit?"animate-spin-slow":""} style={{
          animationDuration: orbitDuration,
        }}>
          <div className="flex items-start justify-start" style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px` ,
            width: `${size}px` ,
          }}>
            <div className={shouldSpin?"animate-spin-slow":""}
            style={{
              animationDuration: spinDuration
            }}>
              <div className="inline-flex" style={{
                transform: `rotate(${rotation*-1}deg)`,
              }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}