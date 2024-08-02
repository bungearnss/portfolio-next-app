"use client";
import { CALENDAR_ICON } from "../../constants";
import Image from "next/image";
import React, { useState } from "react";

interface ExperienceSubCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  onSelected?: () => void;
  img: string;
  date: string;
}

export default function ExperienceSubCard({
  title,
  img,
  onSelected,
}: ExperienceSubCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`w-full transform cursor-pointer rounded-lg bg-white py-6 px-4 md:p-4 shadow-lg transition-transform duration-300 ease-in-out ${
        isHovered ? "scale-105 shadow-xl" : "scale-100"
      } sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
      onClick={onSelected}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid w-full grid-cols-1 items-center justify-center md:grid-cols-2">
        <div className="flex w-full justify-center ">
          <Image
            src={img}
            alt={`${title}-logo`}
            width={300}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="hidden md:col-span-1 md:flex md:flex-col md:pl-2">
          <h3 className="text-sm font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}
