import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { motion, useCycle } from "framer-motion";

const fullLogo =
  "https://res.cloudinary.com/blood4bones/image/upload/v1632933217/green-tips_qmiww5.png";

import DrawerToggleButton from "../sidedrawer/drawertogglebutton";

export default function Toolbar({ drawerClickHandler, children }) {

  return (
    <>
      <header className="toolbar">
        <nav className="toolbar__navigation container">
          <div className="toolbar__logo">
            {/* <Link href="/">
              <img
                className="Newlogo"
                style={{ width: "120px" }}
                src={fullLogo}
                alt="logo"
              />
            </Link> */}
            <h1 className="logo-font">Green tips</h1>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul>
              
              <li className="nav-it">
                <Link href="#">Telegram</Link>
              </li>
              <li className="nav-it">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="toolbar__toggle-button">
            <DrawerToggleButton
              toggle={() => toggleOpen()}
              click={drawerClickHandler}
            />
          </div>
        
        </nav>
      </header>
    </>
  );
}
