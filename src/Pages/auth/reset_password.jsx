import axios from "axios";
import { useState } from "react";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import { base_url } from "../../utils/constants/path";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const [email, setEmail] = useState("");
  const sendLink = (e) => {
    e?.preventDefault();
    if (email.length < 5) toast.error("Invalid email");
    else {
      setLoading(true);
      axios
        .post(base_url + "/api/user/password-reset-link/", { email })
        .then((res) => {
          setLinkSent(true);
        })
        .catch((e) => {
          toast.error(e.message);
        })
        .finally(() => {
          setLoading(false);
        });
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
      {" "}
      {loading && (
        <div className="text-black-variant-2 position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
          <ReactLoading type="spin" height={50} width={50} />
        </div>
      )}
      <ToastContainer />
      <div className="text-black-variant-1 bg-white-variant-4 rounded p-3">
        <>
          <div
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
            }}
            className="mb-4"
          >
            {/* <img src="/assets/verify_user.png" height={"100%"} width={"100%"} /> */}
          </div>
          <div style={{ maxWidth: "300px" }} className="mx-auto">
            <h2 className="font-weight-400 text-center">
              Forgot Your Password
            </h2>
            {linkSent ? (
              ""
            ) : (
              <p className="text-center">
                Please enter you email address. You will recieve a resetlink to
                create new password
              </p>
            )}
          </div>
          <div>
            {linkSent ? (
              <p style={{ maxWidth: "300px", textAlign: "center" }}>
                We have sent reset link to <strong>{email} </strong>please check
                you mailbox
              </p>
            ) : (
              <form
                onSubmit={sendLink}
                className="mx-auto mt-4"
                style={{
                  maxWidth: "300px",
                }}
              >
                <input
                  placeholder="email address"
                  className="custom-input border rounded"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="btn-custom 
              font-weight-400
              green-varient-2
              green-varient-2-hover
              height-xsm
              mb-2
              mt-3
              text-md
              text-capitalize
              "
                >
                  Request reset link
                </button>
              </form>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default ResetPassword;
