import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  // IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import { cn } from "../../utils/cn";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center w-full">
      <div
        className={cn(
          "flex flex-wrap gap-6 gap-x-10 py-10 max-w-7xl w-full justify-center",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group block p-2 w-full max-w-[225px] mx-auto"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-red-800 block rounded-3xl -z-10"
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
  const isInView = useInView(ref, { once: true, threshold: 1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={isInView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative rounded-2xl w-full max-w-[225px] overflow-hidden bg-[#7B181D] border border-transparent"
    >
      <div className="relative h-full w-full">
        <div className="relative z-20 p-4">
          <img
            src={item.image}
            className="w-40 h-40 mx-auto rounded-xl object-cover"
            alt={item.name}
            width={160}
            height={160}
          />
          <div className="flex flex-col items-center justify-between h-[150px] text-center">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.short_desc}</CardDescription>
            <div className="w-[80%] flex flex-row justify-center gap-4 md:gap-6 mt-5 text-white">
              {item.twitter_url && (
                <a
                  href={item.twitter_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandTwitter
                    size={24}
                    strokeWidth={1.2}
                    className="hover:text-primary-purple hover:stroke-2"
                  />
                </a>
              )}
              {item.email && (
                <a
                  href={`mailto:${item.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconMail
                    size={24}
                    strokeWidth={1.2}
                    className="hover:text-primary-purple hover:stroke-2"
                  />
                </a>
              )}
              {item.linkedin_url && (
                <a
                  href={item.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin
                    size={24}
                    strokeWidth={1.2}
                    className="hover:text-primary-purple hover:stroke-2"
                  />
                </a>
              )}
            </div>
          </div>
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
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default HoverEffect;
