import Careersdetailsherobanner from "@/components/careersdetailspagecomponents/careersdetailspage/careersdetailsherobanner";
import React, { ReactNode } from "react";

interface Electricengineersdetailspageprop {
  maintitle: ReactNode;
}

export default function Electricengineersdetailspage({ maintitle }: Electricengineersdetailspageprop) {
  return (
    <>
      <Careersdetailsherobanner title={maintitle} />
    </>
  );
}
