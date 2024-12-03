import React from 'react';
import { motion } from 'framer-motion';

 const BackgroundText = React.memo(() => {
  const repeatText = 'sponsors';
  
  const alignmentVariations = [
    `&nbsp;&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}`,
    `&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}`,
    `&nbsp;&nbsp;&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}&nbsp;&nbsp;${repeatText}`
  ];

  return (
    <div className="absolute inset-0 w-[150%] h-full overflow-hidden flex flex-col text-[#434343] opacity-60 -translate-x-36">
      {[...Array(24)].map((_, index) => (
        <motion.div
          key={index}
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ 
            WebkitTextStroke: index === 1 || index === 15 ? '1px' : '0px red'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1, 
            ease: "easeOut", 
            delay: index * 0.05 
          }}
          dangerouslySetInnerHTML={{
            __html: alignmentVariations[index % alignmentVariations.length]
          }}
        />
      ))}
    </div>
  );
});

BackgroundText.displayName = 'BackgroundText';

const Sponsor = () => {
  return (
    <section id="sponsors" className="relative bg-black min-h-screen flex flex-col items-center justify-center px-8 py-20 text-[#5c5c5c]">
      <BackgroundText />

      {/* Content */}
      <div className="relative z-10 text-center container mx-auto"  id="sponsor">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-10 text-[#ffffff]">OUR <span className="bg-[#7B181D] px-4 pb-2">SPONSORS</span></h1>
      {/* Desc */}
        <p className="text-center text-white mb-6">
          <strong>Interested in sponsoring?</strong> Contact us at{' '}
          <a
            className="text-red-400 hover:underline"
            href="mailto:hackverse@nitk.edu.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            hackverse@nitk.edu.in
          </a>
          <br />
          and break through the snow barrier to shape the future of tech!
        </p>

        {/* Sponsor Info*/}
        <div className="flex flex-wrap justify-center items-center">
          <a href="https://aptos.dev" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/Aptos_Primary_WHT.png" className="w-40 hover:scale-105 transition-transform" alt="Aptos" />
          </a>
          <a href="https://balsamiq.com" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/balsamiq-logo.png" className="w-40 hover:scale-105 transition-transform" alt="Balsamiq" />
          </a>
          <a href="https://ethindia.co" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/ETHIndia.png" className="w-28 hover:scale-105 transition-transform" alt="ETHIndia" />
          </a>
          <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/Devfolio - White.png" className="w-40 hover:scale-105 transition-transform" alt="Devfolio" />
          </a>
          <a href="https://polygon.technology" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/Polygon_Primary_Light.png" className="w-36 hover:scale-105 transition-transform" alt="Polygon" />
          </a>
          <a href="https://interviewbuddy.net/" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/g30.png" className="w-36 hover:scale-105 transition-transform" alt="interviewbuddy" />
          </a>
          <a href="https://orkes.io" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/orkes logo.jpeg" className="w-36 hover:scale-105 transition-transform" alt="Orkes" />
          </a>
          <a href="https://plotch.ai" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/plotch_logo-3.png" className="w-36 hover:scale-105 transition-transform" alt="Plotch" />
          </a>
          <a href="https://www.redbull.com" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/red-bull-logo.png" className="w-36 hover:scale-105 transition-transform" alt="Red Bull" />
          </a>
          <a href="https://gen.xyz/" target="_blank" rel="noopener noreferrer" className="m-6 p-6">
            <img src="./sponsor/xyz-logo-white.png" className="w-36 hover:scale-105 transition-transform" alt="XYZ" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
