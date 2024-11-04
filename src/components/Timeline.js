import React from "react";
import { Timeline } from "./ui/timeline";
// import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "08:30 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Participants Check-In & LHCC
          </p>
        </div>
      ),
    },
    {
      title: "09:00 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-sm md:text-xl font-normal mb-4">
            Opening Ceremony 2 LHCC
          </p>
          <ul className="list-disc text-white ml-5">
            <li>Introduction by MC followed by NITK anthem</li>
            <li>Shlok Bhosale & Meetali Srivastava, Student Organizers, Hackverse 4.0</li>
            <li>Welcome Address & HackVerse Report - Achintya Kumar, Lead Organizer, Hackverse 4.0</li>
            <li>About Hackverse - Suryansh Goyal, Lead Organizer, Hackverse 4.0</li>
            <li>Inaugural Address - Prof. SM Kulkarni, Director in-charge, NITK</li>
            <li>Inaugural Address by Chief Guest</li>
            <li>Presidential Address - Prof. Narendranath S, Dean of Student Welfare, NITK</li>
            <li>Vote of Thanks - Achintya Kumar, Lead Organizer, Hackverse 4.0</li>
          </ul>
        </div>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Introduction to ONDC for developers (Open Network for Digital Commerce) - Anup Pai (45 mins)
          </p>
        </div>
      ),
    },
    {
      title: "11:45 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Introduction to Zolve & LHC C
          </p>
        </div>
      ),
    },
    {
      title: "12:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Coding Begins 2 CIDS
          </p>
        </div>
      ),
    },
    {
      title: "03:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Talk: Impact of AI and creativity challenges next generation developers face - Rakesh Ravuri
          </p>
        </div>
      ),
    },
    {
      title: "05:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Networking Session - Rakesh Ravuri
          </p>
        </div>
      ),
    },
    {
      title: "06:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Devfolio Talk: What makes a winning hackathon project? - Aniket Raj, Denver D'souza, and Anish Dhaman
          </p>
        </div>
      ),
    },
    {
      title: "07:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Talk: How to build on Solana 101 - Ujjwal Gupta (online)
          </p>
        </div>
      ),
    },
    {
      title: "11:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Midnight Evaluation (1 Hour) & CIDS
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      {/* dot background */}
      <div className="absolute inset-0 w-full h-full bg-[#080808]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'dot-pattern\' patternUnits=\'userSpaceOnUse\' width=\'30\' height=\'30\'%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'2\' fill=\'%23666\' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23dot-pattern)\' /%3E%3C/svg%3E")' }}></div>
  
      {/* Mobile timeline background */}
      <div 
        className="absolute inset-0 w-full h-full bg-right bg-cover md:hidden" 
        style={{ backgroundImage: 'url("/bg-timeline-mobile.png")' }}
      ></div>

      {/* Desktop timeline background */}
      <div 
        className="absolute inset-0 w-full h-full bg-right bg-cover hidden md:block" 
        style={{ backgroundImage: 'url("/bg-timeline.png")' }}
      ></div>
  
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
  
      <div className="relative z-10 max-w-7xl mx-auto pt-10 pb-[-5] px-4 md:px-8 lg:px-0">
        <h2 className="text-4xl md:text-6xl mt-4 -mb-44 font-bold text-white dark:text-white max-w-4xl">
          HEIST <span className="bg-[#7B181D] px-4 pb-2">TIMELINE</span>
        </h2>
      </div>
      
      <Timeline data={data} />
    </section>
  );
}