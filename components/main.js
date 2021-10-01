import React from "react";
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

      <div className="row mt-5">
        

        <div className="col-lg-9 col-sm-12 bor"></div>

        <div className="col-lg-2 col-sm-4  side-box ml-auto">
          <h1 className="text-center pt-5">ADS</h1>
        </div>
      </div>

      <TabPage/>

    </div>
  );
}
