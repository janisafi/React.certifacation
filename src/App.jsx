import React from "react";
import {
  Navbar,
  Hero,
  Companies,
  Dominatrate,
  Enhanced,
  BenifitsForTheTeam,
  Instructor,
  Steps,
  Examination,
  Researchachieving,
  CertificationLevel,
  OptionalPreparation,
  Pricing,
} from "./Components/index";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Dominatrate />
      <Enhanced />
      <BenifitsForTheTeam />

      <Instructor />
      <Steps />
      <Examination />
      <Researchachieving />
      <CertificationLevel />
      <OptionalPreparation />
      <Pricing/>
    </>
  );
}
