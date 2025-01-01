import Careersdetailswhoyouaresection from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailswhoyouaresection";
import Careersdetailsyouallsection from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailsyouallsection";
import Electricengineersdetailspage from "@/pages/careersdetailpages/electricengineers";
import React from "react";

export default function Datascientist() {
  return (
    <>
      <Electricengineersdetailspage
        maintitle={
          <>
            DATA <br /> SCIENTIST
          </>
        }
      />
      <Careersdetailswhoyouaresection />
      <Careersdetailsyouallsection />
    </>
  );
}
