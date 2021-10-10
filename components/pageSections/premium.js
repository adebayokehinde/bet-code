import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Premium() {
  return (
    <>
      <div className="mt-5 mb-5">
        <section className="container">
          <div className="col-lg-6 col-sm-12 ">
            <h2 className="heading-a"> Premium Packages </h2>
            Green Tips Premium Tip is a service that picks the best bets to help
            our users maximize winning chances and experience the joy of daily
            Cashout from any bookmaker of their choice.
          </div>

          <div className="mt-5 page-card-grid m-auto pt-5">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="page-card flex-c  mx-auto "
            >
              <span className="icon flex-c mb-5 mt-5">
                <img src="https://img.icons8.com/ios-filled/50/000000/world-cup.png" />{" "}
              </span>

              <span className="text">
                <h3 className="text-center">Silver </h3>
                <p className="text-center">
                  Become a partial owner of collectable NFTs you otherwise could
                  not afford
                </p>
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="page-card flex-c  mx-auto"
            >
              <span className="icon flex-c mb-5 mt-5">
                <img src="https://img.icons8.com/ios-filled/50/000000/medal.png" />{" "}
              </span>

              <span className="text">
                <h3 className="text-center">Gold</h3>
                <p className="text-center">
                  Become a partial owner of collectable NFTs you otherwise could
                  not afford
                </p>
              </span>
            </motion.div>
          </div>

          <div className="flex-r m-5">
            {/* <span className="">
              <button className="page-button">Read Faq</button>
            </span> */}
            {/* <span>
              <button className="page-button">How it works</button>
            </span> */}
          </div>

          <div>
            <h3>Disclaimer</h3>
            <p>
              Please be informed that there will be no refunds and credits are
              not exchangable for cash. By opting to receive soccer predictions
              and tips, you accept that all Green TIps’s predictions and tips
              are for informational purposes only and that Green TIps will
              take no responsibility for any losses incurred by you, the
              subscriber, as a direct result of acting upon received
              Green TIps’s information. We do not encourage gambling in any
              sort of form. Users under 18 years old must seek parental consent.{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
