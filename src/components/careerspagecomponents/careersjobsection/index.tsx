import React from "react";
import styles from "./careersjobsection.module.scss";
import careersjobimage from "@/assets/images/careersjobimage.webp";
import Image from "next/image";

export default function Careersjobsection() {
  return (
    <div className={styles.careerslocationsectionmain}>
      <div className="container2">
        <div className={styles.careerssectionflxcontentmain}>
          <span className={styles.careerstitle}>JOB OPENINGS</span>
          <h2>
            Changing the future of transportation means thinking differently.
          </h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <div className={styles.cusoverflowdesignemain}>
            <div className={styles.cusoverflowdesigne}>
              <div className={styles.cusoverflowdesigneline}></div>
              <div className={styles.cusoverflowdesignethumb}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.careerslocationsectionimagediv}>
        <Image
          src={careersjobimage}
          alt="careersjobimage"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
