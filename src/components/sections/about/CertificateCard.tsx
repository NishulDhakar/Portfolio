"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/crazxy-ui/card";
import { SparklesText } from "@/components/ui/magicui/sparkles-text";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

interface CertificateCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  className?: string;
}

export default function CertificateCard({
  title,
  description,
  image,
  className,
}: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleImageError = () => {
    console.error(`Failed to load image: ${image}`);
    setImageError(true);
  };

  return (
    <Card
      variant="plus"
      className={cn(
        "relative w-full max-w-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-muted bg-background",
        className
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <div
        className="relative rounded-lg overflow-hidden mb-4 cursor-pointer group w-full h-64"
        onClick={openModal}
      >
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            onError={handleImageError}
            fill
            className="object-cover rounded-lg border"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-red-500 bg-gray-100 rounded border border-dashed border-red-400">
            Image failed to load
          </div>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: 0,
            border: "none",
            background: "none",
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "hidden",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
          },
        }}
      >
        <div className="relative w-[90vw] h-[90vh]">
          <Image
            src={image}
            alt="Fullscreen certificate"
            fill
            className="object-contain rounded-lg cursor-pointer"
            onClick={closeModal}
          />
        </div>
      </Modal>

      <div className="flex items-center justify-between">
        <SparklesText className="text-lg font-semibold">{title}</SparklesText>
      </div>

      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </Card>
  );
}
