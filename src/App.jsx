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
import DashBoard from "./Pages/dashboard/dashboard.jsx";
import SideNavContextProvider from "./utils/context/sidenav.jsx";
import ProjectStatus from "./Pages/dashboard/customer/project_status.jsx";
import Invoice from "./Pages/dashboard/customer/invoice.jsx";
import ProjectContextProvider from "./utils/context/project.jsx";
import Support from "./Pages/help/support.jsx";

export const ThemeContext = createContext();
const App = () => {
  const commonPath = "Choki-Tech-Chronicles";
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      console.log("is dark mode! true");
    } else {
      setIsDark(false);
      console.log("is dark mode false");
    }
  }, []);
  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
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
                  <Route element={<ProtectedRoutes />}>
                    <Route
                      path={`${commonPath}/onboard`}
                      element={<LetsStart />}
                    />
                  </Route>
                  <Route path={`${commonPath}/new`} element={<DashBoard />} />
                  <Route element={<DashBoardRoute />}>
                    <Route
                      path={`${commonPath}/dashboard`}
                      element={<CustomerDashBoard />}
                    />
                    <Route
                      path={`${commonPath}/profile`}
                      element={<Profile />}
                    />
                    <Route
                      path={`${commonPath}/projects/status/:id`}
                      element={<ProjectStatus />}
                    />
                    <Route
                      path={`${commonPath}/invoice`}
                      element={<Invoice />}
                    />
                    <Route
                      path={`${commonPath}/projects`}
                      element={<Projects />}
                    />
                    <Route
                      path={`${commonPath}/support`}
                      element={<Support />}
                    />
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
