import React from "react";
import styles from "./aboutherobanner.module.scss";

export default function Aboutherobanner() {
  return (
    <div className={styles.aboutherobannermain}>
      <div className="container2">
        <div className={styles.aboutherobannercontentmain}>
          <h1>OUR JOURNEY</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}
