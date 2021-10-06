import React from "react";
import Predictions from "./landingPage/predictions";
import TabPage from "./landingPage/tabs";

export default function Main() {
  return (
    <div className="container-fluid">
      <div className="flex-r">
        <div className="nav-box text-center">
          <p>TODAY</p>
        </div>

        <div className="nav-box text-center">YESTERDAY</div>
        <div className="nav-box text-center">PREMIUM </div>
        <div className="nav-box text-center"> CHAT US</div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-sm-12 ">
          {/* <TabPage /> */}
          <Predictions />
        </div>

       
      </div>
    </div>
  );
}
