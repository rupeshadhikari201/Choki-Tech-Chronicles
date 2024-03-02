import { useContext, useState } from "react";
import { AuthContext } from "../../../utils/context/auth";
import CircularAvatar from "../../../Components/commen/circular_avatar";
import { ArrowRight, ArrowRight2, Edit, Edit2 } from "iconsax-react";
import "../../../Css/profile/profile.css";

const CustomerProfile = () => {
  const { userState } = useContext(AuthContext);
  const [firstName, setFristName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState("");
  const customerSetting = [
    {
      title: "Personal",
      setting: [
        {
          name: "FirstName",
          value: userState?.user?.firstName,
          action: () => {},
        },
        {
          name: "LastName",
          value: userState?.user?.lastName,
          action: () => {},
        },
      ],
    },
    {
      title: "Account",
      setting: [
        {
          name: "Email Address",
          value: userState?.user?.email,
          action: () => {},
        },
        {
          name: "Phone Number",
          value: userState?.user?.phone || "Phone",
          action: () => {},
        },
      ],
    },
  ];

  return (
    <div
      className={`mt-sm-3 mt-2 p-sm-3 px-1 text-black-variant-2 d-flex justify-content-around`}
      style={{ maxWidth: "1000px" }}
    >
      <div
        className={`d-none 
        align-items-center flex-column
        d-md-flex
      `}
      >
        <h2 className={`text-lg order-2 order-sm-1`}>
          Hello,
          <span className={`text-green-secondary text-lg  `}>
            {userState?.user?.firstName}
          </span>
        </h2>
        <CircularAvatar
          size={160}
          img={""}
          text={userState?.user?.firstName?.slice(0, 2)}
          fontSize={5}
          bgcolor="bg-gray-secondary"
        />
      </div>
      <div
        className="ms-1 ms-sm-4 "
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div>
          {/* Account */}
          {customerSetting.map((settings, index) => (
            <div key={index} className={`position-relative mb-2 `}>
              <h4 className={`font-weight-400`}>{settings.title}</h4>
              <div
                className={`d-flex gap-1 position-relative
             flex-column
            flex-wrap
            border-green-variant-3
            rounded overflow-hidden
          `}
              >
                {settings.setting.map((set, index) => (
                  <div key={index} className={`bg-white-variant-4 py-2`}>
                    <div
                      className={`col d-flex  align-items-center `}
                      id={set.name}
                      onClick={(e) => {
                        setActive(set.name);
                        const next = e.currentTarget.nextElementSibling;
                        if (next.style.maxHeight) {
                          next.style.maxHeight = null;
                        } else
                          next.style.maxHeight = next.scrollHeight + 10 + "px";
                      }}
                    >
                      <p className="mb-0 p-2">{set.name}</p>
                      <div
                        className={` p-2 text-md col d-flex justify-content-end align-items-center gap-2
               text-black-variant-2 
               rounded cursor-pointer`}
                      >
                        {set.value}
                        <Edit size={15} />
                      </div>
                    </div>
                    <div className={`setting-dropdown `}>
                      <div
                        className={` d-flex justify-content-between p-2 gap-2`}
                      >
                        <input
                          defaultValue={set.value}
                          className={`custom-input border rounded`}
                          style={{ maxWidth: "300px" }}
                        />
                        <button
                          className={`btn-custom-secondary bg-dark-blue m-0 text-white`}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Devices */}
        <h4 className={`font-weight-400`}>Devices</h4>
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

export default CustomerProfile;
