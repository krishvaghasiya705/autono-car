import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Logo from "@/assets/svg/Logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.header} ${isHidden ? styles.hidden : ""} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className="container1">
        <div className={styles.headermainalignment}>
          <div className={styles.headerlogo}>
            <Link href={"/"} aria-label="logo">
              <Logo />
            </Link>
          </div>
          <div className={styles.headercontentmain}>
            <div className={styles.headercontentlink}>
              <Link href={"/technology"} className={`${styles.link} ${pathname === '/technology' ? styles.active : ''}`}>Technology</Link>
            </div>
            <div className={styles.headercontentlink}>
              <Link href={"/about"} className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
            </div>
            <div className={styles.headercontentlink}>
              <Link href={"/career"} className={`${styles.link} ${pathname === '/career' ? styles.active : ''}`}>Careers</Link>
            </div>
            <Link href={"/"}>
              <button type="button">
                <span>Subscribe</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
