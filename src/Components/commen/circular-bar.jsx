import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CircularBar = ({ progress, label }) => {
  const [complete, setComplete] = useState(50);
  useEffect(() => {
    let pp = 10;
    const interval = setInterval(() => {
      console.log(complete);
      pp--;
      setComplete((prev) => prev + 1);
      if (pp == 1) clearInterval(interval);
    }, 100);
  }, []);
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        background: `conic-gradient( var(--green-variant-2) ${complete}%,var(--primary-green) 0)`,
      }}
      className={` rounded-circle bg-white
      mx-auto
      d-flex
      justify-content-center
      align-items-center
      position-relative
      `}
    >
      <div
        style={{
          height: `${"150px"}`,
          width: `${"150px"}`,
        }}
        className="bg-light-lime rounded-circle p-2 
        d-flex flex-column align-items-center justify-content-center"
      >
        <h2>{complete}%</h2>
        <p
          className="position-absolute"
          style={{
            bottom: "40px",
          }}
        >
          Compeleted
        </p>
      </div>
    </div>
  );
};

export default CircularBar;
