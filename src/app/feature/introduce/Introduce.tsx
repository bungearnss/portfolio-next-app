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
    <div className="grid w-full grid-cols-2 justify-around">
      <div className="flex flex-col">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
          <Image src={PROFILE} alt="profile-pic" width={76} height={76} />
        </div>
        <p className="pt-5 font-nunito text-4xl sm:pr-5">
          Say Hello to <span className="font-semibold">Tunsuda Boonloed</span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="pt-5 font-nunito text-4xl font-medium leading-snug">
          A software engineer based on Bangkok, Thailand
        </p>
        <p className="mt-5 text-base leading-tight text-gray-600">
          Specializing in creating solutions that meet diverse business needs
        </p>
        <div className="flex flex-row gap-3 pt-10">
          <div
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleClick(LINKEDIN_LINK)}
            onMouseEnter={() => showTooltip("LinkedIn")}
            onMouseLeave={hideTooltip}
          >
            <Image src={IN_ICON} alt="linkedin-icon" width={35} height={35} />
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
            <Image src={GIT_ICON} alt="git-icon" width={35} height={35} />
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
