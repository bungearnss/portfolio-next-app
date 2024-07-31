"use client";
import Image from "next/image";
import React, { useState } from "react";

interface SkillCardProps {
  icon: string;
  imgName: string;
}

export default function SkillCard({ icon, imgName }: SkillCardProps) {


  return (
    <div
      className="bg-custom-bg flex transform cursor-pointer items-center justify-center rounded-lg bg-opacity-50 p-4 py-6 shadow-lg transition-transform duration-100 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <div className="flex items-center justify-center">
        <Image
          alt={`skill-${imgName}-logo`}
          src={icon}
          width={70}
          height={70}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
