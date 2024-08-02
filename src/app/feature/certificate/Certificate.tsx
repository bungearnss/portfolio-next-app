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
  {
    id: "13",
    title: "Application Development with Node.js: Language Fundamentals",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/9e50e8e0-44ed-4a08-8271-1ce28726992e",
  },
  {
    id: "14",
    title: "Flutter Development: Introducing Flutter & the Dart Programming Language",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/91ddacfe-b873-4952-9496-2acaeb549f5b",
  },
  {
    id: "15",
    title: "Flutter Development: Using Classes & Objects in Dart",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/2e0f12ed-5624-4690-b983-7548d7804ab1",
  },
  {
    id: "16",
    title: "Flutter and Backends: Connecting to Remote Backends Using HTTP Requests",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/bd38030c-b740-427b-a2c6-d44b2dad651f",
  },
  {
    id: "17",
    title: "Flutter Development: Using Variables, Collections, & Functions in Dart",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/dc0f62a9-f0ac-49d9-9227-448d15da31c9",
  },
  {
    id: "18",
    title: "Flutter and Backends: Integrating Flutter with Google Firebase",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/b774a05a-b799-4d0e-8d69-3967d08b0b90",
  },
  {
    id: "19",
    title: "Connecting to & Configuring a Database Instance",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/509afbfb-8a44-4ad2-ac75-2347f35e079d",
  },
  {
    id: "20",
    title: "Memory Tuning Techniques",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/1d83f14c-aebf-42c9-8b22-cde9b1613fa0",
  },
  {
    id: "21",
    title: "Oracle Database 12c R2 SQL: Using Structured Query Language (SQL)",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/697b90ff-1a65-4547-af8c-a3bbf7c5f6db",
  },
  {
    id: "22",
    title: "Relational Database Concepts",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/f80ab04a-3107-4c4b-a07e-745373c104c3",
  },
  {
    id: "23",
    title: "API Security",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/9abb2e58-75cd-4dae-8b8d-98047fbd6a59",
  },
  {
    id: "24",
    title: "Java Certified Foundations Associate: Java Methods",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/554a84fd-1f62-453b-bc77-0de249ea6e90",
  },
  {
    id: "25",
    title: "Java Certified Foundations Associate: Decision Statements",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/98eab2cb-746f-4367-8314-0746a9b37163",
  },
  {
    id: "26",
    title: "Java Certified Foundations Associate: Basic Elements",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/28316e65-eb04-4f03-bc49-fddbcb17e1bc",
  },
  {
    id: "27",
    title: "Java Certified Foundations Associate: Classes & Constructors",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/358d9b7b-a672-4af3-a7f6-774121f92c21",
  },
  {
    id: "28",
    title: "Java Certified Foundations Associate: Data Types",
    img: SKILLSOFT,
    url: "https://skillsoft.digitalbadges.skillsoft.com/89185981-88f3-45fb-9e72-a4a0c7b28495",
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
      <p className="section-header">My Certificate</p>
      <div className="grid sm:w-screen max-w-full grid-cols-2 md:grid-cols-5 gap-5 px-5 py-5 md:px-20 md:py-10">
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
