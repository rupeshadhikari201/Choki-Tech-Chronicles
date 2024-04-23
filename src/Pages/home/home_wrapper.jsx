import Footer from "../../Components/home/Footer";
import Navbar from "../../Components/navbar/Navbar";

const HomeWrapper = ({ children }) => {
  return (
    <>
      <div className="bg-white-variant-2">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HomeWrapper;
