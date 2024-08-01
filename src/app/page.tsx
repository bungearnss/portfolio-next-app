import Header from "./Header";
import Introduce from "./feature/introduce/Introduce";
import About from "./feature/about/About";
import Skill from "./feature/skill/Skill";
import Experience from "./feature/experience/Experience";
import Certificate from "./feature/certificate/Certificate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white px-24 py-10">
      <div className="z-10 w-full max-w-5xl">
        <Header />
      </div>
      <div className="mt-10 w-full max-w-5xl items-center justify-start lg:flex">
        <Introduce />
      </div>
      <div className="bg-custom-bg max-w-10xl mt-10 w-full items-center justify-start py-10 lg:flex">
        <About />
      </div>
      <div className="max-w-10xl w-full items-center justify-start py-10 lg:flex">
        <Skill />
      </div>
      <div className="bg-custom-bg max-w-10xl w-full items-center justify-start py-10 lg:flex">
        <Experience />
      </div>
      <div className="bg-custom-bg max-w-10xl w-full items-center justify-start py-10 lg:flex">
        <Certificate />
      </div>
    </main>
  );
}
