"use client";
import React, { useState, useEffect } from "react";
import SkillCard from "./SkillCard";

import { SkillEntity } from "./models/SkillEntity";
import Skeleton from "@/app/components/Skeleton";

export default function Skill() {
  const [skills, setSkills] = useState<SkillEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSkills(
          data.map((skill: any) => ({
            id: skill.id,
            skillLogo: skill.skillLogo,
            skillName: skill.skillName,
          })),
        );
      } catch (error) {
        setError("Failed to fetch skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section className="flex flex-col items-center justify-between md:py-20 lg:flex-row">
      <div className="mb-10 w-full lg:mb-0 lg:w-1/2">
        <h2 className="section-header mb-4 pr-10 lg:pr-20">
          Experience with a variety of tech stacks in various industries
        </h2>
        <p className="pr-10 text-gray-600 md:mb-8 lg:pr-20">
          My experience spans across various projects and industries, allowing
          me to adapt and deliver solutions that meet business needs
          effectively.
        </p>
      </div>
      {loading ? (
        <div className="flex h-full w-full lg:w-1/2 items-center justify-center">
          <Skeleton />
        </div>
      ) : (
        <div className="grid w-full grid-cols-4 justify-center lg:w-1/2">
          {skills.map((item) => (
            <SkillCard
              key={item.id}
              id={item.id}
              icon={item.skillLogo}
              imgName={item.skillName}
            />
          ))}
        </div>
      )}
    </section>
  );
}
