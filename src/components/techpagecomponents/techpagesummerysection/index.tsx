import React from "react";
import styles from "./techpagesummerysection.module.scss";
interface Techpagesummerysectionprop {
  title1: string;
  title2: string;
  paragraph1: string;
  paragraph2: string;
  sectioncolor: string;
  textcolor: string;
}

export default function Techpagesummerysection({
  title1,
  title2,
  paragraph1,
  paragraph2,
  sectioncolor,
  textcolor,
}: Techpagesummerysectionprop) {
  return (
    <div
      className={styles.techpagesummerysectionmain}
      style={{ backgroundColor: sectioncolor }}
    >
      <div className="container2">
        <div className={styles.techpagesummerysectionflxmain}>
          <div className={styles.techpagesummerysectionflxitem1}>
            <span style={{ color: textcolor }}>{title1}</span>
            <p style={{ color: textcolor }}>{paragraph1}</p>
          </div>
          <div className={styles.techpagesummerysectionflxitem1}>
            <span style={{ color: textcolor }}>{title2}</span>
            <p style={{ color: textcolor }}>{paragraph2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
