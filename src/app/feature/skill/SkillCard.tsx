"use client";
import Image from "next/image";
import React, { useState } from "react";

interface SkillCardProps {
  id: string;
  icon: string;
  imgName: string;
}

export default function SkillCard({ icon, imgName, id }: SkillCardProps) {
    const numericId = parseInt(id);
    let borderClass = '';
    let bgColorClass = '';
  
    if ([1, 2, 3, 4].includes(numericId)) {
      bgColorClass = numericId % 2 === 0 ? 'bg-custom-bg' : 'bg-white';
    } else {
      bgColorClass = numericId % 2 === 0 ? 'bg-white' : 'bg-custom-bg';
    }
  
    switch (true) {
      case [5, 6, 7].includes(numericId):
        borderClass = 'border border-t-0 border-l-0 border-r border-b-0 border-border-custom';
        break;
      case numericId === 1:
        borderClass = 'border border-t-0 border-l-0 border-r-0 border-b border-border-custom';
        break;
      case numericId === 8:
        borderClass = 'border border-t-0 border-l-0 border-r-0 border-b-0 border-border-custom';
        break;
      default:
        borderClass = 'border border-t-0 border-l-0 border-r border-b border-border-custom';
        break;
    }

  return (
    <div
      className={`${bgColorClass} flex transform items-center justify-center p-4 py-6 ${borderClass}`}
    >
      <div className="flex items-center justify-center">
        <Image
          alt={`skill-${imgName}-logo`}
          src={icon}
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}
