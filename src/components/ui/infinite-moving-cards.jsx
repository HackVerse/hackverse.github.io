"use client";

import { cn } from "../../utils/cn";
import React from "react";

export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const animationSpeed = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

  return (
    <div
      className={cn(
        "w-full overflow-hidden relative z-20",
        className
      )}
    >
      <div
  className={`flex w-[200%] animate-scroll`}
  style={{
    animationDuration: animationSpeed,
  }}
>
  {[...items, ...items].map((item, idx) => (
    <div
      key={idx}
      className="w-[350px] max-w-full relative rounded-2xl px-4 py-6 md:w-[550px] flex-shrink-0"
      style={{
        background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
      }}
    >
      <img
        src={item.image}
        alt={`IMG_${idx + 1}`}
        className="rounded-xl w-full h-full object-cover"
      />
    </div>
  ))}
</div>
    </div>
  );
};
