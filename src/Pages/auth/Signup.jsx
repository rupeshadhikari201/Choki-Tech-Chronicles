import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaKey,
  FaUser,
} from "react-icons/fa6";
import "../../Css/auth/auth.css";
import TextField from "../../Components/text_input/textField";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { path_to_signin, validateSignUpInput } from "../../utils/auth/helper";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../utils/context/auth";
import { ACTION_TYPE } from "../../reducer/action/action";
import { commonPath } from "../../utils/constants/path";
const Signup = () => {
  const icon_color = "#87A781";
  const [inputData, setInputData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validConfirm, setValidConfirm] = useState(true);
  const { _, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  //Checking validity
  const onSumbit = () => {
    const valid = validateSignUpInput(inputData, {
      setValidFirstName,
      setValidLastName,
      setValidEmail,
      setValidPassword,
      setValidConfirm,
    });

    if (valid) {
      dispatch({ type: ACTION_TYPE.SIGN_UP, payload: inputData });
      navigate(`/${commonPath}/onboard`);
    }
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
      <ToastContainer />
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
          <h1>Welcome To CIT!</h1>
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
            to={path_to_signin}
          >
            SIGN IN{" "}
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
            SIGN UP
          </h2>
          <div
            className="input-wrapper
          d-flex flex-column gap-3
          "
          >
            {/* First and Last Name */}
            <div className="d-flex gap-2">
              <div
                className="d-flex flex-column
              align-items-start
           
              "
              >
                <div
                  className={`d-flex
              align-items-center
              input-form-control
              ${validFirstName ? "" : "red-border"}
              `}
                >
                  <FaUser color={icon_color} />
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="custom-input"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>

                {!validFirstName && (
                  <span
                    className={`
               
             text-error text-xsm  mb-0`}
                  >
                    Invalid name
                  </span>
                )}
              </div>
              {/* Last Name */}
              <div
                className="d-flex flex-column
              align-items-start
              
              "
              >
                <div
                  className={`d-flex
              align-items-center
              input-form-control
                ${validLastName ? "" : "red-border"}
              `}
                >
                  <FaUser color={icon_color} />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="custom-input"
                    name="lastName"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                {!validLastName && (
                  <span
                    className={`
               
             text-error text-xsm  mb-0`}
                  >
                    Invalid name
                  </span>
                )}
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
              errorMessage={"Invalid Email"}
              isValid={validEmail}
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
              errorMessage={"Invalid Passowrd"}
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
              isValid={validConfirm}
              errorMessage={"Password don't match"}
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
          <span className="d-block d-md-none text-end text-black-variant-1">
            already created <Link to={path_to_signin}>sign in here</Link>{" "}
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
            onClick={() => onSumbit()}
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
         justify-content-center
         gap-2
          text-md
           
          "
          >
            <FaGoogle />
            <p
              className="font-500 mb-1 p-0
              text-sm
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

export default Signup;
