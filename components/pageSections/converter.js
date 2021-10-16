import React from "react";

export default function Converter() {
  return (
    <>
      <div className="container my-5">
        <span>
          <h3 className="heading-c">Bookie Converter </h3>
        </span>

        <div className="row my-5">
          <div className="col-sm-12 col-lg-6">
            <span>
              <h4>From</h4>
              <p>Betja - Sporty Bet</p>
            </span>
            <span>
              <input type="text" />
            </span>
            <span className="ml-3">
              <button className="code-button">convert</button>
            </span>
          </div>
          <div className="col-sm-12 col-lg-6">
            <span>
              <h4>From</h4>
              <p>1xbet - 22bet - Melbet</p>
            </span>
            <span>
              <input type="text" />
            </span>
            <span className="ml-3">
              <button className="code-button">convert</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
