import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaKey,
  FaUser,
} from "react-icons/fa6";
import "../Css/signup/signup.css";
import TextField from "../Components/text_input/textField";
import { useState } from "react";
const Signup = () => {
  const icon_color = "#87A781";
  const [inputData, setInputData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const input_list = [
    {
      placeHolder: "Email",
      icon: <FaEnvelope color={icon_color} />,
      type: "email",
    },
    {
      placeHolder: "Password",
      icon: <FaKey color={icon_color} />,
      surfix_icon: <FaEye color={icon_color} />,
      type: "password",
    },
    {
      placeHolder: "Confirm Password",
      icon: <FaKey color={icon_color} />,
      surfix_icon: <FaEye color={icon_color} />,
      type: "password",
    },
  ];
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
      
      "
        style={{
          maxWidth: "90%",
        }}
      >
        <div className="signup-right-side col p-4 d-none d-md-block">
          <h1>Welcome To CIT!</h1>
          <p>place where you can find solutions related to accademic work</p>
        </div>

        {/* SIGN UP LEFT SIDE */}
        <div
          className="signup-left-side col p-4
        
        "
        >
          <h1
            style={{
              color: "var(--primary-green)",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            {" "}
            SIGN UP
          </h1>
          <div
            className="input-wrapper
          d-flex flex-column gap-3
          "
          >
            {/* First and Last Name */}
            <div className="d-flex gap-2">
              <div
                className="d-flex
              align-items-center
              input-form-control
              "
              >
                <FaUser color={icon_color} />
                <input
                  type="text"
                  placeholder="First Name"
                  className="custom-input"
                />
              </div>
              <div
                className="d-flex
              align-items-center
              input-form-control
              "
              >
                <FaUser color={icon_color} />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="custom-input"
                />
              </div>
            </div>
            {/* End of first and last name */}
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
            <TextField
              type={showConfirm ? "text" : "password"}
              surfix_icon={
                showConfirm ? (
                  <FaEye
                    color={icon_color}
                    onClick={() => setShowConfirm(!showConfirm)}
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowConfirm(!showConfirm)}
                    color={icon_color}
                  />
                )
              }
              placeHolder={"Confirm Password"}
              prefix_icon={<FaKey color={icon_color} />}
              name={"confirmPassword"}
              onChange={(e) =>
                setInputData({ ...inputData, [e.target.name]: e.target.value })
              }
            />
            <div
              className="d-flex align-items-center
            gap-2"
            >
              <input type="checkbox" />
              <label
                style={{
                  color: "var(--text-black-variant-1)",
                }}
              >
                {" "}
                i agree <a>term & condition</a>
              </label>
            </div>
          </div>
          <button
            style={{
              fontSize: "var(--text-md)",
            }}
            className="btn-custom btn-signup
            green-varient-2
            green-varient-2-hover
            height-xsm
            mb-2
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
            className="btn-custom btn-signup dark-green
            dark-green-hover
          height-xsm
          cursor-na
          mt-2
          "
          >
            <FaGoogle />
            <p
              style={{
                fontSize: "var(--text-md)",
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

export default Signup;
