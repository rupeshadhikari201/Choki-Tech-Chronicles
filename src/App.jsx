import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/main/Home.jsx";
import Services from "./features/main/components/services/Services.jsx";
import "bootstrap/dist/js/bootstrap.esm.js";
import { createContext, useContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./features/blog/blog.jsx";
import HomeRoute from "./routes/home_route.jsx";
import AboutUs from "./features/about/about.jsx";
import ContactUs from "./features/contact/contact.jsx";
import Products from "./features/products/product.jsx";
export const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);
const App = () => {
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
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeRoute />}>
              <Route path={`/`} element={<Home />} />
              <Route path={`services`} element={<Services />} />
              <Route path={`about-us`} element={<AboutUs />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="products" element={<Products />} />
            </Route>
            <Route path="/blogs" element={<HomeRoute />}>
              <Route path="" element={<Blogs />} />
              <Route path=":id" element={<Blogs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
