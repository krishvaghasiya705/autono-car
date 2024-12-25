import Careersgridsection from "@/components/careerspagecomponents/careersgridsection";
import Careersherobanner from "@/components/careerspagecomponents/careersherobanner";
import Careersjobsection from "@/components/careerspagecomponents/careersjobsection";
import Careerslocationsection from "@/components/careerspagecomponents/careerslocationsection";
import React from "react";

export default function Careerspage() {
  return (
    <>
      <Careersherobanner />
      <Careerslocationsection />
      <Careersjobsection />
      <Careersgridsection />
    </>
  );
}
