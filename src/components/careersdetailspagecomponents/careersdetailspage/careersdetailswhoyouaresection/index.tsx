import React from 'react'
import styles from "./careersdetailswhoyouaresection.module.scss"

export default function Careersdetailswhoyouaresection() {
  return (
    <div className={styles.careersdetailswhoyouaresectionmain}>
      <div className="container2">
        <div className={styles.careersdetailswhoyouaresectiontitle}>
          <h1>What You’ll Do</h1>
          <div className={styles.careersdetailswhoyouaresectiontitlelinemain}>
            <div className={styles.careersdetailswhoyouaresectiontitlelinealignment}>
              <div className={styles.careersdetailswhoyouaresectiontitleline1}></div>
              <div className={styles.careersdetailswhoyouaresectiontitleline2}></div>
            </div>
          </div>
        </div>
        <div className={styles.careersdetailswhoyouaresection}>
          <div className={styles.careersdetailswhoyouaresectionleft}>
            <ul>
              <li>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</li>
              <li>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</li>
              <li>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</li>
            </ul>
          </div>
          <div className={styles.careersdetailswhoyouaresectionright}>
            <ul>
              <li>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</li>
              <li>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</li>
              <li>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
