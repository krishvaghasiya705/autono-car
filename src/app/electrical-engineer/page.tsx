import Careersdetailsherobanner from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailsherobanner";
import Careersdetailswhoyouaresection from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailswhoyouaresection";
import Careersdetailsyouallsection from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailsyouallsection";
import Electricengineersdetailspage from "@/pages/careersdetailpages/electricengineers";
import React from "react";

export default function Electricalengineer() {
  return (
    <>
      <Electricengineersdetailspage
        maintitle={
          <>
            ELECTRICAL <br /> ENGINEER
          </>
        }
      />
      <Careersdetailswhoyouaresection />
      <Careersdetailsyouallsection />
    </>
  );
}
