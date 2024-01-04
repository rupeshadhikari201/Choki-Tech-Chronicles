import { useContext, useEffect } from "react";
import { AuthContext } from "../../utils/context/auth";
import "../../Css/onboarding/onboarding.css";
const LetsStart = () => {
  const { state } = useContext(AuthContext);
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div
      className="bg-light-green
  min-height-100vh 
  d-flex align-items-center 
  justify-content-center
  "
    >
      <div
        className="
        wrapper
        bg-white-variant-2
        p-4
        rounded
        d-flex flex-column
        align-items-center
        "
      >
        <h1 className="text-black-variant-1">Hello, {state.user?.firstName}</h1>
        <h4
          className="text-md
        text-black-variant-2
        "
        >
          let&apos;s know more about you
        </h4>
        <button
          className="
         btn-custom
         transparent
         text-black-variant-1
         border-primary-green
         mt-3
         mb-0
         text-md
         "
        >
          I am here to hire
        </button>
        <button
          className="
         btn-custom
         transparent
         text-black-variant-1
         border-primary-green
         mt-3
         mb-4
         text-md
         "
        >
          Work as agent
        </button>
      </div>
    </div>
  );
};

export default LetsStart;
