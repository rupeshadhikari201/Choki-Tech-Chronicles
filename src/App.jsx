import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import Services from "./Components/home/Services.jsx";
import "bootstrap/dist/js/bootstrap.esm.js";
import Signup from "./Pages/auth/Signup.jsx";
import { createContext, useEffect, useState } from "react";
import Signin from "./Pages/auth/Signin.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LetsStart from "./Pages/onboard/LetsStart.jsx";
import AuthContextProvider from "./utils/context/auth.jsx";
import ProtectedRoutes from "./utils/routes/protectedRoutes.jsx";
import DashBoardRoute from "./utils/routes/dashboard_route.jsx";
import CustomerDashBoard from "./Pages/dashboard/customer/customer.jsx";
import Profile from "./Pages/profile/profile.jsx";
import Projects from "./Pages/projects/projects.jsx";
import SideNavContextProvider from "./utils/context/sidenav.jsx";
import ProjectStatus from "./Pages/dashboard/customer/project_status.jsx";
import Invoice from "./Pages/dashboard/customer/invoice.jsx";
import ProjectContextProvider from "./utils/context/project.jsx";
import Support from "./Pages/help/support.jsx";
import { commonPath } from "./utils/constants/path.js";
import VerifyUser from "./Pages/auth/verify_user.jsx";
import AgentDashBoard from "./Pages/dashboard/agent/agent.jsx";
import ResetPassword from "./Pages/auth/reset_password.jsx";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import CheckProject from "./Pages/dashboard/agent/project_description.jsx";
export const ThemeContext = createContext();
const App = () => {
  TimeAgo.addDefaultLocale(en);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  return (
    <div
      className={isDark ? "dark-theme" : "light-theme"}
      style={{ overflowX: "hidden" }}
    >
      <AuthContextProvider>
        <SideNavContextProvider>
          <ThemeContext.Provider value={{ isDark }}>
            <ProjectContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route path={`${commonPath}/`} element={<Home />} />
                  <Route
                    path={`${commonPath}/services`}
                    element={<Services />}
                  />
                  <Route path={`${commonPath}/team`} element={<Services />} />
                  <Route path={`${commonPath}/signup`} element={<Signup />} />
                  <Route path={`${commonPath}/signin`} element={<Signin />} />
                  <Route
                    path={`${commonPath}/verify-user`}
                    element={<VerifyUser />}
                  />
                  <Route element={<ProtectedRoutes />}>
                    <Route
                      path={`${commonPath}/onboard`}
                      element={<LetsStart />}
                    />
                  </Route>
                  <Route path={`/reset-password`} element={<ResetPassword />} />
                  {/* client dash board */}
                  <Route
                    path={"/client/dashboard"}
                    element={<DashBoardRoute />}
                  >
                    <Route path={``} element={<CustomerDashBoard />} />
                    <Route path={`profile`} element={<Profile />} />
                    <Route
                      path={`projects/status/:id`}
                      element={<ProjectStatus />}
                    />
                    <Route path={`invoice`} element={<Invoice />} />
                    <Route path={`projects`} element={<Projects />} />
                    <Route path={`support`} element={<Support />} />
                  </Route>
                  {/* Freelancer dashboared */}
                  <Route path={`/agent/dashboard`} element={<DashBoardRoute />}>
                    <Route path={``} element={<AgentDashBoard />} />
                    <Route path={`profile`} element={<Profile />} />
                    <Route
                      path={`projects/check/:id`}
                      element={<CheckProject />}
                    />

                    <Route path={`invoice`} element={<Invoice />} />
                    <Route path={`projects`} element={<Projects />} />
                    <Route path={`support`} element={<Support />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </ProjectContextProvider>
          </ThemeContext.Provider>
        </SideNavContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
