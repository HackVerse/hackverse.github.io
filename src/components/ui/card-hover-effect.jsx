import { cn } from "../../utils/cn";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { useState, useRef } from "react";

const teamMembers = [
  {
    name: "John Doe",
    short_desc: "Full Stack Developer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/johndoe",
    github_url: "https://github.com/johndoe",
    linkedin_url: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    short_desc: "UI/UX Designer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/janesmith",
    github_url: "https://github.com/janesmith",
    linkedin_url: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Alice Johnson",
    short_desc: "Data Scientist",
    image: "img/person.png",
    twitter_url: "https://twitter.com/alicejohnson",
    github_url: "https://github.com/alicejohnson",
    linkedin_url: "https://linkedin.com/in/alicejohnson",
  },
  {
    name: "Bob Brown",
    short_desc: "DevOps Engineer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/bobbrown",
    github_url: "https://github.com/bobbrown",
    linkedin_url: "https://linkedin.com/in/bobbrown",
  },
  {
    name: "Carol White",
    short_desc: "Machine Learning Engineer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/carolwhite",
    github_url: "https://github.com/carolwhite",
    linkedin_url: "https://linkedin.com/in/carolwhite",
  },
  {
    name: "David Black",
    short_desc: "Cloud Architect",
    image: "img/person.png",
    twitter_url: "https://twitter.com/davidblack",
    github_url: "https://github.com/davidblack",
    linkedin_url: "https://linkedin.com/in/davidblack",
  },
  {
    name: "Eve Green",
    short_desc: "Frontend Developer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/evegreen",
    github_url: "https://github.com/evegreen",
    linkedin_url: "https://linkedin.com/in/evegreen",
  },
  {
    name: "Frank Blue",
    short_desc: "Backend Developer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/frankblue",
    github_url: "https://github.com/frankblue",
    linkedin_url: "https://linkedin.com/in/frankblue",
  },
  {
    name: "Grace Yellow",
    short_desc: "Product Manager",
    image: "img/person.png",
    twitter_url: "https://twitter.com/graceyellow",
    github_url: "https://github.com/graceyellow",
    linkedin_url: "https://linkedin.com/in/graceyellow",
  },
  {
    name: "John Doe",
    short_desc: "Full Stack Developer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/johndoe",
    github_url: "https://github.com/johndoe",
    linkedin_url: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    short_desc: "UI/UX Designer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/janesmith",
    github_url: "https://github.com/janesmith",
    linkedin_url: "https://linkedin.com/in/janesmith",
  },
  {
    name: "John Doe",
    short_desc: "Full Stack Developer",
    image: "img/person.png",
    twitter_url: "https://twitter.com/johndoe",
    github_url: "https://github.com/johndoe",
    linkedin_url: "https://linkedin.com/in/johndoe",
  },
];

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center w-full">
<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4 md:gap-x-20 md:gap-y-16 lg:gap-x-28 lg:gap-y-20 py-10 max-w-7xl", className)}>
{teamMembers.map((item, idx) => (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full max-w-[320px] mx-auto"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full max-w-[320px] bg-red-800 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <FadeInCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const FadeInCard = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 1 });// Check if the card is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={isInView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl h-full w-full max-w-[320px] p-4 overflow-hidden bg-[#7B181D] border border-transparent relative z-20"
    >
      <img
        src={item.image}
        className="w-40 h-40 mx-auto rounded-xl object-cover"
        alt={item.name}
        width={160}
        height={160}
      />
      <div className="grid grid-rows-3 grid-col-4 h-[190px] md:h-[150px] lg:h-[125px] my-auto mx-auto text-center items-center">
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.short_desc}</CardDescription>
        <div className="w-[70%] flex flex-row mx-auto my-auto justify-center gap-4 md:gap-6 mt-5 text-white">
          {item.twitter_url && (
            <a href={item.twitter_url} target="_blank" rel="noopener noreferrer">
              <IconBrandTwitter size={24} strokeWidth={1.2} className="hover:text-primary-purple hover:stroke-2" />
            </a>
          )}
          {item.github_url && (
            <a href={item.github_url} target="_blank" rel="noopener noreferrer">
              <IconBrandGithub size={24} strokeWidth={1.2} className="hover:text-primary-purple hover:stroke-2" />
            </a>
          )}
          {item.linkedin_url && (
            <a href={item.linkedin_url} target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin size={24} strokeWidth={1.2} className="hover:text-primary-purple hover:stroke-2" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

export default HoverEffect;