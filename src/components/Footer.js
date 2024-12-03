import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        {/* Left section for HackVerse info */}
        <div className="lg:w-1/2 text-center space-y-3">
          <h2 className="text-4xl md:text-6xl mb-2 font-bold text-[#ffffff]">HACKVERSE <span className="bg-[#7B181D] px-2 pb-1">5.0</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#9B1B21] ">Imagine. Believe. Achieve!</p>
          <p className="mt-2">
            <i className="bi bi-geo-alt-fill text-2xl text-[#9B1B21]"></i> NITK, Surathkal
          </p>
          <p>
            <i className="bi bi-envelope-check-fill text-2xl text-[#9B1B21]"></i> hackverse@nitk.edu.in
          </p>
        </div>

        {/* Right section  Spline 3D  */}
        <div className="lg:w-1/2 h-[300px] relative flex justify-center items-center">
          <iframe
            src="https://my.spline.design/robottebarkodev01-f59fdc3a7f1fb0b1eea46e7ce990c364"
            frameBorder="0"
            width="100%"
            height="100%"
            className="opacity-80"
            title="3D Robot Design"
            style={{ border: 'none' }}
          />
          {/*  social media links */}
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-100 py-4 flex justify-center space-x-4 transform translate-x-0 translate-y-0">
            <div className="w-full flex justify-center space-x-4">
              <a href="http://www.facebook.com/hackverse/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="bg-black w-full flex justify-center py-10">
                  <img src="img/facebook.svg" alt="Facebook" className="w-8 opacity-70 hover:opacity-100" />
                </div>
              </a>
              <a href="http://instagram.com/hackversenitk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="bg-black w-full flex justify-center py-10">
                  <img src="img/instagram.svg" alt="Instagram" className="w-8 opacity-70 hover:opacity-100" />
                </div>
              </a>
              <a href="http://twitter.com/hackversenitk" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="bg-black w-full flex justify-center py-10">
                  <img src="img/twitter.svg" alt="Twitter" className="w-8 opacity-70 hover:opacity-100" />
                </div>
              </a>
              <a href="https://discord.gg/HnmH7fGK" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <div className="bg-black w-full flex justify-center py-10">
                  <img src="img/discord_footer_icons.png" alt="Discord" className="w-8 opacity-70 hover:opacity-100 rounded-full" />
                </div>
              </a>
              <a href="http://linkedin.com/company/hackverse" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="bg-black w-full flex justify-center py-10">
                  <img src="img/linkedin.svg" alt="LinkedIn" className="w-8 opacity-70 hover:opacity-100" />
                </div>
              </a>
              <a href="http://t.me/hackverse" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <div className="bg-black w-full flex justify-center py-10">
                  <img src="img/telegram.svg" alt="Telegram" className="w-8 opacity-70 hover:opacity-100" />
                </div>
              </a>
              <a href="https://www.youtube.com/channel/UC_hR3RkqNKQMDG1R2hpbSoA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <div className="bg-black w-full flex justify-center py-10">
                  <img src="img/youtube.svg" alt="YouTube" className="w-8 opacity-70 hover:opacity-100" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Images and Map */}
      <div className="container mx-auto mt-10">
        <h3 className="text-center text-2xl font-bold text-[#9B1B21] mb-6">Campus</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`img/campus/0${num}.webp`}
              alt={`NITK Campus ${num}`}
              className="rounded-lg w-full"
              loading="lazy"
            />
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3905582141583!2d74.79212031402011!3d13.010782817539518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211b768ac8f%3A0x6b1144ac2d5dadf3!2sNational%20Institute%20of%20Technology%20Karnataka%20Surathkal.!5e0!3m2!1sen!2sin!4v1679923004384!5m2!1sen!2sin"
            width="100%"
            height="250"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            title="NITK Location"
            className="rounded-lg border-2 border-red-600"
          />
        </div>
      </div>

      {/* Footer Links and Copyright */}
      <div className="container mx-auto text-center mt-8 space-y-2 border-t-2 pt-3 border-white">
        <p>
          <a href="https://devfolio.co/code-of-conduct" target="_blank" rel="noopener noreferrer" className="text-[#9B1B21] hover:underline">
            Code of Conduct
          </a>
           | 
          <a href="./" target="_blank" rel="noopener noreferrer" className="text-[#9B1B21] hover:underline">
            Terms & Conditions
          </a>
        </p>
        <p>
          © 2023 All rights reserved | Made with <span className="bi bi-heart-fill text-[#9B1B21]">❤</span> by the
          <a href="/team" className="text-[#9B1B21] hover:underline"> Hackverse Team</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
