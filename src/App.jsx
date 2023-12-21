import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Choki-Tech-Chronicles/" element={<Home />} />
          <Route path="Choki-Tech-Chronicles/services" element={<Services />} />
          <Route path="Choki-Tech-Chronicles/product" element={<Services />} />
          <Route path="Choki-Tech-Chronicles/team" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
