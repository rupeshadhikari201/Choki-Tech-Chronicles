import React, { useEffect, useState } from "react";
import "./call_action.css";
import ButtonPrimary from "../button/button";
import { CloseCircle } from "iconsax-react";
const CallAction = ({ imgSrc, link, title, contentArray = [] }) => {
  const [show, setShow] = useState(false);
  const closeCallAction = () => {
    setShow(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setShow((prev) => true);
    }, 2000);
  }, []);
  return (
    <div className={`call_action ${show ? "show" : ""}`}>
      <div className="content shadow pe-sm-2 pe-0">
        <span className="close_btn" onClick={closeCallAction}>
          <CloseCircle />
        </span>
        <div className="d-flex gap-2 flex-sm-row flex-column ">
          {/* image */}
          <div className="img-wrapper col">
            <img src={imgSrc} alt="" />
          </div>
          {/* content */}
          <div className="action-content col pt-4 px-2 d-flex flex-column justify-content-center">
            <h1 className="text-center pb-2">{title}</h1>
            <ul className="d-flex flex-column gap-3">
              {contentArray.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
            <div className="mt-2">
              <ButtonPrimary
                title={"Register"}
                type={"submit"}
                radius={6}
                className={"p-2"}
                onClick={() => {
                  window.open(link, "_blank");
                  setShow(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAction;
