//to add add people go to ui/card-hover-effect.jsx

//import { HoverEffect } from "../../src/components/ui/card-hover-effect";

export function SpeakersJudges() {
  return (
    <div className="relative bg-[#080808] h-screen w-full pt-16 overflow-hidden">
      {/* Dot background with radial fade */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot-pattern' patternUnits='userSpaceOnUse' width='30' height='30'%3E%3Ccircle cx='15' cy='15' r='2' fill='rgba(102, 102, 102, 0.3)' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dot-pattern)' /%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(ellipse at center, black, transparent 85%)"
        }}
      ></div>


      {/* Title */}
      <div className="relative text-white text-center z-10">
        <h1 className="font-bold text-4xl md:text-6xl">
          SPEAKERS & <span className="bg-[#7B181D] px-4 pb-2">JUDGES</span>
        </h1>
      </div>

      {/* Placeholder for content */}
      <div className="relative w-full h-[65vh] flex items-center justify-center z-10">
        <p className="text-white text-xl md:text-5xl">Coming Soon...</p>
      </div>

      {/* Commented out for now; restore later */}
      {/* 
      <div className="relative w-full px-8 z-10">
        <HoverEffect />
      </div>
      */}
    </div>
  );
}