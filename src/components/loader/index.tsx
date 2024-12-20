import React from "react";
import styles from "./loader.module.scss";
import Autonoloadericon1 from "@/assets/svg/autonoloadericon1";
import Autonoloadericon2 from "@/assets/svg/autonoloadericon2";

export default function Loader() {
  return (
    <div className={styles.loadermainlayout}>
      <div className={styles.Autonoloadericon1}>
        <Autonoloadericon1 />
      </div>
      <div className={styles.Autonoloadericon2}>
        <Autonoloadericon2 />
      </div>
    </div>
  );
}
