import React from "react";

export default function Rollover() {
  return (
    <>
      <div className="form-box m-auto ">
          <p><b>1.5 Rollover Picks</b></p>
        <form className="flex-c">
          <span className="form-grid p-3">
            {" "}
            <label className="">Home</label>
            <input type="text" />
          </span>
          <span className="form-grid p-3">
            {" "}
            <label className="">Away</label>
            <input type="text" />
          </span>
          <span className="form-grid p-3">
            {" "}
            <label className="">Pick</label>
            <input type="text" />
          </span>
          <span className="form-grid p-3" style={{width:'100%'}}>
            {" "}
            <label className="">League</label>
            <select name="cars" id="cars">
              <option value="volvo">England</option>
              <option value="saab">Spain</option>
              <option value="mercedes">Germany</option>
            </select>
          </span>
          <span className="form-grid p-3">
            {" "}
            <label className="">Odd</label>
            <input type="text" />
          </span>
        </form>
      </div>
    </>
  );
}
