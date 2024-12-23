import React from "react";
import styles from "./theautonsection.module.scss";
import Carimage5 from "@/assets/images/carimage5.webp";
import Image from "next/image";

export default function Theautonsection() {
  return (
    <div className={styles.theautonsectionmain}>
      <div className="container2">
        <div className={styles.theautonsectioncontent}>
          <span>THE AUTONO CAR</span>
          <p>
            Using groundbreaking perception-enabled sensor technology, the
            Autono car is a fully driverless vehicle engineered to the highest
            degree of precision and safety. It’s autonomous driving reimagined.
          </p>
          <div className={styles.cusoverflowdesignemain}>
            <div className={styles.cusoverflowdesigne}>
              <div className={styles.cusoverflowdesigneline}></div>
              <div className={styles.cusoverflowdesignethumb}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.theautonsectionimage}>
        <Image src={Carimage5} alt="Carimage5" width={1000} height={1000} />
      </div>
    </div>
  );
}
