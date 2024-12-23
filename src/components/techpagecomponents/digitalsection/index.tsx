import React from "react";
import styles from "./digitalsection.module.scss";
import Carimage6 from "@/assets/images/carimage6.webp";
import Image from "next/image";

export default function Digitalsection() {
  return (
    <div className={styles.digitalsectionmain}>
      <div className="container2">
        <div className={styles.digitalsectionflxmain}>
          <div className={styles.digitalsectionflxitem1}>
            <span>THE AUTONO DIGITAL PRODUCTS</span>
            <p>
              We’ve developed an app so that each vehicle can drive autonomously
              and make decisions based on real-time information and situational
              awareness.
            </p>
            <div className={styles.cusoverflowdesignemain}>
              <div className={styles.cusoverflowdesigne}>
                <div className={styles.cusoverflowdesigneline}></div>
                <div className={styles.cusoverflowdesignethumb}></div>
              </div>
            </div>
          </div>
          <div className={styles.digitalsectionflxitem2}>
            <Image src={Carimage6} alt="Carimage6" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}
