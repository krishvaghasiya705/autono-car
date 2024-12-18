import React from 'react';
import styles from './homeherobanner.module.scss';
import Image from 'next/image';
import Shadow1 from "@/assets/images/shadow1.png"

export default function Homeherobanner() {
  return (
    <section className={styles.homehrobanner}>
      <div className={styles.herobannercontentmain}>
        <div className="container1">
          <div className={styles.herobannercontent}>
            <h1>THE FUTURE OF MOBILITY IS HERE</h1>
            <p>Discover the safest self-driving experience with Autono.</p>
          </div>
        </div>
      </div>
      <video autoPlay muted loop>
        <source src="/herobanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.shadowmain}>
        <Image src={Shadow1} alt='Shadow1' width={100} height={100} />
      </div>
    </section>
  );
}
