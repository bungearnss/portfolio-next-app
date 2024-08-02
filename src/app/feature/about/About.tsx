"use client";
import React, { useState } from "react";
import AboutCard from "./AboutCard";
import { ACN_LOGO, DELOITTE_LOGO, KBTG_LOGO } from "../../constants";
import ModalPop from "@/app/components/ModalPop";
import AboutDetail from "./AboutDetail";
import { ProjectProps } from "./model/AboutDetailProp";

const coData = [
  {
    coId: "1",
    coName: "Accenture Co., Ltd",
    coLogo: ACN_LOGO,
    coBgColor: "bg-acn-bg",
    coDes: "Application Developer",
    time: "September 2021 – April 2023",
    project: [
      {
        projectId: "1",
        name: "Super App Project",
        role: "Application Developer",
        duty: [
          {
            dutyId: "1",
            dutyDes:
              "Identify and troubleshoot defects in mobile applications developed using Flutter and provide solutions to effectively resolve them using Flutter SDK",
          },
        ],
      },
      {
        projectId: "2",
        name: "Oracle Retail Merchandising System Project",
        role: "Business Analyst",
        duty: [
          {
            dutyId: "1",
            dutyDes:
              "Work directly with the client gathering requirements to align technology with business strategy and goals and experts internally for their deep functional or expertise, domain knowledge, or offering expertise",
          },
        ],
      },
      {
        projectId: "3",
        name: "Microservice for e - Hailing Delivery",
        role: "Application Developer",
        duty: [
          {
            dutyId: "1",
            dutyDes:
              "Design, build and configure applications to meet business process and application requirement using Spring Boot",
          },
          {
            dutyId: "2",
            dutyDes:
              "Utilize several tools to enhance service performance such as Kafka, Kibana, SonarQube, Jenkins and ELK Stack",
          },
        ],
      },
    ],
  },
  {
    coId: "2",
    coName: "Deloitte Touche Tohmatsu Jaiyos Advisory Co., Ltd",
    coLogo: DELOITTE_LOGO,
    coBgColor: "bg-deloitte-bg",
    coDes: "Cyber Risk Advisory, IAM Consultant",
    time: "May 2023 – July 2023",
    project: [
      {
        projectId: "1",
        name: "Identity Management",
        role: "Consultant",
        duty: [
          {
            dutyId: "1",
            dutyDes:
              "Engaged in different pillars of identity management services, ranging from digital access management, privileged identity management identity governance and compliance, user credentials and security key management etc.",
          },
        ],
      },
    ],
  },
  {
    coId: "3",
    coName: "KASIKORN Business Technology Group",
    coLogo: KBTG_LOGO,
    coBgColor: "bg-kbtg-bg",
    coDes: "Software Engineer",
    time: "Aug 2023 – Present",
    project: [
      {
        projectId: "1",
        name: "Digital Fraud Management (Risk Profile)",
        role: "Software Engineer",
        duty: [
          {
            dutyId: "1",
            dutyDes:
              "Develop an application to update account information in near real-time for banking online platforms such as K PLUS, MAKE, KLINE, and others. This ensures timely detection of suspicious account holders, preventing fraudulent account openings online",
          },
          {
            dutyId: "2",
            dutyDes:
              "Technologies include React for the web app, Spring Boot for services, and Kafka for efficient data transmission across channels",
          },
        ],
      },
      {
        projectId: "2",
        name: "Financial Route Management",
        role: "Software Engineer",
        duty: [
          {
            dutyId: "1",
            dutyDes:
              "Develop a financial transaction tracking system for suspicious accounts reported to the bank",
          },
          {
            dutyId: "2",
            dutyDes:
              "Generate an Excel file containing the financial transaction trails obtained, which can then be imported into a central system for use by other banks using spring boot",
          },
        ],
      },
    ],
  },
];

export default function About() {
  const [selectedItem, setSelectedItem] = useState<{
    coName: string;
    coDes: string;
    project: ProjectProps[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (id: string) => {
    const item = coData.find((item) => item.coId === id);
    if (item) {
      setSelectedItem({
        coName: item.coName,
        coDes: item.coDes,
        project: item.project,
      });
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-xl font-semibold md:text-3xl">My Transformative Journey</p>
      <p className="text-xl font-semibold md:text-3xl">In the IT Industry</p>
      <div className="flex w-full flex-wrap items-center justify-center md:gap-10 gap-6 py-10 px-10">
        {coData.map((item) => (
          <div key={item.coId}>
            <AboutCard
              key={item.coId}
              title={item.coName}
              description={item.coDes}
              onClick={() => handleCardClick(item.coId)}
              iconSrc={item.coLogo}
              bgColor={item.coBgColor}
              time={item.time}
            />
          </div>
        ))}
      </div>
      <ModalPop isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedItem && (
          <AboutDetail
            key={selectedItem.coName}
            title={selectedItem.coName}
            project={selectedItem.project}
            description={selectedItem.coDes}
          />
        )}
      </ModalPop>
    </div>
  );
}
