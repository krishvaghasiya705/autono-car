import React from "react";
import styles from "./aboutmissionsection.module.scss";
import Aboutgirlimage from "@/assets/images/aboutgirlimage.webp";
import Image from "next/image";

export default function Aboutmissionsection() {
  return (
    <div className={styles.aboutmissionsectionmain}>
      <div className="container2">
        <div className={styles.aboutmissionsectionflxmain}>
          <div className={styles.aboutmissionsectionflxitem1}>
            <span>OUR MISSION</span>
            <h2>Redefining the Way We Move</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className={styles.lastparagraph}>
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide.
            </p>
            <div className={styles.cusoverflowdesignemain}>
              <div className={styles.cusoverflowdesigne}>
                <div className={styles.cusoverflowdesigneline}></div>
                <div className={styles.cusoverflowdesignethumb}></div>
              </div>
            </div>
          </div>
          <div className={styles.aboutmissionsectionflxitem2}>
            <Image
              src={Aboutgirlimage}
              alt="Aboutgirlimage"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
