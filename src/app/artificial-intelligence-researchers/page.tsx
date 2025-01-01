import Careersdetailswhoyouaresection from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailswhoyouaresection";
import Careersdetailsyouallsection from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailsyouallsection";
import Electricengineersdetailspage from "@/pages/careersdetailpages/electricengineers";
import React from "react";

export default function Artificialintelligenceresearchers() {
  return (
    <>
      <Electricengineersdetailspage
        maintitle={
          <>
            ARTIFICIAL INTELLIGENCE <br /> RESEARCHER
          </>
        }
      />
      <Careersdetailswhoyouaresection />
      <Careersdetailsyouallsection />
    </>
  );
}
