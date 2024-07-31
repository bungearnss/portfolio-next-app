import Image from "next/image";
import Header from "./Header";
import Introduce from "./feature/introduce/Introduce";
import About from "./feature/about/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white px-24 py-10">
      <div className="z-10 w-full max-w-5xl">
        <Header />
      </div>
      <div className="mt-10 w-full max-w-5xl items-center justify-start lg:flex">
        <Introduce />
      </div>
      <div className="bg-custom-bg mt-10 w-full max-w-10xl items-center justify-start py-10 lg:flex">
        <About />
      </div>
    </main>
  );
}
