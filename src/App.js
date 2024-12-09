import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Timer from "./components/Timer";
import About from "./components/About";
import "./index.css";
import StatsSection from "./components/StatsSection";
import StickyScrollSection from "./components/Prizes";
import { TimelineDemo } from "./components/Timeline";
import { CanvasRevealEffectDemo } from "./components/Tracks";
import Sponsor from "./components/Sponsor";
import { SpeakersJudges } from "./components/SpeakersJudges";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import NotFoundPage from "./components/NotFoundPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const offset = -4 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [pathname, hash]);

  return null;
}

function MainPage() {
  return (
    <div className="overflow-x-hidden">
      <div id="home">
        <Landing />
      </div>
      <div>
        <Timer />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="prizes">
        <StickyScrollSection />
      </div>
      <div id="speakers-judges">
        <SpeakersJudges />
      </div>
      <div id="tracks">
        <CanvasRevealEffectDemo />
      </div>
      <div id="timeline">
        <TimelineDemo />
      </div>
      <div id="sponsors">
        <Sponsor />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
