import React from "react";
import styles from "./whyautonosection.module.scss";
import { Button1 } from "@/components/buttons/button";

export default function Whyautonosection() {
  return (
    <div className={styles.whyautonosectionmain}>
      <div className="container2">
        <div className={styles.whyautonosection}>
          <div className={styles.whyautonosectiondetails}>
            <span>WHY AUTONO</span>
            <h5>A different approach, using a new method of manufacturing.</h5>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <Button1
              link={"/"}
              Class="read-more-button-dark"
              text="Read More"
            />
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
  );
}
