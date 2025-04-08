const ButtonPrimary = ({ type, onClick, title, radius, className }) => {
  return (
    <button
      className={`
        btn-custom 
            green-varient-2
            green-varient-2-hover
            height-xsm
            mb-2
            mt-3
            text-capitalize
            ${className}
            `}
      style={{ maxWidth: "100%", borderRadius: `${radius}px` }}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
export const ButtonFlex = ({
  type,
  onClick,
  radius,
  children,
  maxWidth,
  className,
  outline,
}) => {
  return (
    <button
      className={`${outline ? "btn-custom-outline" : "btn-custom"}
            green-varient-2
            green-varient-2-hover
            height-xsm
            mb-2
            mt-3
            text-capitalize
            d-flex gap-2
            justify-content-center ${className}
            `}
      style={{
        maxWidth: maxWidth ? maxWidth : "100%",
        borderRadius: `${radius}px`,
      }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
