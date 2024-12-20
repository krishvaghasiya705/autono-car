import React from "react";
import styles from "./techherobanner.module.scss";

export default function Techherobanner() {
  return (
    <div className={styles.techherobannermain}>
      <div className={styles.techherobanner}>
        <div className="container2">
          <div className={styles.techherobannercontent}>
            <h1>PERCEPTION ENABLED TECHNOLOGY</h1>
          </div>
        </div>
      </div>
      <div className={styles.techherobannercontent2}>
        <p>
          Click here to edit this paragraph and add your own content. This is a
          great place to expand on the title and any relevant details or
          information.
        </p>
      </div>
    </div>
  );
}
