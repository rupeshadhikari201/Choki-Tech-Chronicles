import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth";
import CustomerProfile from "../dashboard/customer/profile";
import AgentProfile from "../dashboard/agent/profile";
const Profile = () => {
  const { userState } = useContext(AuthContext);
  if (userState.user.user_type == "client")
    return (
      <div>
        <CustomerProfile />
      </div>
    );
  else
    return (
      <div>
        <AgentProfile />
      </div>
    );
};

export default Profile;
