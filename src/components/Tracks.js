"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <div className="relative overflow-hidden bg-black z-10 min-h-screen">
<div
  className="absolute inset-0 z-10"
  style={{
    backgroundImage: `url('/bg_prof.JPG')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
></div>


      {/* Title Container */}
      <div className="relative flex justify-center items-start pt-8 md:pt-20 z-20 w-full">
        <h1 className="text-[#ffffff] text-3xl md:text-6xl font-bold whitespace-nowrap">
          CHOOSE YOUR <span className="bg-[#7B181D] px-4 pb-2">HEIST</span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="relative flex items-center justify-start min-h-screen pt-20 md:pt-0 pb-20">
        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 px-4 md:px-8 z-20 md:ml-[10%] md:mr-0 w-[80%] justify-items-center">
          
          {/* Card Components */}
          <Card title="Taj Mahal Heist" icon={<AceternityIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>

          <Card title="White House Heist" icon={<AceternityIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
            />
          </Card>
          <Card title="Taj Mahal Heist" icon={<AceternityIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>

          <Card title="White House Heist" icon={<AceternityIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-[#a9252c] group/canvas-card flex items-center justify-center dark:border-[#a9252c] w-[70%] sm:w-full p-4 relative aspect-[2/3] h-[280px] sm:h-[320px] lg:h-[400px] mb-4 sm:mb-0"
    >
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -bottom-3 -right-3 dark:text-white text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-base md:text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}

const AceternityIcon = () => {
  return (
    <svg
      width="40" 
      height="40" 
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffffff] dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
