import React from "react";
import { AboutDetailProps } from "./models/AboutDetailProp";

export default function AboutDetail({
  title,
  description,
  project,
}: AboutDetailProps) {
  return (
    <div className="space-y-6 md:p-6">
      <p className="mb-4 text-lg md:text-2xl font-semibold">
        {title} -
        <span className="font-medium ml-2">
          {" "}
        {description}
        </span>
      </p>
      <div className="space-y-4">
        {project.map((proj) => (
          <div
            key={proj.projectId}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-md"
          >
            <h3 className="text-base md:text-xl font-bold">{proj.name} </h3>
            <p className="text-xs md:text-sm text-md text-gray-600">Position: {proj.role}</p>
            <ul className="mt-2 list-disc pl-5">
              {proj.duty.map((duty) => (
                <li key={duty.dutyId} className="text-sm text-md text-gray-800">
                  {duty.dutyDes}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
