//to add images to galley folder name it: IMG_1.JPG to IMG_x.JPG

import React from 'react';
import LayoutGrid from './ui/layout-grid';

const ROW_PATTERNS = [
  [
    { span: 1 }, { span: 1 }, { span: 1 }
  ],
  [
    { span: 2 }, { span: 1 }
  ],
  [
    { span: 1 }, { span: 2 }
  ],
  [
    { span: 3 }
  ]
];

const generateCards = () => {
  const cards = [];
  let currentImageIndex = 1;

  const createCard = (span) => {
    if (currentImageIndex <= 11) //change 42 to last image number
    {
      cards.push({
        id: currentImageIndex,
        className: `h-96 md:col-span-${span}`,
        thumbnail: `/gallery/IMG_${currentImageIndex}.JPG`
      });
      currentImageIndex++;
    }
  };

  while (currentImageIndex <= 11) //change 42 to last image number
    {
    const pattern = ROW_PATTERNS[Math.floor(Math.random() * ROW_PATTERNS.length)];

    // Apply the pattern to create cards for this row
    pattern.forEach(({ span }) => createCard(span));
  }

  return cards;
};

const Gallery = () => {
  return (
    <div className="relative bg-[#080808] w-full pt-16 overflow-hidden">
      {/* Dot background with radial fade */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot-pattern' patternUnits='userSpaceOnUse' width='30' height='30'%3E%3Ccircle cx='15' cy='15' r='2' fill='%23666' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dot-pattern)' /%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      ></div>
      {/* extra radial fade for the black background */}
      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          opacity: 0.9,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      ></div>
      <div className="relative z-10 min-h-screen bg-neutral-950 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white"> </h1>
            <p className="text-gray-400 mt-2"> </p>
          </div>
          <LayoutGrid cards={generateCards()} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
