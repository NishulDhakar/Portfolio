"use client";

import React from "react";

import CertificateCard from "./CertificateCard";
import { certificateData } from "@/data/Certificate";
import Container from "@/components/common/Container";


const CertificatesSection = () => {
  return (
            <Container className="mt-4">
          <h2 className="text-2xl font-bold"> 
                          🧾 Certificates.
                        </h2>
    <div className="grid md:grid-cols-2 gap-6 py-12">
      {certificateData.map((cert, index) => (
        <CertificateCard
          key={index}
          title={cert.title}
          description={cert.description}
          href={cert.href}
          image={cert.image}
        />
      ))}
    </div>
  </Container>
  );
};

export default CertificatesSection;
