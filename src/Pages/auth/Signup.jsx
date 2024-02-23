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
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../utils/context/auth";
import { ACTION_TYPE } from "../../reducer/action/action";
import { base_url, commonPath } from "../../utils/constants/path";
import ReactLoading from "react-loading";
import axios from "axios";
import Cookies from "js-cookie";
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
  const [loading, setLoading] = useState(false);
  const { userdispatch } = useContext(AuthContext);
  const navigator = useNavigate();
  //Checking validity
  const onSumbit = async () => {
    const valid = validateSignUpInput(inputData, {
      setValidFirstName,
      setValidLastName,
      setValidEmail,
      setValidPassword,
      setValidConfirm,
    });

    if (valid) {
      // userdispatch({ type: ACTION_TYPE.SIGN_UP, payload: inputData });
      setLoading(true);
      const res = signUpUser(inputData, {});
      res
        .then((res) => {
          userdispatch({
            type: ACTION_TYPE.SAVE_TO_LOCALE,
            payload: { email: inputData.email },
          });
          userdispatch({
            type: ACTION_TYPE.SAVE_REFRESH,
            payload: res.data.token.refresh,
          });
          userdispatch({
            type: ACTION_TYPE.SAVE_TOKEN,
            payload: res.data.token.access,
          });
          // saving token to cookies
          Cookies.set("token", res.data.token.access, { expires: 1 });
          navigator(`/${commonPath}/dashboard`);
        })
        .catch((e) => {
          console.log(e?.response?.data);
          console.log(e);
          toast.error(`${e.message}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  async function signUpUser(payload, state) {
    const newState = {
      ...state,
      user: {
        auth: true,
        firstName: payload.firstName,
        email: payload.email,
      },
    };
    return signup(payload);

    // localStorage.setItem("user", JSON.stringify(newState.user));
    // return newState;
  }
  async function signup(user) {
    const response = axios.post(base_url + "/api/user/register/", {
      firstname: user?.firstName,
      lastname: user?.lastName,
      email: user?.email,
      password: user?.password,
      cnfpassword: user?.password,
    });
    return response;
  }

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
      {loading && (
        <div className="text-black-variant-2 position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
          <ReactLoading type="spin" height={50} width={50} />
        </div>
      )}
      <ToastContainer />
      <div
        className="bg-white-variant-2
      d-flex 
      rounded
      auth-page-wrapper 
      sign-wrapper
      "
        style={{
          maxWidth: "90%",
        }}
      >
        <div
          className="signup-right-side col p-4 d-none d-md-flex flex-column justify-content-center
        align-items-center text-sm"
        >
          <h1 className="text-center">Welcome To Gokap Ino Tech!</h1>
          <p
            style={{
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Join Gokap InnoTech Where Clients and Freelancers Connect for
            Innovation. Sign up today, Let's collaborate, innovate, and
            transform together!
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
            text-md
            text-capitalize
            "
            onClick={() => onSumbit()}
          >
            sign up
          </button>
          <div
            className="d-flex
          justify-content-center
          px-4
          "
            style={{
              color: "var(--text-black-variant-1)",
            }}
          >
            <hr className="col" />
            <span className="px-2">OR</span>
            <hr className="col" />
          </div>
          <div
            className="btn-custom cursor-pointer dark-green
            dark-green-hover
          height-xsm
          mt-2
          mb-4
         d-flex
         align-items-center
         justify-content-center
         gap-2
          text-md
          font-weight-500
          "
          >
            <FaGoogle />
            <p className="mb-1 p-0 text-capitalize">sign up with Google</p>
          </div>
        </div>

        {/* END OF LEFT SIDE */}
      </div>
    </div>
  );
};

export default Signup;
