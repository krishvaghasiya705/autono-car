"use client";
import React, { useState, useEffect } from "react";
import "../styles/buttons.scss";
import Header from "@/common/header/Header";
import Footer from "@/common/footer/Footer";
import "@/styles/container.scss";
import "@/styles/globals.scss";
import "@/styles/theme.scss";
import CanvasCursor from "@/cursors/cursorimports/cursorimport1";
import FluidCursor from "@/cursors/cursorimports/cursorimport2";
import Loader from "@/components/loader";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Home | AI Company</title>
        <link rel="canonical" href="https://autono-car.netlify.app/" />

        {/* Font-Family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon Links */}
        <link rel="icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" href="./favicons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Meta Tags for SEO */}
        <meta
          name="description"
          content="AI Company: Leading the future of artificial intelligence with innovative solutions and cutting-edge technologies."
        />
        <meta
          name="keywords"
          content="AI, artificial intelligence, technology, machine learning, innovation"
        />
        <meta name="author" content="AI Company" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="Home | AI Company" />
        <meta
          property="og:description"
          content="AI Company: Leading the future of artificial intelligence with innovative solutions and cutting-edge technologies."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://autono-car.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AI Company" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AICompany" />
        <meta name="twitter:title" content="Home | AI Company" />
        <meta
          name="twitter:description"
          content="AI Company: Leading the future of artificial intelligence with innovative solutions and cutting-edge technologies."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Additional Platform Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body>
        <CanvasCursor />
        {/* <FluidCursor /> */}
        <Header />
        {loading ? <Loader /> : <main>{children}</main>}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
