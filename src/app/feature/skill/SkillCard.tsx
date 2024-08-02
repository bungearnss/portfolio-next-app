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
  let borderClass = "";
  let bgColorClass = "";
  let tooltipSty = "";

  if ([1, 2, 3, 4].includes(numericId)) {
    bgColorClass = numericId % 2 === 0 ? "bg-custom-bg" : "bg-white";
    tooltipSty = "absolute bottom-full mb-2 rounded bg-gray-500 px-2 py-1 text-xs text-white";
  } else {
    bgColorClass = numericId % 2 === 0 ? "bg-white" : "bg-custom-bg";
    tooltipSty = "absolute top-full mt-2 rounded bg-gray-500 px-2 py-1 text-xs text-white";
  }

  switch (true) {
    case [5, 6, 7].includes(numericId):
      borderClass =
        "border border-t-0 border-l-0 border-r border-b-0 border-border-custom";
      break;
    case numericId === 1:
      borderClass =
        "border border-t-0 border-l-0 border-r-0 border-b border-border-custom";
      break;
    case numericId === 8:
      borderClass =
        "border border-t-0 border-l-0 border-r-0 border-b-0 border-border-custom";
      break;
    default:
      borderClass =
        "border border-t-0 border-l-0 border-r border-b border-border-custom";
      break;
  }

  const [tooltip, setTooltip] = useState("");

  const showTooltip = (tooltipText: string) => {
    setTooltip(tooltipText);
  };

  const hideTooltip = () => {
    setTooltip("");
  };

  return (
    <div
      className={`${bgColorClass} flex transform items-center justify-center p-4 py-6 ${borderClass}`}
      onMouseEnter={() => showTooltip(imgName)}
      onMouseLeave={hideTooltip}
    >
      <div className="flex items-center justify-center">
        <Image
          alt={`skill-${imgName}-logo`}
          src={icon}
          width={70}
          height={70}
        />
         {tooltip === imgName && (
              <div className={tooltipSty}>
                {imgName}
              </div>
            )}
      </div>
    </div>
  );
}
