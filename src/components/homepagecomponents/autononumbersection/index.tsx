import React from "react";
import Image from "next/image";
import styles from "./autononumberssection.module.scss";
import Handimage from "@/assets/images/robothandimage.webp";

export default function Autononumberssection() {
  return (
    <div className={styles.autononumberssectionmain}>
      <div className={styles.autononumberssectionimagediv}>
        <Image src={Handimage} alt="Handimage" width={10000} height={1000} />
      </div>
      <div className="container2">
        <div className={styles.autononumberssection}>
          <div className={styles.autononumbersdetails}>
            <h6>Autono In Numbers</h6>
            <div className={styles.autononumbersdetailsgrd}>
              <div className={styles.autononumbersdetailsgrditems}>
                <p>200</p>
                <span>EMPLOYEES</span>
                <div className={styles.cusoverflowdesignemain}>
                  <div className={styles.cusoverflowdesigne}>
                    <div className={styles.cusoverflowdesigneline}></div>
                    <div className={styles.cusoverflowdesignethumb}></div>
                  </div>
                </div>
              </div>
              <div className={styles.autononumbersdetailsgrditems}>
                <p>5</p>
                <span>CORE TEAMS</span>
                <div className={styles.cusoverflowdesignemain}>
                  <div className={styles.cusoverflowdesigne}>
                    <div className={styles.cusoverflowdesigneline}></div>
                    <div className={styles.cusoverflowdesignethumb}></div>
                  </div>
                </div>
              </div>
              <div className={styles.autononumbersdetailsgrditems}>
                <p>200M$</p>
                <span>CAPITAL</span>
                <div className={styles.cusoverflowdesignemain}>
                  <div className={styles.cusoverflowdesigne}>
                    <div className={styles.cusoverflowdesigneline}></div>
                    <div className={styles.cusoverflowdesignethumb}></div>
                  </div>
                </div>
              </div>
              <div className={styles.autononumbersdetailsgrditems}>
                <p>326</p>
                <span>PARTNERS</span>
                <div className={styles.cusoverflowdesignemain}>
                  <div className={styles.cusoverflowdesigne}>
                    <div className={styles.cusoverflowdesigneline}></div>
                    <div className={styles.cusoverflowdesignethumb}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
