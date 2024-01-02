import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaKey,
} from "react-icons/fa6";
import "../Css/signup/signup.css";
import TextField from "../Components/text_input/textField";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signin = () => {
  const icon_color = "#87A781";
  const [inputData, setInputData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      style={{
        background: "var(--light-green)",
        minHeight: "100vh",
      }}
      className="d-flex 
        align-items-center justify-content-center
        "
    >
      <div
        className="bg-white
        d-flex 
        rounded 
        "
        style={{
          maxWidth: "90%",
        }}
      >
        <div
          className="signup-right-side col p-4 d-none d-md-flex flex-column justify-content-center
          align-items-center"
        >
          <h1>Hello, There!</h1>
          <p
            style={{
              fontWeight: "500",
            }}
          >
            place where you can find solutions related to accademic work
          </p>

          <Link
            className="link
             btn-custom
             height-xsm
             text-md
             bg-transparent
             border
             cursor-pointer
             mt-4
             green-varient-2-hover
             mb-2
            "
            to="/Choki-Tech-Chronicles/signup"
          >
            SIGN UP{" "}
          </Link>
        </div>

        {/* SIGN UP LEFT SIDE */}
        <div
          className="signup-left-side col p-4
          
          "
        >
          <h2
            style={{
              color: "var(--primary-green)",
              textAlign: "center",
              fontWeight: "bolder",
            }}
            className="mb-4"
          >
            {" "}
            SIGN IN
          </h2>
          <div
            className="input-wrapper
            d-flex flex-column gap-3
            "
          >
            <TextField
              type={"email"}
              surfix_icon={""}
              prefix_icon={<FaEnvelope color={icon_color} />}
              placeHolder={"Email"}
              onChange={(e) =>
                setInputData({ ...inputData, [e.target.name]: e.target.value })
              }
              name={"email"}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              surfix_icon={
                showPassword ? (
                  <FaEye
                    color={icon_color}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    color={icon_color}
                  />
                )
              }
              placeHolder={"Password"}
              prefix_icon={<FaKey color={icon_color} />}
              name={"password"}
              onChange={(e) =>
                setInputData({ ...inputData, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button
            style={{
              fontSize: "var(--text-md)",
            }}
            className="btn-custom 
              font-500
              green-varient-2
              green-varient-2-hover
              height-xsm
              mb-2
              mt-3
              text-md
              text-uppercase
              "
          >
            signup
          </button>
          <div
            className="d-flex
            justify-content-center
            "
            style={{
              color: "var(--text-black-variant-1)",
            }}
          >
            Or
          </div>
          <div
            className="btn-custom  dark-green
              dark-green-hover
            height-xsm
            mt-2
            mb-4
           d-flex
           align-items-center
            text-md
             align-items-center
             justify-content-around
            "
          >
            <FaGoogle />
            <p
              className="font-500 mb-1 p-0
              
              "
              style={{
                marginBlockStart: "0px",
              }}
            >
              sign up with Google
            </p>
          </div>
        </div>

        {/* END OF LEFT SIDE */}
      </div>
    </div>
  );
};

export default Signin;
