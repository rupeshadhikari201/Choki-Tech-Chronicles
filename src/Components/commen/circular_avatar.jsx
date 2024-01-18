const CircularAvatar = ({
  size,
  text = "AA",
  img,
  fontSize,
  bgcolor,
  className,
}) => {
  return (
    <div>
      <div
        className={`${
          bgcolor ? bgcolor : "bg-gray"
        } d-flex align-items-center justify-content-center text-md font-weight-400
            icon-wrapper-primary ${className}
            `}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          fontSize: `${fontSize}rem`,
        }}
      >
        {img ? (
          <img alt="img" src="" />
        ) : (
          <span className="text-uppercase">{text}</span>
        )}
      </div>
    </div>
  );
};

export default CircularAvatar;
