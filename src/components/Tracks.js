"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  const heistData = [
    {
      title: "The Knowledge Exchange: EdTech",
      description: "Revolutionise education through sustainability-focused tools and resources.",
      prize: "₹10,000",
      icon: "/tracks/Edtech.png"
    },
    {
      title: "The Vital Vault: HealthCare", 
      description: "Solutions for sustainable healthcare, mental health, and accessible medical resources.",
      prize: "₹10,000",
      icon: "/tracks/Healthcare.png"
    },
    {
      title: "The Treasure Fund: Finance",
      description: "Finance and green investments, encouraging eco-conscious financial tools.",
      prize: "₹10,000",
      icon: "/tracks/Finance.png"
    },
    {
      title: "The Safe Zone: Security",
      description: "Address cybersecurity, data privacy, and tech safety.",
      prize: "₹10,000",
      icon: "/tracks/Security.png"
    },
    {
      title: "Women In Tech",
      description: "Celebrating and empowering women in technology by rewarding the best-performing all-women team with innovative and impactful tech solutions.",
      prize: "₹10,000",
      icon: "/tracks/WomeninTech.png"
    },
        {
      title: "The Green Vault: Environment & Energy Conservation",
      description: "Tackle environmental challenges, energy efficiency, and conservation innovations.",
      prize: "₹10,000",
      icon: "/tracks/Energy.png"
    },
    {
      title: "Product Design",
      description: "Recognizing excellence in UI/UX design by awarding the best-designed product that showcases user-centric innovation and exceptional aesthetics.",
      prize: "₹10,000",
      icon: "/tracks/Product.png"
    }
];

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

      {/* Title  */}
      <div className="relative flex justify-center items-start pt-8 md:pt-20 z-20 w-full">
        <h1 className="text-[#ffffff] text-3xl md:text-6xl font-bold mb-5 whitespace-nowrap">
          CHOOSE YOUR <span className="bg-[#7B181D] px-4 pb-2">HEIST</span>
        </h1>
      </div>

      {/* Cards  */}
      <div className="relative flex items-center justify-center min-h-screen pt-20 md:pt-0 pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 z-20">
          <div className="flex flex-wrap justify-center gap-y-5 gap-x-10">
            {heistData.map((heist, index) => (
              <Card 
                key={index}
                title={heist.title} 
                description={heist.description}
                prize={heist.prize}
                icon={heist.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, description, prize, icon }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-[#a9252c] group/canvas-card 
                 flex items-center justify-center 
                 dark:border-[#a9252c] 
                 w-[250px] h-[350px] 
                 relative 
                 mb-4"
    >
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -top-3 -left-3 dark:text-white text-[#a9252c]" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -bottom-3 -left-3 dark:text-white text-[#a9252c]" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -top-3 -right-3 dark:text-white text-[#a9252c]" />
      <Icon className="absolute h-4 w-4 md:h-6 md:w-6 -bottom-3 -right-3 dark:text-white text-[#a9252c]" />
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249]
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col gap-y-10 items-center justify-center text-white p-4 text-center">
              <h2 className="text-2xl font-bold ">{title}</h2>
              <p className="text-sm opacity-80">{description}</p>
              <div className="text-xl font-semibold text-[#7B181D]">Prize: {prize}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full flex items-center justify-center">
          <img 
            src={icon} 
            alt={title} 
            className="h-auto w-[85%] object-contain" 
          />
        </div>
        <h2 className="hidden dark:text-white text-base md:text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}

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