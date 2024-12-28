import React from "react";
import styles from "./footer.module.scss";
import Logo from "@/assets/svg/Logo";
import Link from "next/link";
import linkedinicon from "@/assets/icons/linkedin.png";
import facebookicon from "@/assets/icons/facebook.png";
import twittericon from "@/assets/icons/twitter.png";
import instagramicon from "@/assets/icons/instagram.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footermain}>
      <div className="container2">
        <div className={styles.footerflxmain}>
          <div className={styles.footerflxitems1}>
            <div className={styles.footerflxitems1head}>
              <Link href={"/"} aria-label="logo">
                <Logo />
              </Link>
            </div>
            <div className={styles.footerflxitems1body}>
              <div className={styles.footerflxitems1bodyflxitem1}>
                <p>
                  <Link href={"/technology"}>Technology</Link>
                </p>
                <p>
                  <Link href={"/about"}>About</Link>
                </p>
                <p>
                  <Link href={"/career"}>Careers</Link>
                </p>
              </div>
              <div className={styles.footerflxitems1bodyflxitem2}>
                <p>
                  <Link href={"Tel:123-456-7890"}>Tel: 123-456-7890</Link>
                </p>
                <p>
                  <Link href={"mailto:info@mysite.com"}>
                    Email: info@mysite.com
                  </Link>
                </p>
                <p>
                  <Link href={"/"}>
                    500 Terry Francine St San Francisco, CA 94158
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.footerflxitems2}>
            <div className={styles.footerflxitems2head}>
              <span>SUBSCRIBE</span>
            </div>
            <div className={styles.footerflxitems2body}>
              <p className={styles.signuppera}>
                Sign up to receive Autono news and updates.
              </p>
              <div className={styles.footerflxitems2bodyemailinputalignment}>
                <div className={styles.footerflxitems2bodyemailinputdiv}>
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" area-label="email" />
                </div>
                <Link href={"/"}>
                  <button type="button">Subscribe</button>
                </Link>
              </div>
              <div className={styles.cehckboxdivmain}>
                <input type="checkbox" id="subscribeCheckbox" area-label="checkbox" />
                <label htmlFor="subscribeCheckbox">Yes, subscribe me to your newsletter.</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerbottommain}>
          <div className={styles.footercopyrighttext}>
            <p>
              © 2035 by Autono. Powered and secured by
              <Link href={"https://github.com/krishvaghasiya705"} target="_blank">KRISH</Link>
            </p>
          </div>
          <div className={styles.footersocialmediaiconsdivmain}>
            <a href="https://www.linkedin.com/">
              <Image
                src={linkedinicon}
                alt="linkedinicon"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://www.facebook.com/">
              <Image
                src={facebookicon}
                alt="facebookicon"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://x.com/">
              <Image
                src={twittericon}
                alt="twittericon"
                width={1000}
                height={1000}
              />
            </a>
            <a href="https://www.instagram.com/">
              <Image
                src={instagramicon}
                alt="instagramicon"
                width={1000}
                height={1000}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
