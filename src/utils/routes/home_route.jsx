import HomeWrapper from "../../Pages/home/home_wrapper";
import { Outlet } from "react-router-dom";

const HomeRoute = () => {
  return (
    <>
      <HomeWrapper>
        <Outlet />
      </HomeWrapper>
    </>
  );
};

export default HomeRoute;
