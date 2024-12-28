import React from "react";
import styles from "./careersgridsection.module.scss";
import { Button1 } from "@/components/buttons/button";

const careersgriddata = [
  {
    title: "ELECTRICAL ENGINEER",
    location: "San Francisco, CA",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    link: "/electrical-engineer",
    buttonClass: "read-more-button-dark",
    buttonText: "Apply Now",
  },
  {
    title: "DATA SCIENTIST",
    location: "San Francisco, CA",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    link: "/",
    buttonClass: "read-more-button-dark",
    buttonText: "Apply Now",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE RESEARCHER",
    location: "San Francisco, CA",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    link: "/",
    buttonClass: "read-more-button-dark",
    buttonText: "Apply Now",
  },
  {
    title: "DEEP LEARNING ENGINEER",
    location: "San Francisco, CA",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    link: "/",
    buttonClass: "read-more-button-dark",
    buttonText: "Apply Now",
  },
];

export default function Careersgridsection() {
  return (
    <div className={styles.careersgridsectionmain}>
      <div className="container2">
        <div className={styles.careersgridsectiongrdmain}>
          {careersgriddata.map((job, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? styles.careersgridsectiongrditems1
                  : styles.careersgridsectiongrditems2
              }
            >
              <div className={styles.careersgridsectiongrditemscard}>
                <span>{job.title}</span>
                <div>
                  <small>{job.location}</small>
                  <p>{job.description}</p>
                </div>
                <Button1
                  link={job.link}
                  Class={job.buttonClass}
                  text={job.buttonText}
                />
              </div>
            </div>
          ))}
          <div className={styles.careersgridsectiongrditems1}>
            <div className={styles.careersgridsectiongrditemscard2}>
              <p>
                Didn't find the position you're looking for? Send us your CV
              </p>
              <Button1
                link={"/"}
                Class="read-more-button-light"
                text="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
