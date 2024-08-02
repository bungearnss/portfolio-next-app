"use client";
import React, { useEffect, useState } from "react";

import ExperienceCard from "./ExperienceCard";
import ExperienceSubCard from "./ExperienceSubCard";
import { ExperienceEntity } from "./models/ExperienceEntity";
import Skeleton from "@/app/components/Skeleton";

export default function Experience() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  const [selectedId, setSelectedId] = useState("1");

  const handleSelected = (id: string) => {
    setSelectedId(id);
  };

  const [experience, setExperience] = useState<ExperienceEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch("/api/experiences");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setExperience(
          data.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            img: item.img,
            date: item.date,
            url: item.url,
          })),
        );
      } catch (error) {
        setError("Failed to fetch skills");
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="section-header">My Extensive Experience</p>
      <div className="grid w-11/12 grid-cols-3 items-center justify-evenly gap-4 px-5 py-10 md:grid-cols-2 md:gap-1">
        {loading ? (
          <Skeleton />
        ) : (
          <div
            className={`col-span-2 flex w-full justify-center transition-opacity duration-500 md:col-span-1 ${selectedId ? "fade-in" : "fade-out"}`}
          >
            {experience
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
        )}
        {loading ? (
          <Skeleton />
        ) : (
          <div
            className={`md:h-150 md:w-75 grid grid-cols-1 gap-4 transition-transform duration-500 md:grid-cols-2 md:gap-6 ${selectedId ? "fade-in" : "fade-out"} `}
          >
            {experience
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
        )}
      </div>
    </div>
  );
}
