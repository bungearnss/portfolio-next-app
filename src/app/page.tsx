"use client";
import Header from "./Header";
import Introduce from "./feature/introduce/Introduce";
import About from "./feature/about/About";
import Skill from "./feature/skill/Skill";
import Experience from "./feature/experience/Experience";
import Certificate from "./feature/certificate/Certificate";
import Footer from "./Footer";
import FloatingActionButton from "./components/FloatingActionButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex min-h-screen flex-col items-center justify-start bg-white px-4 pt-6 md:px-24 md:pt-10">
        <div className="z-10 w-full max-w-4xl md:max-w-5xl">
          <Header />
        </div>

        <div
          id="introduce"
          className="mt-16 w-full max-w-5xl items-center justify-start md:mt-10 lg:flex"
        >
          <Introduce />
        </div>
        <div
          id="about"
          className="mt-10 w-screen items-center justify-start bg-custom-bg py-10 lg:flex"
        >
          <About />
        </div>
        <div
          id="skill"
          className="max-w-10xl w-full items-center justify-start py-10 lg:flex"
        >
          <Skill />
        </div>
        <div
          id="experience"
          className="max-w-10xl w-screen items-center justify-start bg-custom-bg py-10 lg:flex"
        >
          <Experience />
        </div>
        <div
          id="certificate"
          className="max-w-10xl w-screen items-center justify-start bg-custom-bg md:py-10 lg:flex"
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
