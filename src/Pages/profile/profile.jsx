import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth";
import CustomerProfile from "../dashboard/customer/profile";
const Profile = () => {
  const { userState } = useContext(AuthContext);

  return (
    <div>
      <CustomerProfile />
    </div>
  );
};

export default Profile;
