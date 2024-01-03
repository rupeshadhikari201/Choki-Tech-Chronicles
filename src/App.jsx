import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import Services from "./Components/home/Services.jsx";
import "bootstrap/dist/js/bootstrap.esm.js";
import Signup from "./Pages/auth/Signup.jsx";
import { useEffect, useState } from "react";
import Signin from "./Pages/auth/Signin.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LetsStart from "./Pages/onboard/LetsStart.jsx";
import AuthContextProvider from "./utils/context/auth.jsx";
import ProtectedRoutes from "./utils/routes/protectedRoutes.jsx";
const App = () => {
  const commonPath = "Choki-Tech-Chronicles";
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(false);
      console.log("is dark mode! true");
    } else {
      setIsDark(false);
      console.log("is dark mode false");
    }
  }, []);
  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={`${commonPath}/`} element={<Home />} />
            <Route path={`${commonPath}/services`} element={<Services />} />
            <Route path={`${commonPath}/team`} element={<Services />} />
            <Route path={`${commonPath}/signup`} element={<Signup />} />
            <Route path={`${commonPath}/signin`} element={<Signin />} />
            <Route element={<ProtectedRoutes />}>
              <Route path={`${commonPath}/onboard`} element={<LetsStart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
};

export default App;
