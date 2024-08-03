import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
const HomeRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <>
      <div className="bg-white-variant-2">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default HomeRoute;
