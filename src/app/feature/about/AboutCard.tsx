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
  let more = "black";
  let width = "2/5"
  if (title.includes("KASI")) {
    imgWidth = 170;
    bgColor = "bg-kbtg-bg";
    more = "kbtg-bg";
    width = "1/12"
  }
  if (title.includes("Accent")) {
    bgColor = "bg-acn-bg";
    more = "acn-bg";
  } else if (title.includes("Del")) {
    bgColor = "bg-deloitte-bg";
    more = "deloitte-bg";
  }

  return (
    <div
      className={`transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out ${
        isHovered ? "scale-105 shadow-xl" : "scale-100"
      } h-52 w-72 md:h-80 md:w-60 md:max-w-md lg:max-w-lg xl:max-w-xl`}
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
            className={`object-contain w-${width} md:w-auto`}
            style={{ height: "auto" }}
          />
        </div>
      </div>
      <h3 className="break-words text-base font-semibold mb-2 md:text-base">
        {title}
      </h3>
      <p className="break-words text-xs text-gray-600 md:text-base">
        {description}
      </p>
      <p className="break-words text-xs text-gray-500 md:text-sm">
        {time}
      </p>
      <p className={`absolute bottom-3 right-4 break-words text-xs text-${more} md:absolute md:bottom-3 md:right-5 md:text-sm`}>
        more
      </p>
    </div>
  );
}

export default AboutCard;
