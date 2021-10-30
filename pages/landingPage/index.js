import React from "react";
import FooterC from "../../components/landingPage/footerSection/footerc";
import NavbarComponent from "../../components/landingPage/navbar/navbar";
import Main from "../../components/main";

export default function LandingPage() {
  return (
    <>
      <NavbarComponent />
      <div className="">
        <div className="container mt-5 mb-5">
          <Main />
        </div>
      </div>
      <FooterC />
    </>
  );
}
