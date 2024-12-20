"use client";
import React from "react";
import styles from "./careerssection.module.scss";
import { Button1 } from "@/components/buttons/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Careerssection() {
  const Fadedslider = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  const FadedSliderData = [
    {
      id: 1,
      title: "ELECTRICAL ENGINEER",
      small: "San Francisco, CA",
      paragraph:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font",
    },
    {
      id: 2,
      title: "DATA SCIENTIST",
      small: "San Francisco, CA",
      paragraph:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      id: 3,
      title: "ARTIFICIAL INTELLIGENCE RESEARCHER",
      small: "San Francisco, CA",
      paragraph:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      id: 4,
      title: "DEEP LEARNING ENGINEER",
      small: "San Francisco, CA",
      paragraph:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];

  console.log(FadedSliderData)
  return (
    <div className={styles.careerssectionmain}>
      <div className="container2">
        <div className={styles.careerssection}>
          <div className={styles.careerssectionitem1}>
            <span>CAREERS</span>
            <h2>
              We’re looking for innovative talent to join our team. See all
              positions and submit your CV.
            </h2>
            <Button1 link={"/"} Class="read-more-button-dark" text="Openings" />
            <div className={styles.cusoverflowdesignemain}>
              <div className={styles.cusoverflowdesigne}>
                <div className={styles.cusoverflowdesigneline}></div>
                <div className={styles.cusoverflowdesignethumb}></div>
              </div>
            </div>
          </div>
          <div className={styles.careerssectionitem2}>
            <Slider {...Fadedslider}>
              {FadedSliderData.map((item) => (
                <div>
                  <div key={item.id} className={styles.fadedsliderdivmain}>
                    <span>{item.title}</span>
                    <div>
                      <small>{item.small}</small>
                      <p>{item.paragraph}</p>
                    </div>
                    <Button1
                      link={"/"}
                      Class="read-more-button-dark"
                      text="Apply Now"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
