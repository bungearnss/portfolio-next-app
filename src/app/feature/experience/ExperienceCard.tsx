"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CALENDAR_ICON } from "../../constants";

interface ExperienceCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  img: string;
  date: string;
}

export default function ExperienceCard({
  title,
  description,
  onClick,
  img,
  date,
}: ExperienceCardProps) {

  return (
    <div
      className={`h-150 w-75 transform rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
    >
      <div className="relative mb-4 flex w-full items-center justify-center">
        <div className="bg-proj-bg relative flex h-40 w-full items-center justify-center overflow-hidden rounded-md">
          <Image
            src={img}
            alt={`${title}-logo`}
            width={500}
            height={300}
            className="object-cover"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <h3 className="mb-2 break-words text-base md:text-lg font-semibold">{title}</h3>
      <div className="flex flex-row items-center justify-start h-fit">
        <Image
          src={CALENDAR_ICON}
          alt="calendar-icon"
          width={16}
          height={16}
          className="mr-2"
        />
        <p className="text-xs md:text-base break-words text-gray-600">{date}</p>
      </div>
      <p className="text-sm md:text-base mt-5 break-words text-gray-600">{description}</p>
      <div className="mt-10 flex items-end justify-end">
        <div
          className="group cursor-pointer rounded-lg bg-black border border-gray-400 px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          <p className="text-xs font-semibold text-white uppercase transition-colors hover:text-black">Go to website</p>
        </div>
      </div>
    </div>
  );
}
