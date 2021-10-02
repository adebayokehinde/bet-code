import React from "react";
import { Us, Er, It, De, Pt } from "react-flags-select";

export default function Predictions() {
  return (
    <>
      <div className="prediction-tab bor">
        <div className="">
          <div className="ul-table-heading">
            <div className="ul-table-heading-li">Time</div>
            <div className="ul-table-heading-li">League</div>
            <div className="ul-table-heading-li">Match</div>
            <div className="ul-table-heading-li">Pick</div>
          </div>

          <hr />
        </div>

        <div className="">
          <ul className="ul-table-heading">
            <li className="ul-table-heading-li">14:30 pm</li>
            <li className="ul-table-heading-li">
              <Er /> ENG
            </li>
            <li className="ul-table-heading-li">Che vs Man. City</li>
            <li className="ul-table-heading-li">GG</li>
          </ul>
          <ul className="ul-table-heading">
            <li className="ul-table-heading-li">14:30 pm</li>
            <li className="ul-table-heading-li">
              <It /> ITA
            </li>
            <li className="ul-table-heading-li">Sassuolo vs . City</li>
            <li className="ul-table-heading-li">GG</li>
          </ul>
          <ul className="ul-table-heading">
            <li className="ul-table-heading-li">19:00 pm</li>
            <li className="ul-table-heading-li">
              <Pt /> ENG
            </li>
            <li className="ul-table-heading-li">Porto vs Pacos Ferreira </li>
            <li className="ul-table-heading-li">GG</li>
          </ul>
          <ul className="ul-table-heading">
            <li className="ul-table-heading-li">19:00 pm</li>
            <li className="ul-table-heading-li">
              <De /> GER{" "}
            </li>
            <li className="ul-table-heading-li">Leipzig vs Bochum </li>
            <li className="ul-table-heading-li">GG</li>
          </ul>
        </div>
      </div>
    </>
  );
}