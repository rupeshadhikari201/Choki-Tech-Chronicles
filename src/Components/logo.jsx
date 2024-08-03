const GITLogo = () => {
  return (
    <div className="logo" style={{ position: "relative" }}>
      <span
        style={{
          height: "60px",
          width: "60px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
        }}
      >
        <img
          src="/assets/logo_1.jpeg"
          alt="logo"
          width={"100%"}
          height={"100%"}
          className="rounded-circle"
        />
      </span>
    </div>
  );
};

export default GITLogo;
