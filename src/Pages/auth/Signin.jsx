import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaKey,
} from "react-icons/fa6";
import "../../Css/auth/auth.css";
import TextField from "../../Components/text_input/textField";
import { useState } from "react";
import { Link } from "react-router-dom";
import { path_to_signup, validateSignInInput } from "../../utils/auth/helper";
const Signin = () => {
  const icon_color = "#87A781";
  const [inputData, setInputData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const onSubmit = () => {
    validateSignInInput(inputData, {
      setValidEmail,
      setValidPassword,
    });
  };

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
        sign-wrapper
        "
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
            to={path_to_signup}
          >
            SIGN UP{" "}
          </Link>
        </div>

        {/* SIGN IN LEFT SIDE */}
        <div
          className="signin-left-side col p-4
          
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
              isValid={validEmail}
              errorMessage={"Inavalid Email"}
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
              isValid={validPassword}
              errorMessage={"incorrect password"}
            />
          </div>
          <span className="d-block d-md-none mt-1 text-end text-black-variant-1">
            create new account?<Link to={path_to_signup}>sign up here</Link>
          </span>
          <button
            className="btn-custom 
              font-500
              green-varient-2
              green-varient-2-hover
              height-xsm
              mb-2
              mt-3
              text-sm
              text-uppercase
              "
            onClick={onSubmit}
          >
            sign in
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
            text-sm
             align-items-center
             justify-content-center
             gap-2
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
