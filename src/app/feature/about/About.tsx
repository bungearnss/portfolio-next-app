"use client";
import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard";
import ModalPop from "@/app/components/ModalPop";
import AboutDetail from "./AboutDetail";
import { ProjectProps } from "./models/AboutDetailProp";
import { CompanyEntity } from "./models/CompanyEntity";
import Skeleton from "@/app/components/Skeleton";

export default function About() {
  const [selectedItem, setSelectedItem] = useState<{
    coName: string;
    coDes: string;
    project: ProjectProps[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [company, setCompany] = useState<CompanyEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch("/api/companies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCompany(
          data.map((item: any) => ({
            coId: item.coId,
            coName: item.coName,
            coLogo: item.coLogo,
            coBgColor: item.coBgColor,
            coDes: item.coDes,
            time: item.time,
            project: item.project,
          })),
        );
      } catch (error) {
        setError("Failed to fetch skills");
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  const handleCardClick = (id: string) => {
    const item = company.find((item) => item.coId === id);
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
      <p className="section-header">My Transformative Journey</p>
      <p className="section-header">In the IT Industry</p>
      {loading ? (
        <div className="w-11/12">
          <Skeleton />
        </div>
      ) : (
        <div className="flex w-full flex-wrap items-center justify-center gap-6 px-10 py-10 md:gap-10">
          {company.map((item) => (
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
      )}
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
