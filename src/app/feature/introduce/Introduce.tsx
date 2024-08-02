"use client";
import Image from "next/image";
import React, { useState } from "react";

import {
  PROFILE,
  IN_ICON,
  GIT_ICON,
  LINKEDIN_LINK,
  GIT_LINK,
} from "../../constants";

export default function Introduce() {
  const [tooltip, setTooltip] = useState("");

  const showTooltip = (tooltipText: string) => {
    setTooltip(tooltipText);
  };

  const hideTooltip = () => {
    setTooltip("");
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="grid w-full grid-cols-1 justify-around md:grid-cols-2">
      <div className="flex flex-row items-center gap-x-6 md:flex-col md:items-start md:justify-start">
        <div className="dm:h-20 dm:w-20 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
          <Image
            priority
            src={PROFILE}
            alt="profile-pic"
            width={76}
            height={76}
            className="object-cover"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p className="pb-5 pt-5 font-nunito text-xl sm:pr-5 md:pb-0 md:text-lg lg:text-4xl">
          Say Hello to <br />
          <span className="font-semibold">Tunsuda Boonloed</span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="pt-5 font-nunito text-base font-medium leading-snug md:text-lg lg:text-4xl">
          A software engineer based on Bangkok Thailand
        </p>
        <p className="mt-5 text-sm leading-tight text-gray-600 md:text-base">
          Specializing in creating solutions that meet diverse business needs
        </p>
        <div className="flex flex-row gap-3 pt-10">
          <div
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleClick(LINKEDIN_LINK)}
            onMouseEnter={() => showTooltip("LinkedIn")}
            onMouseLeave={hideTooltip}
          >
            <Image
              priority
              src={IN_ICON}
              alt="linkedin-icon"
              width={35}
              height={35}
            />
            {tooltip === "LinkedIn" && (
              <div className="absolute top-full mt-2 rounded bg-gray-500 px-2 py-1 text-xs text-white">
                LinkedIn Profile
              </div>
            )}
          </div>
          <div
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleClick(GIT_LINK)}
            onMouseEnter={() => showTooltip("GitHub")}
            onMouseLeave={hideTooltip}
          >
            <Image
              priority
              src={GIT_ICON}
              alt="git-icon"
              width={35}
              height={35}
            />
            {tooltip === "GitHub" && (
              <div className="absolute top-full mt-2 rounded bg-gray-500 px-2 py-1 text-xs text-white">
                GitHub Profile
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
