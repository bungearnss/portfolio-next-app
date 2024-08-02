import Header from "./Header";
import Introduce from "./feature/introduce/Introduce";
import About from "./feature/about/About";
import Skill from "./feature/skill/Skill";
import Experience from "./feature/experience/Experience";
import Certificate from "./feature/certificate/Certificate";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex min-h-screen flex-col items-center justify-start bg-white px-24 pt-10">
        <div className="z-10 w-full max-w-5xl sm:hidden">
          <Header />
        </div>
        <div
          id="introduce"
          className="mt-10 w-full max-w-5xl items-center justify-start lg:flex"
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
          className="max-w-10xl w-screen items-center justify-start bg-custom-bg py-10 lg:flex"
        >
          <Certificate />
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
