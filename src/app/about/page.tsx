import Aboutherobanner from "@/components/aboutpagecomponents/aboutherobanner";
import Aboutmissionsection from "@/components/aboutpagecomponents/aboutmissionsection";
import Autononewssection from "@/components/aboutpagecomponents/autononewssection";
import Journeysection from "@/components/aboutpagecomponents/journeysection";
import React from "react";

export default function About() {
  return (
    <>
      <Aboutherobanner />
      <Aboutmissionsection />
      <Journeysection />
      <Autononewssection />
    </>
  );
}
