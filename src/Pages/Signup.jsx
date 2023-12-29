import { FaEnvelope, FaKey, FaPerson, FaUser } from "react-icons/fa6";
import "../Css/signup/signup.css";
const Signup = () => {
  const icon_color = "#87A781";
  const input_list = [
    {
      placeHolder: "Email",
      icon: <FaEnvelope color={icon_color} />,
      type: "email",
    },
    {
      placeHolder: "Password",
      icon: <FaKey color={icon_color} />,
      type: "password",
    },
    {
      placeHolder: "Confirm Password",
      icon: <FaKey color={icon_color} />,
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
            {input_list.map((item, index) => (
              <div key={index}>
                <div
                  className="d-flex
              align-items-center
              input-form-control
              "
                >
                  {item.icon}
                  <input
                    type={item.type}
                    placeholder={item.placeHolder}
                    className="custom-input"
                  />
                </div>
              </div>
            ))}
            <div
              className="d-flex align-items-center
            gap-2"
            >
              <input type="checkbox" />
              <label>
                {" "}
                i agree <a>term & condition</a>
              </label>
            </div>
          </div>
          <button className="btn-custom btn-signup">signup</button>
          <div
            className="d-flex
          justify-content-center
          "
          ></div>
        </div>

        {/* END OF LEFT SIDE */}
      </div>
    </div>
  );
};

export default Signup;
