"use client";
import React, { useState } from "react";
import styles from "./joinusformsection.module.scss";
import Dropdownicon from "@/assets/svg/dropdownicon";

export default function Joinusformsection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("Select Position");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (text: string) => {
    setSelectedText(text);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.joinusformsectionmain}>
      <div className="container2">
        <form>
          <h2>Submit Your Application</h2>
          <div className={styles.joinusformgroup}>
            <label>First Name *</label>
            <input type="text" />
          </div>
          <div className={styles.joinusformgroup}>
            <label>Last Name *</label>
            <input type="text" />
          </div>
          <div className={styles.joinusformgroup}>
            <label>Email *</label>
            <input type="email" />
          </div>
          <div className={styles.joinusformgroup}>
            <label>Phone</label>
            <input type="tel" />
          </div>
          <div className={styles.joinusformgroup}>
            <label>Dropdown</label>
            <div
              className={`${styles.dropdowndivmain} ${
                isDropdownOpen ? styles.active : ""
              }`}
              onClick={toggleDropdown}
            >
              <div className={styles.dropdowndivalignment}>
                <p>{selectedText}</p>
                <div
                  className={`${styles.dropdownicon} ${
                    isDropdownOpen ? styles.dropdowniconactive : ""
                  }`}
                >
                  <Dropdownicon />
                </div>
              </div>
              {isDropdownOpen && (
                <div className={styles.dropdownbodymain}>
                  <div className={styles.dropdownbody}>
                    {[
                      "Electric Engineer",
                      "Data Scientist",
                      "Artificial Intelligence Researcher",
                      "Deep Learning Engineer",
                      "Other: Submit Your CV",
                    ].map((text) => (
                      <div
                        key={text}
                        className={`${styles.dropdownbodytextsdivalignment} ${
                          selectedText === text ? styles.selected : ""
                        }`}
                        onClick={() => handleSelect(text)}
                      >
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.joinusformgroup}>
            <label>CV URL *</label>
            <input type="url" />
          </div>
          <div className={styles.joinusformgroup}>
            <label>LinkedIn URL</label>
            <input type="url" />
          </div>
          <div className={styles.joinusformgroup}>
            <label>Any comments</label>
            <textarea placeholder="Tell Us a Bit About Yourself"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
