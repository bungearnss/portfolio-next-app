import React from "react";
import SkillCard from "./SkillCard";

import {
  SPRING_LOGO,
  NODE_LOGO,
  REACT_LOGO,
  NEXTJS_LOGO,
  FLUTTER_LOGO,
  GRPC_LOGO,
  POSTGRESQL_LOGO,
  AZURE_LOGO,
} from "../../constants";

const skillData = [
  { id: "1", skillLogo: SPRING_LOGO, skillName: "spring" },
  { id: "2", skillLogo: NODE_LOGO, skillName: "node" },
  { id: "3", skillLogo: REACT_LOGO, skillName: "react" },
  { id: "4", skillLogo: NEXTJS_LOGO, skillName: "nextjs" },
  { id: "5", skillLogo: FLUTTER_LOGO, skillName: "flutter" },
  { id: "6", skillLogo: GRPC_LOGO, skillName: "grpc" },
  { id: "7", skillLogo: POSTGRESQL_LOGO, skillName: "postgresql" },
  { id: "8", skillLogo: AZURE_LOGO, skillName: "azure" },
];

export default function Skill() {
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
      <div className="grid w-full grid-cols-4 justify-center lg:w-1/2">
        {skillData.map((item) => (
          <SkillCard
            key={item.id}
            id={item.id}
            icon={item.skillLogo}
            imgName={item.skillName}
          />
        ))}
      </div>
    </section>
  );
}
