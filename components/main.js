import Link from "next/link";
import React from "react";
import Predictions from "./landingPage/predictions";
import TabPage from "./landingPage/tabs";

export default function Main() {
  return (
    <div className="container-fluid">

      <Link href="/section/converter" passHref={true}>
      <div className="mb-4 flex-c">
      <h2 className="text-center con-link">Conver your booking code</h2>

        <span>
          <img src="https://img.icons8.com/ios-filled/20/000000/long-arrow-right.png" alt="icon"/>        </span>
     
      </div>
      </Link>

      <div className="grid-r ">
        <Link href="/section/rollover " passHref={true}>
          <div className="nav-box flex-c text-center">1.5 Daily Rollover</div>
        </Link>
        <div className="nav-box flex-c text-center">YESTERDAY</div>
        <Link href="/section/premium" passHref={true}>
          <div className="nav-box flex-c text-center">PREMIUM </div>
        </Link>
        <div className="nav-box flex-c text-center"> CHAT US</div>
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
