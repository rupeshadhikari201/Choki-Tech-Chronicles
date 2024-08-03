import "./home.css";
import "../../components/button/button.css";
import Navbar from "../../layout/navbar/Navbar.jsx";
import Services from "./components/services/Services.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import HeroSection from "./components/hero_page.jsx";

const Home = () => {
  return (
    <>
      <section className="home pt-50">
        <Navbar />
        <div className="color-box-1"></div>
        <div className="color-box-2"></div>
        <HeroSection />
      </section>
      <Services />
      {/*  
      <FrequentAsked />
      */}
      <Testimonial />
      {/* <OurTeam /> */}
    </>
  );
};

export default Home;
