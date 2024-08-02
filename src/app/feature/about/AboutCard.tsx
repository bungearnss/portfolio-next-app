"use client";
import Image from "next/image";
import React, { useState } from "react";

interface WidgetCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  iconSrc: string;
  time: string;
}

function AboutCard({
  title,
  description,
  onClick,
  iconSrc,
  time,
}: WidgetCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  let imgWidth = 100;
  let bgColor = "bg-proj-bg";
  if (title.includes("KASI")) {
    imgWidth = 220;
    bgColor = "bg-kbtg-bg";
  }
  if (title.includes("ACC")) {
    bgColor = "bg-acn-bg";
  } else if (title.includes("Del")) {
    bgColor = "bg-deloitte-bg";
  }

  return (
    <div
      className={`transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out ${
        isHovered ? "scale-105 shadow-xl" : "scale-100"
      } h-52 w-40 sm:max-w-sm md:h-80 md:w-60 md:max-w-md lg:max-w-lg xl:max-w-xl`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4 flex w-full items-center justify-center">
        <div
          className={`flex h-14 w-full items-center justify-center rounded-md bg-opacity-30 p-2 md:h-28 ${bgColor}`}
        >
          <Image
            src={iconSrc}
            alt={`${title.split(" ")[0]}-logo`}
            width={imgWidth}
            height={200}
            className="object-contain"
            style={{ width: "60%", height: "auto" }}
          />
        </div>
      </div>
      <h3 className="break-words text-sm font-semibold md:mb-2 md:text-base">
        {title}
      </h3>
      <p className="break-words text-xs text-gray-600 md:text-base">
        {description}
      </p>
      <p className="break-words text-xs text-gray-500 md:absolute md:bottom-3 md:right-5 md:text-sm">
        {time}
      </p>
    </div>
  );
}

export default AboutCard;
