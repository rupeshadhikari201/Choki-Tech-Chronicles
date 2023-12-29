import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from "./Components/home/Services.jsx";
import "bootstrap/dist/js/bootstrap.esm.js";
import Signup from "./Pages/Signup.jsx";
import { useEffect, useState } from "react";
const App = () => {
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
      <BrowserRouter>
        <Routes>
          <Route path="Choki-Tech-Chronicles/" element={<Home />} />
          <Route path="Choki-Tech-Chronicles/services" element={<Services />} />
          <Route path="Choki-Tech-Chronicles/product" element={<Services />} />
          <Route path="Choki-Tech-Chronicles/team" element={<Services />} />
          <Route path="Choki-Tech-Chronicles/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
