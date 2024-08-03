import ReactLoading from "react-loading";
const CircularLoading = () => {
  return (
    <div
      className="text-black-variant-2 position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        zIndex: 50,
        left: "0",
        top: "0",
        minHeight: "50vh",
      }}
    >
      <ReactLoading type="spin" height={50} width={50} color="green" />
    </div>
  );
};

export default CircularLoading;
