import { useState } from "react";

const DashBoardLeft = ({ setShowNav, showNav }) => {
  const closeWindow = () => {
    setShowNav(!showNav);
  };
  return (
    <div
      className={`${showNav ? "margin-right-300" : ""}
    position-relative
    `}
      style={{
        transition: "all 0.5s linear",
        left: 0,
      }}
    >
      <div
        className={`
      dashboard-left
      position-fixed
      bg-linear-green-variant-1
      text-black-variant-1
      text-center
      h-100
      w-100
  visible
  ${!showNav ? "translate-x" : ""}
  `}
        style={{
          transition: "all 0.5s linear",
          left: 0,
        }}
      >
        navigation
        <button
          className="
      btn-custom
      p-1
      text-md
      border-green-variant-3
      transparent
      "
          onClick={closeWindow}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default DashBoardLeft;
