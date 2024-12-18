import React from "react";
import Image from "next/image";
import styles from "./realtimeinfosection.module.scss";
import carimage3 from "@/assets/images/carimage3.webp";
import { Button1 } from "@/components/buttons/button";

export default function Realtimeinfosection() {
  return (
    <div className={styles.realtimeinfosectionmain}>
      <div className="container2">
        <div className={styles.realtimeinfosection}>
          <div className={styles.realtimeinfosectionitems1}>
            <Image src={carimage3} alt="carimage3" width={1000} height={1000} />
          </div>
          <div className={styles.realtimeinfosectionitems2}>
            <div>
              <h4>REAL-TIME INFORMATION</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <Button1
                link={"/"}
                Class="read-more-button-light"
                text="Read More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
