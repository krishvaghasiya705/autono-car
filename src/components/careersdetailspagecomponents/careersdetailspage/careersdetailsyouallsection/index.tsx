import React from "react";
import styles from "./careersdetailsyouallsection.module.scss";
import { Button1 } from "@/components/buttons/button";

export default function Careersdetailsyouallsection() {
  return (
    <div className={styles.careersdetailswhoyouarescsectionmain}>
      <div className="container2">
        <div className={styles.careersdetailswhoyouarescsectiontitle}>
          <h1>Who You are</h1>
          <div className={styles.careersdetailswhoyouarescsectiontitlelinemain}>
            <div
              className={
                styles.careersdetailswhoyouarescsectiontitlelinealignment
              }
            >
              <div
                className={styles.careersdetailswhoyouarescsectiontitleline1}
              ></div>
              <div
                className={styles.careersdetailswhoyouarescsectiontitleline2}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.careersdetailswhoyouarescsection}>
          <div className={styles.careersdetailswhoyouarescsectionleft}>
            <ul>
              <li>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </li>
              <li>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </li>
              <li>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </li>
            </ul>
          </div>
          <div className={styles.careersdetailswhoyouarescsectionright}>
            <ul>
              <li>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </li>
              <li>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </li>
              <Button1
                link={"/"}
                Class="read-more-button-dark"
                text="Apply Now"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
