import Link from "next/link";
import React from "react";
import Predictions from "./landingPage/predictions";
import TabPage from "./landingPage/tabs";

export default function Main() {
  return (
    <div className="container-fluid">

      <Link href="/section/converter">
      <div className="mb-4 flex-c">
      <h2 className="text-center con-link">Conver your booking code</h2>

        <span>
          <img src="https://img.icons8.com/ios-filled/20/000000/long-arrow-right.png"/>        </span>
     
      </div>
      </Link>

      <div className="grid-r">
        <Link href="/section/rollover">
          <div className="nav-box text-center">1.5 Daily Rollover</div>
        </Link>
        <div className="nav-box text-center">YESTERDAY</div>
        <Link href="/section/premium">
          <div className="nav-box text-center">PREMIUM </div>
        </Link>
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
