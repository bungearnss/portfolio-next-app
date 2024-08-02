"use client";
import React, { useState } from "react";

import {
  KF_SHABU,
  ALOO,
  ORG,
  AMAZON_CLONE,
  CLOVER_SUPPLY,
} from "../../constants";
import ExperienceCard from "./ExperienceCard";
import ExperienceSubCard from "./ExperienceSubCard";

const expData = [
  {
    id: "1",
    title: "Kangfu Shabu",
    description:
      "A dynamic website designed to showcase and promote a shabu restaurant chain. This responsive site, crafted with Next.js, ensures a seamless experience across all devices and locations.",
    img: KF_SHABU,
    date: "December 2023",
    url: "https://www.kungfugrillshabu.com/",
  },
  {
    id: "2",
    title: "Clover Supply",
    description:
      "A vibrant and engaging website designed to highlight and promote Cloversupply, a global trading company specializing in meat, pork, and seafood. This responsive site, expertly crafted with Next.js, offers a seamless and dynamic user experience",
    img: CLOVER_SUPPLY,
    date: "May 2023",
    url: "https://www.cloversupply.info/",
  },
  {
    id: "3",
    title: "Aloo Application",
    description:
      "The Aloo application is an innovative exercise tracking tool crafted to help users monitor their workouts effectively. It serves as a practical example of how to integrate Google Maps SDK with a Flutter app, offering a hands-on approach to learning and implementing location-based features",
    img: ALOO,
    date: "August 2022",
    url: "https://github.com/bungearnss/flutter-aloo-app",
  },
  {
    id: "4",
    title: "Organization Application",
    description:
      "Introducing a Todo Organization app designed to enhance teamwork within companies. This app allows users to collaborate seamlessly, schedule meetings, track tasks, and monitor performance metrics. Built with Flutter SDK for the frontend, it provides a user-friendly interface that streamlines productivity and fosters effective team coordination",
    img: ORG,
    date: "August 2022",
    url: "https://github.com/bungearnss/todo_organizations_app",
  },
  {
    id: "5",
    title: "Amazon clone",
    description:
      "Introducing an Amazon clone app that offers a seamless shopping experience, allowing users to authenticate and place orders as buyers, while enabling administrators to create and manage products for sale. Built with Flutter SDK for the frontend and powered by Node.js with MongoDB on the server side",
    img: AMAZON_CLONE,
    date: "Janury 2022",
    url: "https://github.com/bungearnss/flutter_amazon_clone_with_node_js",
  },
];

export default function Experience() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  const [selectedId, setSelectedId] = useState("1");

  const handleSelected = (id: string) => {
    setSelectedId(id);
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-3xl font-semibold">My Extensive Experience</p>
      <div className="grid w-full grid-cols-2 items-center justify-evenly px-10 py-10 sm:gap-10">
      <div
          className={`flex w-full justify-center transition-opacity duration-500 ${selectedId ? 'fade-in' : 'fade-out'}`}
        >
          {expData
            .filter((item) => item.id === selectedId)
            .map((item) => (
              <ExperienceCard
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
                date={item.date}
                onClick={() => handleClick(item.url)}
              />
            ))}
        </div>
        <div className={`h-150 w-75 grid grid-cols-2 gap-6 transition-transform duration-500 ${selectedId ? 'fade-in' : 'fade-out'}
        sm:grid sm:grid-cols-1 sm:w-full sm:items-center`}>
          {expData
            .filter((item) => item.id !== selectedId)
            .map((item) => (
              <ExperienceSubCard
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
                date={item.date}
                onClick={() => [handleClick(item.id)]}
                onSelected={() => handleSelected(item.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
