"use client";
import { CALENDAR_ICON } from "../../constants";
import Image from "next/image";
import React from "react";

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
  return (
    <div
      className={`w-full transform rounded-lg bg-white p-4 cursor-pointer shadow-lg transition-transform duration-300 ease-in-out sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
      onClick={onSelected}
    >
      <div className=" mb-4 grid w-full grid-cols-3 items-center justify-center">
        <div className="col-span-2 w-full ">
          <Image
            src={img}
            alt={`${title}-logo`}
            width={300}
            height={150}
          />
        </div>
        <div className="col-span-1 flex w-full flex-col pl-2">
          <h3 className="mb-2  text-sm font-semibold">{title}</h3>
        </div>
      </div>
      
    </div>
  );
}
