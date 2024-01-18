import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth";
import CircularAvatar from "../../Components/commen/circular_avatar";
const Profile = () => {
  const { userState } = useContext(AuthContext);

  return (
    <div className={`mt-sm-3 mt-2 p-3 mx-auto`} style={{ maxWidth: "800px" }}>
      <div
        className={`d-flex justify-content-around 
        align-items-center flex-sm-row flex-column
      `}
        style={{ maxWidth: "800px" }}
      >
        <h2 className={`text-xlg order-2 order-sm-1`}>
          Hello,
          <br />
          <span className={`text-green-secondary text-xxlg  `}>
            {userState?.user?.firstName}
          </span>
        </h2>
        <CircularAvatar
          size={160}
          img={""}
          text={userState?.user?.firstName.slice(0, 2)}
          fontSize={5}
          bgcolor="bg-gray-secondary"
        />
      </div>
      <div className="ms-1 ms-sm-4" style={{ maxWidth: "800px" }}>
        <p className={`text-lg`}>Account</p>
        {/* Account */}
        <div
          className={`d-flex flex-column p-2
        border-green-variant-3
        rounded mb-1`}
        >
          <div
            className={`d-flex gap-1
            flex-md-row flex-column
            flex-wrap
          `}
          >
            <div className={`col`}>
              <p>Name</p>
              <p
                className={`border-green-variant-3 p-2 text-md
                text-black-variant-2 
                border-green-variant-3
                rounded`}
                style={{
                  maxWidth: "300px",
                }}
              >
                {userState?.user?.firstName} {userState?.user?.lastName}
              </p>
            </div>
            <div className={`col`}>
              <p>Email</p>
              <p
                className={`p-2  rounded
                border-green-variant-3
                text-md text-black-variant-2
                `}
                style={{
                  maxWidth: "300px",
                }}
              >
                {userState?.user?.email}
              </p>
            </div>
          </div>
          <button
            className={`btn-custom-secondary bg-light-lime-secondary 
            text-black-variant-1 text-md mt-1 `}
          >
            Edit
          </button>
        </div>
        {/*Edit Pass  */}
        <p className={`text-md`}>Password</p>
        <div className={"border-green-variant-3 p-2 rounded mb-1"}>
          <p>Change your password</p>
          <button
            className={`btn-custom-secondary ms-1 mt-1 bg-light-lime-secondary text-black-variant-1`}
          >
            change Passsword
          </button>
        </div>
        {/* Devices */}
        <p className={`text-md`}>Devices</p>
        <div className={`border-green-variant-3 rounded p-2`}>
          <p>If you have signed in form multipled diveces</p>
          <button
            className={`btn-custom-secondary text-black-variant-1 ms-1
             bg-light-lime-secondary
             mt-1
             `}
          >
            Logout from all devices
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
