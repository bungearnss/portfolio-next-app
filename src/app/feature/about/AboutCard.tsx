"use client";
import Image from "next/image";
import React, { useState } from "react";

interface WidgetCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  iconSrc: string;
  bgColor: string;
  time: string;
}

function AboutCard({ title, description, onClick, iconSrc, bgColor, time }: WidgetCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  let imgWidth = 100;

  if (title.includes("KASI")){
    imgWidth = 220;
  }

  return (
    <div
      className={`transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out ${
        isHovered ? "scale-105 shadow-xl" : "scale-100"
      } w-60 h-80 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4 flex w-full items-center justify-center">
        <div className={`flex h-28 w-full items-center justify-center rounded-md bg-opacity-30 p-2 ${bgColor}`}>
          <Image src={iconSrc} alt="logo" width={imgWidth} height={200} />
        </div>
      </div>
      <h3 className="mb-2 break-words text-base font-semibold">{title}</h3>
      <p className="break-words text-gray-600">{description}</p>
      <p className="absolute bottom-3 right-5 break-words text-xs text-gray-500">{time}</p>
    </div>
  );
}

export default AboutCard;
