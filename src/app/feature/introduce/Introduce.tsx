import Image from "next/image";
import React from "react";

import { PROFILE, IN_ICON, GIT_ICON } from "../../constants";

export default function Introduce() {
  return (
    <div className="grid w-full grid-cols-2 justify-around">
      <div className="flex flex-col">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
          <Image src={PROFILE} alt="profile-pic" width={76} height={76} />
        </div>
        <p className="pt-5 font-nunito text-4xl">
          Say Hello to <span className="font-semibold">Tunsuda Boonloed</span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="pt-5 font-nunito text-4xl font-medium leading-snug">
          A software engineer based on Bangkok, Thailand
        </p>
        <p className="mt-5 text-base leading-tight text-gray-600">
          Specializing in creating solutions that meet diverse business needs
        </p>
        <div className="flex flex-row gap-3 pt-10">
          <Image src={IN_ICON} alt="profile-pic" width={35} height={35} />
          <Image src={GIT_ICON} alt="profile-pic" width={35} height={35} />
        </div>
      </div>
    </div>
  );
}
