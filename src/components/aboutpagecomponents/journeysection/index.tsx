"use client";
import React, { Component } from "react";
import styles from "./journeysection.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrowProps } from "react-slick";
import Slidernexticon from "@/assets/slidernexticon";

function SampleNextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={styles.nextarrow}>
      <Slidernexticon />
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={styles.prevarrow}>
      <Slidernexticon />
    </div>
  );
}

export default function Journeysection() {
  const Journeyslider = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.journeysectionmain}>
      <div className="container2">
        <div className={styles.journeysectionhead}>
          <h3>Our Journey So Far</h3>
        </div>
        <div className={styles.journeysectionbodymain}>
          <Slider {...Journeyslider}>
            <div className={styles.journeysectionsliderbodymain}>
              <div className={styles.journeysectionsliderbody}>
                <div className={styles.journeysectionbodycard1}>
                  <h4>2013</h4>
                  <span>AUTONO IS FOUNDED</span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
                <div className={styles.journeysectionbodycard2}>
                  <h4>2015</h4>
                  <span>GROUNDBREAKING SENSOR TECHNOLOGY LAUNCHED</span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
              <div className={styles.slidersmallline1}></div>
              <div className={styles.slidersmallline2}></div>
            </div>
            <div className={styles.journeysectionsliderbodymain}>
              <div className={styles.journeysectionsliderbody}>
                <div className={styles.journeysectionbodycard3}>
                  <h4>2016</h4>
                  <span>SAN FRANCISCO HQ OPENS</span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
                <div className={styles.journeysectionbodycard4}>
                  <h4>2017</h4>
                  <span>FIRST PROTOTYPE IS TEST-DRIVEN</span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
              <div className={styles.slidersmallline1}></div>
              <div className={styles.slidersmallline2}></div>
            </div>
            <div className={styles.journeysectionsliderbodymain}>
              <div className={styles.journeysectionsliderbody}>
                <div className={styles.journeysectionbodycard1}>
                  <h4>2018</h4>
                  <span>
                    PARTNERSHIP WITH TRI-NEX & GENERAL TRANSPORT INITIATED
                  </span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
                <div className={styles.journeysectionbodycard2}>
                  <h4>2019</h4>
                  <span>TESTING EXPANDS TO ARIZONA & NEW MEXICO</span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
              <div className={styles.slidersmallline1}></div>
              <div className={styles.slidersmallline2}></div>
            </div>
            <div className={styles.journeysectionsliderbodymain}>
              <div className={styles.journeysectionsliderbody}>
                <div className={styles.journeysectionbodycard3}>
                  <h4>2020</h4>
                  <span>PRODUCTION BEGINS!</span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
                <div className={styles.journeysectionbodycard4}>
                  <h4>2021</h4>
                  <span>FIRST 1,000 CARS SOLD</span>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
              <div className={styles.slidersmallline1}></div>
              <div className={styles.slidersmallline2}></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
