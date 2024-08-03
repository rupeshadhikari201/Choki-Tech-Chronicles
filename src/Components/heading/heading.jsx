import "./heading.css";

const CustomHeading = ({ title, page }) => {
  return (
    <div className="pt-100 section-about-heading bg-green-v-1">
      <div className="max-w-1200 mx-auto text-white pt-4 px-2">
        <p className="text-border">{page}</p>
        <h1 style={{ maxWidth: "600px" }}>{title}</h1>
      </div>
    </div>
  );
};

export default CustomHeading;
