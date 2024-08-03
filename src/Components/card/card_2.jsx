const CardLeftIcon = ({
  icon,
  title,
  subtitle,
  bgcolor,
  size = 60,
  minWidth = 200,
}) => {
  return (
    <div
      className="d-flex gap-3 text-black-variant-1"
      style={{ minWidth: minWidth }}
    >
      {/* icon */}
      <div
        style={{ height: size, minWidth: size, borderRadius: "50%" }}
        className={`bg-green-primary d-flex align-items-center justify-content-center ${bgcolor}`}
      >
        {icon}
      </div>
      <div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CardLeftIcon;
