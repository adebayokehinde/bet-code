import React from "react";
import { Us, Er, It, De, Pt } from "react-flags-select";
import { motion } from "framer-motion";

export default function Predictions() {
  return (
    <>
      <div>
        <span>
          <h3 className="heading-c">EXPERT PICKS </h3>
        </span>
        <div className="prediction-tab bor">
          <div className="">
            <div className="ul-table-heading">
              <div className="ul-table-heading-li">Time</div>
              <div className="ul-table-heading-li">League</div>
              <div className="ul-table-heading-li">Match</div>
              <div className="ul-table-heading-li">Pick</div>
              <div className="ul-table-heading-li">Odds</div>

            </div>

            <hr />
          </div>

          <div className="">
            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">14:30 pm</li>
              <li className="ul-table-heading-li">
                <Er /> ENG
              </li>
              <li className="ul-table-heading-li">Che vs Man. City</li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.3</li>

            </motion.ul>
            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">14:30 pm</li>
              <li className="ul-table-heading-li">
                <It /> ITA
              </li>
              <li className="ul-table-heading-li">Sassuolo vs . City</li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.5</li>

            </motion.ul>
            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">19:00 pm</li>
              <li className="ul-table-heading-li">
                <Pt /> ENG
              </li>
              <li className="ul-table-heading-li">Porto vs Pacos Ferreira </li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.32</li>

            </motion.ul>

            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">19:00 pm</li>
              <li className="ul-table-heading-li">
                <De /> GER{" "}
              </li>
              <li className="ul-table-heading-li">Leipzig vs Bochum </li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.2</li>

            </motion.ul>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <span>
          <h3 className="heading-c">Predictions </h3>
        </span>
        <div className="prediction-tab bor">
          <div className="">
            <div className="ul-table-heading">
              <div className="ul-table-heading-li">Time</div>
              <div className="ul-table-heading-li">League</div>
              <div className="ul-table-heading-li">Match</div>
              <div className="ul-table-heading-li">Pick</div>
              <div className="ul-table-heading-li">Odds</div>

            </div>

            <hr />
          </div>

          <div className="">
            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">14:30 pm</li>
              <li className="ul-table-heading-li">
                <Er /> ENG
              </li>
              <li className="ul-table-heading-li">Che vs Man. City</li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.7</li>

            </motion.ul>
            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">14:30 pm</li>
              <li className="ul-table-heading-li">
                <It /> ITA
              </li>
              <li className="ul-table-heading-li">Sassuolo vs . City</li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.8</li>

            </motion.ul>
            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">19:00 pm</li>
              <li className="ul-table-heading-li">
                <Pt /> ENG
              </li>
              <li className="ul-table-heading-li">Porto vs Pacos Ferreira </li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.4</li>

            </motion.ul>

            <motion.ul
              whileHover={{ rotate: 0, y: -10 }}
              className="ul-table-heading"
            >
              <li className="ul-table-heading-li">19:00 pm</li>
              <li className="ul-table-heading-li">
                <De /> GER{" "}
              </li>
              <li className="ul-table-heading-li">Leipzig vs Bochum </li>
              <li className="ul-table-heading-li">GG</li>
              <li className="ul-table-heading-li">1.6</li>

            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
}
