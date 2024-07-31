"use client";
import React from "react";
import AboutCard from "./AboutCard";
import { ACN_LOGO, DELOITTE_LOGO, KBTG_LOGO } from "../../constants";

const coData = [
  {
    coId: "1",
    coName: "Accenture Co., Ltd",
    coLogo: ACN_LOGO,
    coBgColor: "bg-acn-bg",
    coDes: "Application Developer",
    time: "September 2021 – April 2023"
  },
  {
    coId: "2",
    coName: "Deloitte Touche Tohmatsu Jaiyos Advisory Co., Ltd",
    coLogo: DELOITTE_LOGO,
    coBgColor: "bg-deloitte-bg",
    coDes: "Cyber Risk Advisory, IAM Consultant",
    time: "May 2023 – July 2023"
  },
  {
    coId: "3",
    coName: "KASIKORN Business Technology Group",
    coLogo: KBTG_LOGO,
    coBgColor: "bg-kbtg-bg",
    coDes: "Software Engineer",
    time: "Aug 2023 – Present"
  },
];

export default function About() {
  const handleCardClick = (id: string) => {
    alert(`Card with ID: ${id} clicked!`);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-3xl font-semibold">My Transformative Journey</p>
      <p className="text-3xl font-semibold">In the IT Industry</p>
      <div className="flex flex-wrap py-10 items-center w-full justify-evenly">
        {coData.map((item) => (
          <AboutCard
            key={item.coId}
            title={item.coName}
            description={item.coDes}
            onClick={() => handleCardClick(item.coId)}
            iconSrc={item.coLogo}
            bgColor={item.coBgColor}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}
