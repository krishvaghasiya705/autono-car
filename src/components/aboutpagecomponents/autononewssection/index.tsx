import React from "react";
import styles from "./autononewssection.module.scss";
import Rcrlogo from "@/assets/icons/rcr-logo.png";
import Tbreviewlogo from "@/assets/icons/review-logo.png";
import financelogo from "@/assets/icons/finance-logo.png";
import palologo from "@/assets/icons/palo-alto-tribunal-logo.png";
import londonpostlogo from "@/assets/icons/london-post-logo.png";
import Image from "next/image";

export default function Autononewssection() {
  const logos = [
    {
      logo: Rcrlogo,
      width: 136,
      height: 48,
    },
    {
      logo: Tbreviewlogo,
      width: 136,
      height: 28,
    },
    {
      logo: financelogo,
      width: 136,
      height: 18,
    },
    {
      logo: palologo,
      width: 136,
      height: 33,
    },
    {
      logo: londonpostlogo,
      width: 136,
      height: 95,
    },
  ];
  return (
    <>
      <div className={styles.blankimagedivmain}></div>
      <div className={styles.autononewssectionmain}>
        <div className="container2">
          <div className={styles.autononewssectionhead}>
            <span>NEWS</span>
            <h4>Autono In The Press</h4>
            <div className={styles.cusoverflowdesignemain}>
              <div className={styles.cusoverflowdesigne}>
                <div className={styles.cusoverflowdesigneline}></div>
                <div className={styles.cusoverflowdesignethumb}></div>
              </div>
            </div>
          </div>
          <div className={styles.autononewssectionbody}>
            {logos.map((item) => (
              <div className={styles.autononewssectionbodyitems}>
                <Image
                  src={item.logo}
                  alt="logo"
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
