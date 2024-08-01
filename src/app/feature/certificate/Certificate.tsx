"use client";
import { UDEMY, SKILLSOFT } from "@/app/constants";
import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import ExpandCollapseButton from "./ExpandCollapseButton";

const certData = [
  {
    id: "1",
    title: "React Course 2024 React Next.js Redux",
    img: UDEMY,
    url: "https://www.udemy.com/certificate/UC-117b16f7-4ba1-4254-99ce-33e292853049/",
  },
  {
    id: "2",
    title: "REST API with Spring Boot & Spring Data JPA",
    img: UDEMY,
    url: "https://www.udemy.com/certificate/UC-098894eb-281d-413f-824c-0bee611f9d0c/",
  },
  {
    id: "3",
    title: "Master Hibernate and JPA with Spring Boot in 100 Steps",
    img: UDEMY,
    url: "https://www.udemy.com/certificate/UC-d2c90bb6-26d5-4678-885c-331cec8f93be/",
  },
  {
    id: "4",
    title: "Microservices Architecture",
    img: UDEMY,
    url: "https://www.udemy.com/certificate/UC-43f760dd-90d7-4fcb-8771-0722f23711ae/",
  },
  {
    id: "5",
    title: "OAuth 2.0 in Spring Boot Applications",
    img: UDEMY,
    url: "",
  },
  {
    id: "6",
    title: "Spring Professional Certification Exam Tutorial - Module 03",
    img: UDEMY,
    url: "https://www.udemy.com/certificate/UC-f92b61f4-0712-4b6f-ab29-b2633440bbfa/",
  },
  {
    id: "7",
    title: "Microservices & Event-Driven Architecture",
    img: UDEMY,
    url: "https://www.udemy.com/certificate/UC-fd91e213-2867-46d1-9c47-b53d1bc1ecf5/",
  },
  {
    id: "8",
    title: "AWS Developer Associate 2021: Storage Services",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/ccc4ea4f-dbab-46d7-8a7f-e3fe22ff70a3",
  },
  {
    id: "9",
    title: "GCP DevOps: CloudOps with Google Cloud Platform",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/f0cf3c3f-0c17-4adc-b24b-fd5c2f2c616f",
  },
  {
    id: "10",
    title: "Google Associate Cloud Engineer: Google Cloud Platform Ecosystem",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/c51040d3-5d96-4ea6-aa0e-dd7256316d20",
  },
  {
    id: "11",
    title:
      "Google Associate Cloud Engineer: Implementing Google Compute Engine",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/c1243f17-405d-4035-82c2-b44178c94860",
  },
  {
    id: "12",
    title: "AWS Cloud Practitioner 2022: Core AWS Services",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/8ebd22a3-3aeb-47f2-a34e-a8aa72723201",
  },
];

export default function Certificate() {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  const [visibleCount, setVisibleCount] = useState(10);
  const [expanded, setExpanded] = useState(false);

  const handleExpandMore = () => {
    if (expanded) {
      setVisibleCount(10);
      setExpanded(false);
    } else {
      setVisibleCount(visibleCount + 5);
      if (visibleCount + 5 >= certData.length) {
        setExpanded(true);
      }
    }
  };
  

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-3xl font-semibold">My Certificate</p>
      <div className="grid max-w-full grid-cols-5 gap-5 px-20 py-10">
        {certData.slice(0, visibleCount).map((item) => (
          <CertificateCard
            key={item.id}
            title={item.title}
            onClick={() => handleCardClick(item.url)}
            img={item.img}
          />
        ))}
      </div>
      {certData.length > 10 && (
        <ExpandCollapseButton onClick={handleExpandMore} expanded={expanded} />
      )}
      
    </div>
  );
}
