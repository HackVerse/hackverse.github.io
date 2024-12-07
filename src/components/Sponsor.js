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
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
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

const sponsors = [
  { 
    name: "Aptos", 
    logo: "./sponsor/Aptos_Primary_WHT.png", 
    link: "https://aptos.dev",
    width: "w-52"
  },
  { 
    name: "Balsamiq", 
    logo: "./sponsor/balsamiq-logo.png", 
    link: "https://balsamiq.com",
    width: "w-52"
  },
  { 
    name: "ETHIndia", 
    logo: "./sponsor/ETHIndia.png", 
    link: "https://ethindia.co",
    width: "w-52"
  },
  { 
    name: "Devfolio", 
    logo: "./sponsor/Devfolio - White.png", 
    link: "https://devfolio.co",
    width: "w-52"
  },
  { 
    name: "Polygon", 
    logo: "./sponsor/Polygon_Primary_Light.png", 
    link: "https://polygon.technology",
    width: "w-52"
  },
  { 
    name: "InterviewBuddy", 
    logo: "./sponsor/g30.png", 
    link: "https://interviewbuddy.net/",
    width: "w-52"
  },
  { 
    name: "Orkes", 
    logo: "./sponsor/orkes logo.jpeg", 
    link: "https://orkes.io",
    width: "w-52"
  },
  { 
    name: "Plotch", 
    logo: "./sponsor/plotch_logo-3.png", 
    link: "https://plotch.ai",
    width: "w-52"
  },
  { 
    name: "XYZ", 
    logo: "./sponsor/xyz-logo-white.png", 
    link: "https://gen.xyz/",
    width: "w-44"
  },
  { 
    name: "Give My Certificate", 
    logo: "./sponsor/gmc.png", 
    link: "https://gen.xyz/",
    width: "w-64"
  },
  { 
    name: "Red Bull", 
    logo: "./sponsor/red-bull-logo.png", 
    link: "https://www.redbull.com",
    width: "w-56"
  },
  { 
    name: "The Global Hues", 
    logo: "./sponsor/TGH.png", 
    link: "https://gen.xyz/",
    width: "w-52"
  }
];

const Sponsor = () => {
  return (
    <section id="sponsors" className="relative bg-black min-h-screen flex flex-col items-center justify-center px-8 py-20 text-[#5c5c5c]">
      <BackgroundText />

      {/* Content */}
      <div className="relative z-10 text-center container mx-auto" id="sponsor">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-10 text-[#ffffff]">
          OUR <span className="bg-[#7B181D] px-4 pb-2">SPONSORS</span>
        </h1>

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

        {/* Sponsor Logos */}
        <div className="flex flex-wrap justify-center items-center">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`m-6 p-6 ${sponsor.width}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={sponsor.logo} 
                className={`${sponsor.width} hover:scale-105 transition-transform`} 
                alt={sponsor.name} 
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;