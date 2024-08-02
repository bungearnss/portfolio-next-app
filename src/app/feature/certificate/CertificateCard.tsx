"use client";

import Image from "next/image";
import React from "react";

interface CertificateCardProps {
  title: string;
  onClick?: () => void;
  img: string;
}

export default function CertificateCard({
  title,
  onClick,
  img,
}: CertificateCardProps) {
  let imgSize = 60;

  if (img.includes("skill")) {
    imgSize = 100;
  }
  return (
    <div
    className={`card h-25 w-35 transform cursor-pointer rounded-lg bg-white  shadow-lg transition-transform duration-300 ease-in-out sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
    onClick={onClick}
  >
    <div className="relative flex h-full w-full items-center justify-around p-4">
      <div className="flex h-full w-full flex-col items-center rounded-md">
        <Image src={img} alt={`${title}-cert-logo`} width={imgSize} height={imgSize} />
        <h3 className="truncated-title h-full w-full pt-2 text-center text-xs md:text-sm">
          {title}
        </h3>
        <div className="card-hover-text">
          <span className="card-hover-content">
            Go to certificate site
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}
