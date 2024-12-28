import React from "react";
import styles from "./careersdetailsherobanner.module.scss";

export default function Careersdetailsherobanner() {
  return (
    <div className={styles.careersdetailsherobannermain}>
      <div className="container2">
        <div className={styles.careersdetailsherobanner}>
          <h1>
            ELECTRICAL <br /> ENGINEER
          </h1>
          <p className={styles.careersdetailsherobannerparagraph}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <div className={styles.careersdetailsherobannertypesdivmain}>
            <div className={styles.careersdetailsherobannertypesdiv}>
              <div
                className={styles.careersdetailsherobannertypesdivborder1}
              ></div>
              <div
                className={styles.careersdetailsherobannertypesdivborder2}
              ></div>
              <span>LOCATION</span>
              <p>San Francisco</p>
            </div>
            <div className={styles.careersdetailsherobannertypesdiv}>
              <div
                className={styles.careersdetailsherobannertypesdivborder1}
              ></div>
              <div
                className={styles.careersdetailsherobannertypesdivborder2}
              ></div>
              <span>EMPLOYMENT TYPE</span>
              <p>Permanent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
