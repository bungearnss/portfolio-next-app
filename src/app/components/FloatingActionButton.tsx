"use client";
import { useEffect, useState } from "react";

import { ARROW_DOWN, ARROW_UP } from "../constants";
import Image from "next/image";

const FloatingActionButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > documentHeight / 2) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  };

  const handleClick = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform  focus:outline-none"
    >
      {isAtTop ? (
        <Image alt="arrow-down" src={ARROW_DOWN} width={24} height={24} />
      ) : (
        <Image alt="arrow-up" src={ARROW_UP} width={24} height={24} />
      )}
    </button>
  );
};

export default FloatingActionButton;
