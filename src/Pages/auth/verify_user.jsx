import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../utils/constants/path";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/auth";
const VerifyUser = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const { userState } = useContext(AuthContext);

  useEffect(() => {
    console.log(userState);
    if (userState.user.email) {
      setEmail(userState.user.email);
      setLoading(true);
      axios
        .post(base_url + "/api/user/verify-user/", {
          email: userState.user.email,
        })
        .then((res) => {
          console.log(res);
          setVerified(true);
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  const sendVerification = (e) => {
    e?.preventDefault();
    if (email.length < 5) toast("Invail email");
    else {
      setLoading(true);
      axios
        .post(base_url + "/api/user/verify-user/", { email })
        .then((res) => {
          console.log(res);
          setVerified(true);
        })
        .catch((error) => {
          console.log(error);
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
        {verified ? (
          <>
            <div
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
              }}
              className="mb-4"
            >
              <img
                src="/assets/verified_user.png"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div style={{ maxWidth: "300px" }} className="mx-auto">
              <h2 className="font-weight-400 text-center">Verify Your Email</h2>
              <p className="text-center">
                please check you mailbox we have sent a verification link to{" "}
                <strong className="text-underline">{email}</strong>
              </p>
              <Link
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
                to={"/signin"}
              >
                Signin
              </Link>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
              }}
              className="mb-4"
            >
              <img
                src="/assets/verify_user.png"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div style={{ maxWidth: "300px" }} className="mx-auto">
              <h2 className="font-weight-400 text-center">Verify Your Email</h2>
              <p className="text-center">
                you are almost there to get started. Please enter you email and
                click verify button
              </p>
            </div>
            <form
              onSubmit={sendVerification}
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
                verify
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyUser;
