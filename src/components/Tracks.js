"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import cardData from "./TracksData";

export function CanvasRevealEffectDemo() {
  // Function to generate random colors
  const generateRandomColor = () => {
    const randomValue = () => Math.floor(Math.random() * 256);
    return [randomValue(), randomValue(), randomValue()];
  };

  return (
    <div className="relative overflow-hidden bg-black z-10 min-h-screen">
      <div
        className="absolute inset-0 z-10 bg-cover bg-right bg-fixed"
        style={{
          backgroundImage: `url('backgrounds/bg_prof.JPG')`,
        }}
      ></div>
      <div
        className="absolute inset-0 z-10 bg-cover bg-bottom md:hidden"
        style={{
          backgroundImage: `url('backgrounds/bg_prof_mobile.jpg')`,
        }}
      ></div>

      {/* Title */}
      <div className="relative flex justify-center items-start pt-8 md:pt-20 z-20 w-full">
        <h1 className="text-[#ffffff] text-3xl md:text-6xl font-bold whitespace-nowrap">
          CHOOSE YOUR <span className="bg-[#7B181D] px-4 pb-2">HEIST</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="relative flex items-center justify-start min-h-screen pt-20 md:pt-0 pb-20">
        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 px-4 md:px-8 z-20 justify-items-center">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              number={card.number}
              description={card.description}
              // Conditionally pass image if it exists, else pass icon
              image={card.image ? card.image : undefined}  // Pass image if it exists
              icon={!card.image ? card.icon : undefined}    // Pass icon if image does not exist
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[generateRandomColor(), generateRandomColor()]}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}




const Card = ({ title, description, number, icon, image, children }) => {
  const [hovered, setHovered] = React.useState(false);

  // Detect if the device is touch-enabled
  const isTouchDevice = React.useMemo(
    () => typeof window !== "undefined" && "ontouchstart" in window,
    []
  );

  // Toggle hovered state for touch devices
  const toggleHovered = () => {
    if (isTouchDevice) {
      setHovered((prev) => !prev);
    }
  };

  return (
    <div
      onMouseEnter={!isTouchDevice ? () => setHovered(true) : undefined}
      onMouseLeave={!isTouchDevice ? () => setHovered(false) : undefined}
      onClick={toggleHovered}
      className="border border-[#a9252c] group/canvas-card flex items-center justify-center dark:border-[#a9252c] w-[70%] sm:w-full p-4 relative aspect-[2/3] h-[280px] sm:h-[320px] lg:h-[400px] mb-4 sm:mb-0"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -bottom-3 -right-3 dark:text-white text-white" />

      {/* Background overlay when hovered */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 bg-black bg-opacity-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full w-full">
        {/* Icon or Image (Visible by default, disappears and moves up when hovered) */}
        <div
          className={`text-center absolute top-1/2 transform -translate-y-1/2 w-full flex items-center justify-center 
            ${hovered ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'} 
            transition-all duration-300`}
        >
          {image ? (
            <img src={image} alt="Card Image" className="h-10 w-10 md:h-14 md:w-14" />
          ) : (
            icon
          )}
        </div>

        {/* Title (Appears when hovered) */}
        <h2
          className={`dark:text-white text-lg md:text-xl font-bold text-white 
            ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} 
            transition-all duration-300 text-center mt-10`}
        >
          {title}
        </h2>

        {/* Description (Appears when hovered) */}
        <p
          className={`text-sm md:text-base text-gray-400 dark:text-gray-300 text-center px-4 
            ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} 
            transition-all duration-300 mt-2`}
        >
          {description}
        </p>

        {/* Number (Appears when hovered) */}
        <div
          className={`text-lg md:text-2xl font-bold text-[#a9252c] dark:text-[#a9252c] 
            ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} 
            transition-all duration-300 mb-10`}
        >
          {number}
        </div>
      </div>
    </div>
  );
};


const CardIcon = () => {
  return (
    <svg
      height="40px"
      width="40px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 300.439 300.439"
      xmlSpace="preserve"
    >
      <g>
        <path
          style={{ fill: "#BF392C" }}
          d="M276.967,0h-84.498L70.415,178.385h84.498L276.967,0z"
        />
        <path
          style={{ fill: "#E2574C" }}
          d="M23.472,0h84.498l122.053,178.385h-84.498L23.472,0z"
        />
        <path
          style={{ fill: "#EFC75E" }}
          d="M154.914,93.887c57.271,0,103.276,46.005,103.276,103.276s-46.005,103.276-103.276,103.276 S51.638,254.434,51.638,197.163S97.643,93.887,154.914,93.887z"
        />
        <path
          style={{ fill: "#D7B354" }}
          d="M154.914,122.053c-41.31,0-75.11,33.799-75.11,75.11s33.799,75.11,75.11,75.11 s75.11-33.799,75.11-75.11S196.224,122.053,154.914,122.053z M154.914,253.495c-30.983,0-56.332-25.35-56.332-56.332 s25.35-56.332,56.332-56.332s56.332,25.35,56.332,56.332S185.896,253.495,154.914,253.495z"
        />
      </g>
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
