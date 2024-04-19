import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../utils/context/auth";
import CircularAvatar from "../../../Components/commen/circular_avatar";
import { Edit } from "iconsax-react";
import "../../../Css/profile/profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../../utils/constants/path";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import CircularLoading from "../../../Components/commen/react_loading";
const AgentProfile = () => {
  const navigate = useNavigate();
  const { userState } = useContext(AuthContext);
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Error");
  const [profile, setProfile] = useState({});
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    cnfPassword: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get(base_url + "/api/user/freelancer/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("freelancer data");
        // console.log(res.data.data[0]);
        setProfile(res.data.data[0]);
        //prompt then to enter there detail
        if (res.data.data.length == 0) {
          //show onboarding for freelancer
          navigate("/onboard");
        }
      })
      .catch((e) => {
        toast.error(e.message);
        console.log("error", e);
      });
  }, []);
  const validateUserName = (input) => {
    console.log(input);
    if (input.firstname.length < 3) {
      setError("Invalid First Name mininum character is 3");
      return false;
    }
    if (input.lastname.length < 3) {
      setError("Invalid Last Name minimum character is 3");
      return false;
    }

    return true;
  };
  const changeUserName = () => {
    //validate userinput
    const id = userState?.user.id;
    const data = { firstname: firstName, lastname: lastName };
    const valid = validateUserName(data);
    const token = Cookies.get("token");
    if (!valid) {
      toast.error(error);
      return;
    }
    setLoading(true);
    axios
      .post(base_url + `/api/user/update-user/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Name change success");
      })
      .catch((e) => {
        console.log(e);
        if (e?.response?.data.errors?.code == "token_not_valid")
          toast.error("Refresh page and try again");
        else toast.error("Error" + e.message);
      })
      .finally(() => setLoading(false));
  };
  const customerSetting = [
    {
      title: "Personal",
      setting: [
        {
          name: "Full Name",
          value: `${userState?.user?.firstname} ${userState?.user?.lastname}`,
          action: changeUserName,
          inputs: [
            {
              name: "firstname",
              onchange: (e) => {
                setFristName(e.target.value);
              },
              value: firstName,
            },
            {
              name: "lastname",
              onchange: (e) => {
                setLastName(e.target.value);
              },
              value: lastName,
            },
          ],
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
  const validatePasswordInput = (input) => {
    if (input.currentPassword.length < 6) {
      setError("password minimum must be 6 character");
      return false;
    }
    if (input.newPassword.length < 6) {
      setError("password minimum must be 6 character");
      return false;
    }
    if (input.cnfPassword != input.newPassword) {
      setError("passwords don't match");
      return false;
    }
    setError("");
    return true;
  };
  //Change password
  const changeUserPassword = () => {
    //validateInput
    const valid = validatePasswordInput(passwordData);
    if (!valid) {
      return toast.error(error);
    }
    setLoading(true);
    const token = Cookies.get("token");
    const data = {
      password: passwordData.newPassword,
      cnfpassword: passwordData.cnfPassword,
    };
    axios
      .post(base_url + "/api/user/change-password/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Password Changed");
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          cnfPassword: "",
        });
      })
      .catch((e) => {
        console.log(e?.response?.data.errors.code);
        if (e?.response?.data.errors.code == "token_not_valid")
          toast.error("Refresh page and try again");
        else toast.error("Error" + e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div
      className={`mt-sm-3 mt-2 p-sm-3 px-1 text-black-variant-2 d-flex justify-content-around`}
      style={{ maxWidth: "1000px" }}
    >
      <ToastContainer theme="dark" />
      {loading && <CircularLoading />}
      <div
        className={`d-none 
        align-items-center flex-column
        d-md-flex
        align-items-md-start
      `}
        style={{ maxWidth: 300 }}
      >
        <h2 className={`text-lg order-2 order-sm-1`}>
          Hello,
          <span className={`text-green-secondary text-lg text-capitalize  `}>
            {userState?.user?.firstname}
          </span>
        </h2>

        <p className="order-3">{profile.profession}</p>

        <div className="order-4">
          <h5 className="font-weight-400">Skills</h5>
          {profile.skills?.map((skill, index) => (
            <div
              key={index}
              className="border px-3 py-1 my-3"
              style={{ borderRadius: "30px" }}
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="order-5">
          <h5 className="font-weight-400">Languages</h5>
          {profile.languages?.map((language, index) => (
            <div
              key={index}
              className="border px-3 py-1 my-3"
              style={{ borderRadius: "30px" }}
            >
              {language}
            </div>
          ))}
        </div>

        <CircularAvatar
          size={160}
          img={""}
          text={userState?.user?.firstname?.slice(0, 2)}
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
          <div>
            <h5 className="font-weight-400">Bio</h5>
            <div className="bg-white-variant-4 py-2 px-2">{profile.bio}</div>
          </div>

          {customerSetting.map((settings, index) => (
            <div key={index} className={`position-relative mb-2 `}>
              <h4 className={`font-weight-400`}>{settings.title}</h4>
              <div
                className={`d-flex gap-2 position-relative
             flex-column
            flex-wrap
           overflow-hidden
          `}
              >
                {settings.setting.map((set, index) => (
                  <div
                    key={index}
                    className={`bg-white-variant-4 py-2 border-card rounded`}
                  >
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
                        className={` p-2 text-sm col d-flex justify-content-end align-items-center gap-2
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
                        {set.inputs ? (
                          set.inputs.map((input, i) => (
                            <input
                              key={i}
                              placeholder={input.name}
                              value={input.value}
                              onChange={(e) => {
                                input.onchange(e);
                              }}
                              name={input.name}
                              className={`custom-input border rounded`}
                              style={{ maxWidth: "300px" }}
                            />
                          ))
                        ) : (
                          <input
                            defaultValue={set.value}
                            className={`custom-input border rounded`}
                            style={{ maxWidth: "300px" }}
                          />
                        )}
                        <button
                          onClick={set.action}
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
        {/* Change password */}

        <div className={`bg-white-variant-4 py-2 border-card rounded mb-3`}>
          <div
            className={`col d-flex  align-items-center `}
            id={"s_password"}
            onClick={(e) => {
              setActive("s_passwrod");
              const next = e.currentTarget.nextElementSibling;
              if (next.style.maxHeight) {
                next.style.maxHeight = null;
              } else next.style.maxHeight = next.scrollHeight + 10 + "px";
            }}
          >
            <p className="mb-0 p-2">Password</p>
            <div
              className={` p-2 text-sm col d-flex justify-content-end align-items-center gap-2
               text-black-variant-2 
               rounded cursor-pointer`}
            >
              Change
              <Edit size={15} />
            </div>
          </div>
          <div className={`setting-dropdown `}>
            <div
              className={` d-flex flex-column justify-content-between p-2 gap-2`}
            >
              <input
                placeholder="Current password"
                type="password"
                value={passwordData.currentPassword}
                className={`custom-input border rounded`}
                style={{ maxWidth: "300px" }}
                name="currentPassword"
                onChange={(e) => {
                  setPasswordData({
                    ...passwordData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <input
                placeholder="New password"
                type="password"
                className={`custom-input border rounded`}
                style={{ maxWidth: "300px" }}
                name="newPassword"
                value={passwordData.newPassword}
                onChange={(e) => {
                  setPasswordData({
                    ...passwordData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <input
                placeholder="Confirm password"
                type="password"
                className={`custom-input border rounded`}
                style={{ maxWidth: "300px" }}
                name="cnfPassword"
                value={passwordData.cnfPassword}
                onChange={(e) => {
                  setPasswordData({
                    ...passwordData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <button
                className={`btn-custom-secondary bg-dark-blue m-0 text-white`}
                onClick={changeUserPassword}
              >
                Change
              </button>
            </div>
          </div>
        </div>
        {/* Devices */}
        <h4 className={`font-weight-400`}>Devices</h4>
        <div className={`bg-white-variant-4 py-2 border-card rounded p-2`}>
          <p>If you have signed in form multipled diveces</p>
          <button
            className={`btn-custom-secondary text-black-variant-1 ms-1
            bg-dark-blue text-white
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

export default AgentProfile;
