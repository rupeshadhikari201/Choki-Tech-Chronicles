import "./cards.css";

const ServiceCard = ({
  img,
  title,
  text,
  bgcolor,
  points,
  direction = "row",
  imgPosition = "left",
}) => {
  return (
    <div
      className={` pt-50 pb-50 ${bgcolor} text-black-variant-1 service-card-container`}
    >
      <div className="d-flex align-items-md-center align-items-start gap-4 mx-auto max-w-1200 flex-column flex-md-row px-2">
        {imgPosition === "left" ? (
          <>
            {/* image */}
            <div
              style={{ borderRadius: "20px" }}
              className=" col p-4 bg-light-green"
            >
              <img
                src={img}
                alt=""
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* content */}
            <div className="col d-flex flex-column gap-3 px-md-1 px-4">
              <h1 style={{ maxWidth: "400px" }}>{title}</h1>
              <p className="text-black-variant-2" style={{ maxWidth: "500px" }}>
                {text}
              </p>
              {/* this is icon structure */}
              <div
                className={`d-flex justify-content-between flex-${direction}  gap-4`}
              >
                {points &&
                  points.map((point, index) => (
                    <CardHorizontal
                      key={index}
                      icon={point.icon}
                      text={point.text}
                      title={point.title}
                      style={direction}
                    />
                  ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* content */}
            <div className="col d-flex flex-column gap-3  order-2 order-md-1 px-md-1 px-4">
              <h1 style={{ maxWidth: "400px" }}>{title}</h1>
              <p style={{ maxWidth: "500px" }} className="text-black-variant-2">
                {text}
              </p>
              {/* this is icon structure */}
              <div
                className={`d-flex justify-content-between flex-${direction} gap-4`}
              >
                {points &&
                  points.map((point, index) => (
                    <CardHorizontal
                      key={index}
                      icon={point.icon}
                      text={point.text}
                      title={point.title}
                      style={direction}
                    />
                  ))}
              </div>
            </div>
            {/* image */}
            <div
              style={{ borderRadius: "20px" }}
              className=" col p-4 bg-light-green order-1 order-md-2"
            >
              <img
                src={img}
                alt=""
                style={{ objectFit: "cover" }}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 60vw, 65vw"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

const CardHorizontal = ({ icon, title, text, style = "row" }) => {
  if (style === "row")
    return (
      <div>
        <div className="border p-3 rounded mb-3 bg-green-primary d-inline-block">
          {icon}
        </div>
        <h5>{title}</h5>
        <p style={{ maxWidth: "250px" }}>{text}</p>
      </div>
    );
  else
    return (
      <div className="d-flex gap-4">
        <div
          className="border p-3 rounded-circle mb-3 bg-green-primary d-inline-block d-flex align-item-center justify-conten-center"
          style={{ height: "min-content" }}
        >
          {icon}
        </div>
        <div className="" style={{ maxWidth: "250px" }}>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    );
};
