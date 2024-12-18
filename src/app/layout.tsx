"use client"
import Header from '@/common/header/Header';
import React from 'react';
import "../styles/buttons.scss"
import "@/styles/container.scss"
import "@/styles/globals.scss"
import "@/styles/theme.scss"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header  />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default Layout;