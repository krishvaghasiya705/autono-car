import React from "react";
import styles from "./servicessection.module.scss";
import Image from "next/image";
import { Button1 } from "@/components/buttons/button";
import { StaticImageData } from "next/image";

interface ServicessectionProps {
  title: string;
  paragraph: string;
  buttonlink: string;
  image: string | StaticImageData;
  style?: React.CSSProperties;
}

export default function Servicessection({
  title,
  paragraph,
  buttonlink,
  image,
  style,
}: ServicessectionProps) {
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
            <Image 
              src={image} 
              alt={typeof image === 'string' ? image : image.src}
              height={1000} 
              width={1000} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
