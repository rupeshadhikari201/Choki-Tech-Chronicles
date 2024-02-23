import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaKey,
} from "react-icons/fa6";
import "../../Css/auth/auth.css";
import TextField from "../../Components/text_input/textField";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { path_to_signup, validateSignInInput } from "../../utils/auth/helper";
import { AuthContext } from "../../utils/context/auth";
import { base_url, commonPath } from "../../utils/constants/path";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
import { ACTION_TYPE } from "../../reducer/action/action";
import Cookies from "js-cookie";
const Signin = () => {
  const icon_color = "#87A781";
  const [inputData, setInputData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const { userdispatch, userState } = useContext(AuthContext);
  const navigator = useNavigate();
  const onSubmit = () => {
    const valid = validateSignInInput(inputData, {
      setValidEmail,
      setValidPassword,
    });
    console.log(valid);
    if (valid) {
      setLoading(true);
      try {
        const res = axios.post(base_url + "/api/user/login/", {
          email: inputData.email,
          password: inputData.password,
        });
        res
          .then((res) => {
            // console.log(res);
            // console.log(res.data);
            // console.log("token  ", res.data.token.access);
            // console.log("refresh ", res.data.token.refresh);
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
            console.log(e.response.data);
            toast.error("email or password not valid");
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    console.log(userState);
  }, [userState]);
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
      {" "}
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
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Welcome Back to Gokap InnoTech
            <br /> Where Opportunities Await.
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
          <span className="d-block d-md-none mt-1 text-start text-black-variant-1 mb-3">
            create new account? <Link to={path_to_signup}>sign up here</Link>
          </span>
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
              errorMessage={"Invalid Email"}
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
          <span className="d-block mt-1 text-end text-black-variant-1 mb-2">
            forget password? <Link to={`/${commonPath}/reset`}>reset</Link>
          </span>
          <div className="mt-4">
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
              <hr className="col" />
              <span className="px-2">OR</span>
              <hr className="col" />
            </div>
            <div
              className="btn-custom  dark-green cursor-pointer
              font-weight-500
              dark-green-hover
            height-xsm
            mt-2
            mb-4
           d-flex
            text-md
             align-items-center
             justify-content-center
             gap-2
            "
            >
              <FaGoogle />
              <p className="mb-1 p-0 text-capitalize">Sign in with Google</p>
            </div>
          </div>
        </div>

        {/* END OF LEFT SIDE */}
      </div>
    </div>
  );
};

export default Signin;
