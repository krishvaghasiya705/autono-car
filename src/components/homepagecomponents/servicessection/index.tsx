import React from "react";
import styles from "./servicessection.module.scss";
import Image from "next/image";
import { Button1 } from "@/components/buttons/button";

// Define the props type
interface ServicessectionProps {
  title: string; // Type for the title
  paragraph: string; // Type for the paragraph
  buttonlink: string; // Type for the button link
  image: string; // Type for the image source
  style?: React.CSSProperties; // Optional style prop
}

export default function Servicessection({
  title,
  paragraph,
  buttonlink,
  image,
  style,
}: ServicessectionProps) { // Use the defined type
  return (
    <div className={styles.servicessectionmain}>
      <div className="container2">
        <div className={styles.servicessectiontopperadivmain} style={style}>
          <span className={styles.servicestitle}>SERVICES</span>
          <h3>We Deliver Exceptional Products and Services Around the World</h3>
          <div className={styles.cusoverflowdesignemain}>
            <div className={styles.cusoverflowdesigne}>
              <div className={styles.cusoverflowdesigneline}></div>
              <div className={styles.cusoverflowdesignethumb}></div>
            </div>
          </div>
        </div>
        <div className={styles.servicesflxsectionmain}>
          <div className={styles.servicesflxsectionitem1}>
            <h4>{title}</h4>
            <p>{paragraph}</p>
            <Button1
              link={buttonlink}
              Class="read-more-button-light"
              text="Read More"
            />
          </div>
          <div className={styles.servicesflxsectionitem2}>
            <Image src={image} alt={image} height={1000} width={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}
