import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
// import { connect } from "react-redux";
// import { , useCycle } from "framer-";
// import { useDimensions } from "../../framer-sidebar/useDim";
const fullLogo =
  "https://res.cloudinary.com/djhjipy7n/image/upload/v1629301901/logo_text_tkvppx.png";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function SideDrawer(props) {
  let drawerClasses = "side-drawer2 ";
  if (props.show) {
    drawerClasses = "side-drawer2 open";
  }

  // const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <nav
      className={drawerClasses}
      // initial = {{opacity: 0, y: -10}}
      // animate= {{opacity:1, y: 0}}
      // initial={false}
      // animate={isOpen ? "open" : "closed"}
      // custom={height}
      // ref={containerRef}
      // variants={variants}
    >
      {/* <.div className="background" variants={sidebar} /> */}

      <div
        className="m-nav "
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        //  variants={variants}
        //  whileHover={{ scale: 1.1 }}
        //  whileTap={{ scale: 0.95 }}
      >
        <div className="container">
          <div className="pt-2 pb-2">
            <Link href="/">
              {/* <img
                className="Newlogo"
                style={{ width: "120px" }}
                alt="logo"
                // src={fullLogo}
              /> */}
              <h1 className="logo-font">Numero</h1>
            </Link>
          </div>
          <ul className="m-nav-order ">
            <li className="navbar-flex-list">
              <p className="navbar-flex-list-text">
                <i className="fa fa-angle-right mr-2"></i>
                About Us
              </p>
            </li>

            <li className="navbar-flex-list">
              <p className="navbar-flex-list-text">
                <i className="fa fa-angle-right mr-2"></i>
                Contact Us
              </p>
            </li>
          </ul>
          {/* <div className="m-nav-others">
       
            <Link href="/login">
              <button className="form-button">Login</button>
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default SideDrawer;
