import React from "react";
import styles from "./industrysection.module.scss";
import Industryicons1 from "@/assets/icons/General-Transport.png";
import Industryicons2 from "@/assets/icons/IDI-Software.png";
import Industryicons3 from "@/assets/icons/Imogen-Cars.png";
import Industryicons4 from "@/assets/icons/Tri-Nex.png";
import Image from "next/image";

export default function Industrysection() {
  return (
    <div className={styles.industrysectionmain}>
      <div className="container2">
        <div className={styles.industrysection}>
          <div className={styles.industrysectionitems1}>
            <span>INDUSTRY</span>
            <h1>Our Partners</h1>
            <p>
              Click here to add your own content and customize the text. This is
              a great place to tell a story about your company and let your
              users know a little more about the company's history, the team's
              background, or any other information you'd like to share. Just
              click "Edit Text" to get started.
            </p>
            <div className={styles.cusoverflowdesignemain}>
              <div className={styles.cusoverflowdesigne}>
                <div className={styles.cusoverflowdesigneline}></div>
                <div className={styles.cusoverflowdesignethumb}></div>
              </div>
            </div>
          </div>
          <div className={styles.industrysectionitems2}>
            <div className={styles.industrysectionitems2innermain}>
              <div className={styles.industrysectionitems2innerbox}>
                <Image
                  src={Industryicons1}
                  alt="Industryicons1"
                  width={1000}
                  height={1000}
                />
                <p>GENERAL TRANSPORT</p>
              </div>
              <div className={styles.industrysectionitems2innerbox}>
                <Image
                  src={Industryicons2}
                  alt="Industryicons2"
                  width={1000}
                  height={1000}
                />
                <p>IDI SOFTWARE</p>
              </div>
              <div className={styles.industrysectionitems2innerbox}>
                <Image
                  src={Industryicons3}
                  alt="Industryicons3"
                  width={1000}
                  height={1000}
                />
                <p>IMOGEN CARS</p>
              </div>
              <div className={styles.industrysectionitems2innerbox}>
                <Image
                  src={Industryicons4}
                  alt="Industryicons4"
                  width={1000}
                  height={1000}
                />
                <p>TRI-NEX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
