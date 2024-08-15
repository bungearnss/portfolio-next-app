"use client";
import Header from "./Header";
import Introduce from "./feature/introduce/Introduce";
import About from "./feature/about/About";
import Skill from "./feature/skill/Skill";
import Experience from "./feature/experience/Experience";
import Certificate from "./feature/certificate/Certificate";
import Footer from "./Footer";
import FloatingActionButton from "./components/FloatingActionButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    introduce: false,
    about: false,
    skill: false,
    experience: false,
    certificate: false,
  });

  const handleScroll = () => {
    const sections = [
      "introduce",
      "about",
      "skill",
      "experience",
      "certificate",
    ];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible((prevState) => ({ ...prevState, [section]: true }));
        }
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex min-h-screen flex-col items-center justify-start bg-white px-4 pt-6 md:px-24 md:pt-10">
        <div className="z-10 w-full max-w-4xl md:max-w-5xl">
          <Header />
        </div>

        <div
          id="introduce"
          className={`mt-16 w-full max-w-5xl items-center justify-start transition-all duration-700 ease-in-out md:mt-10 lg:flex ${
            isVisible.introduce
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Introduce />
        </div>
        <div
          id="about"
          className={`mt-10 w-screen items-center justify-start bg-custom-bg py-10 transition-all duration-700 ease-in-out lg:flex ${
            isVisible.about
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <About />
        </div>
        <div
          id="skill"
          className={`max-w-10xl w-full items-center justify-start py-10 transition-all duration-700 ease-in-out lg:flex ${
            isVisible.skill
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Skill />
        </div>
        <div
          id="experience"
          className={`max-w-10xl w-screen items-center justify-start bg-custom-bg py-10 transition-all duration-700 ease-in-out lg:flex ${
            isVisible.experience
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Experience />
        </div>
        <div
          id="certificate"
          className={`max-w-10xl w-screen items-center justify-start bg-custom-bg transition-all duration-700 ease-in-out md:py-10 lg:flex ${
            isVisible.certificate
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Certificate />
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
      <FloatingActionButton />
    </div>
  );
}
