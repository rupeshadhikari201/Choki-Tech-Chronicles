import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import CallAction from "../components/call_to_action/call_action";
const HomeRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <>
      <div className="bg-white-variant-2">
        <CallAction
          title={"GIT Course for All"}
          imgSrc={"/assets/call_action_1.jpg"}
          contentArray={[
            "💻 Master Python & Web Development from Scratch",
            "🎓 Comprehensive Practical Training Program",
            "💡 Build Real-World Projects & Portfolio",
            "⏰ Last Registration Date: January 20, 2024",
            "33% off don't miss out",
          ]}
          link={"https://forms.gle/ZPFr9WtjERJSuUWg8"}
        />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default HomeRoute;
