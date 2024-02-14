import CircularCheck from "../../Components/commen/circularCheck";
import "../../Css/commen/circular-check.css";
const ProgressIndicator = ({ numberOfProgress, progress }) => {
  return (
    <>
      <div className="d-flex gap-1 gap-md-3 align-items-center">
        {progress.map((item, index) => (
          <div key={index} className="d-flex gap-1 gap-md-3 align-items-center">
            <CircularCheck
              key={item.label}
              status={item.status}
              label={item.label}
              checkColor={"white"}
            />

            {index !== numberOfProgress - 1 && (
              <span className="bg-green-primary dash-line" key={index} />
            )}
          </div>
        ))}
      </div>
    </>
  );
  //   return (
  //     <div className="d-flex gap-1 gap-md-3 align-items-center">
  //       <CircularCheck
  //         status={STATUS.PENDING}
  //         label={"First step"}
  //         checkColor={"white"}
  //       />
  //       <span className="bg-green-primary dash-line" />
  //       <CircularCheck
  //         status={STATUS.DEFAULT}
  //         label={"About"}
  //         checkColor={"white"}
  //       />
  //       <span className="bg-green-primary dash-line" />
  //       <CircularCheck
  //         status={STATUS.DEFAULT}
  //         label={"finish"}
  //         checkColor={"white"}
  //       />
  //     </div>
  //   );
};

export default ProgressIndicator;
