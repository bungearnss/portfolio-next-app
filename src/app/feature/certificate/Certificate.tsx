"use client";
import React, { useEffect, useState } from "react";
import CertificateCard from "./CertificateCard";
import ExpandCollapseButton from "./ExpandCollapseButton";
import { CertificateEntity } from "./models/CertificateEntity";
import Skeleton from "@/app/components/Skeleton";
import { decrypt } from "../../utils/CryptoUtils";

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
      if (visibleCount + 5 >= cert.length) {
        setExpanded(true);
      }
    }
  };

  const [cert, setCert] = useState<CertificateEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch("/api/certificates", {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",      
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setCert(
          data.map((item: any) => ({
            id: item.id,
            title: item.title,
            img: decrypt(item.img),
            url: decrypt(item.url),
          })),
        );
      } catch (error) {
        setError("Failed to fetch skills");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="section-header">My Certificate</p>
      {loading ? (
        <div className="w-11/12">
          <Skeleton />
        </div>
      ) : (
        <div className="grid max-w-full grid-cols-2 gap-5 px-5 py-5 sm:w-screen md:grid-cols-5 md:px-20 md:py-10">
          {cert.slice(0, visibleCount).map((item) => (
            <CertificateCard
              key={item.id}
              title={item.title}
              onClick={() => handleCardClick(item.url)}
              img={item.img}
            />
          ))}
        </div>
      )}
      {cert.length > 10 && (
        <ExpandCollapseButton onClick={handleExpandMore} expanded={expanded} />
      )}
    </div>
  );
}
