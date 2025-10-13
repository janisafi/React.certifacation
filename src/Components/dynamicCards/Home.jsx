// src/pages/Home.jsx
import React from "react";
import Section from "../components/Section";
import { sections } from "../data/SectionData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1F] via-[#111B2E] to-[#1A1033]">
      {sections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          description={section.description}
          img={section.img}
          reverse={section.reverse}
          alt={section.alt}
        />
      ))}
    </div>
  );
}
