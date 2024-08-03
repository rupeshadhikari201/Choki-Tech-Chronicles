import { motion, useInView } from "framer-motion";
import { Message, People, TickCircle, UserTag } from "iconsax-react";

export const Feature1 = ({
  colabFeatureRef,
  variantFeature,
  colabFeatureInView,
}) => {
  return (
    <div className="pb-100 pt-100 bg-service-card">
      <motion.div
        ref={colabFeatureRef}
        variants={variantFeature}
        initial="hidden"
        animate={colabFeatureInView ? "show" : ""}
        className="max-width mx-auto d-flex align-items-center gap-4 flex-column flex-md-row px-4 px-md-2"
      >
        <motion.div variants={variantFeature} className="col-12 col-md-6">
          <motion.div variants={variantFeature} style={{ maxWidth: "500px" }}>
            <h1 className="font-weight-500" style={{}}>
              Collaboration for{" "}
              <span style={{ color: "green" }}>large Team</span>
            </h1>
            <p className="text-black-variant-3">
              Our collaboration platform provides secure access control,
              real-time communication, and efficient task management, enhancing
              productivity and teamwork for large teams.
            </p>
          </motion.div>
          <motion.div variants={variantFeature}>
            <motion.div
              variants={variantFeature}
              className="mb-3 d-flex gap-2 p-4 align-items-center rounded feature-list-wrapper"
            >
              <People />{" "}
              <p className="mb-0">Perfect for individual and larget Teams</p>
            </motion.div>
            <motion.div
              variants={variantFeature}
              className="mb-3 d-flex gap-2 p-4 align-items-center rounded feature-list-wrapper"
            >
              <Message /> <p className="mb-0">Easy to Use Communication</p>
            </motion.div>
            <motion.div
              variants={variantFeature}
              className="mb-3 d-flex gap-2 p-4  align-items-center rounded feature-list-wrapper"
            >
              <UserTag /> <p className="mb-0">Rapid Support</p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={variantFeature}
          className="col img-wrapper-f border p-4"
        >
          <img
            src="assets/dash-board.png"
            className="w-100"
            style={{
              objectFit: "contain",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Feature2 = ({ variantFeature }) => {
  return (
    <div className="pt-100 pb-100">
      <div className="max-width mx-auto">
        <div className="d-flex align-items-center gap-4 flex-column flex-md-row px-4 px-md-2">
          <div className="col order-2 order-md-0 img-wrapper-f p-4">
            <img
              src="assets/dash-board-2.png"
              // className="w-100"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 60vw, 65vw"
            />
          </div>
          <motion.div variants={variantFeature} className="col">
            <motion.div
              variants={variantFeature}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1 className="font-weight-500" style={{}}>
                Detail <span style={{ color: "green" }}>analytics</span>
              </h1>
              <p className="text-black-variant-3">
                Our analytics dashboard delivers customizable visual insights,
                real-time data tracking, and actionable metrics, empowering
                informed decision-making and continuous improvement.
              </p>
            </motion.div>
            <motion.div
              variants={variantFeature}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-1 d-flex gap-2 p-4 py-3 align-items-center border-0 rounded feature-list-wrapper">
                <TickCircle />{" "}
                <p className="mb-0">
                  Customizable visual insights for informed decision-making.
                </p>
              </div>
              <div className="mb-1 d-flex gap-2 p-4 py-3 align-items-center border-0 rounded feature-list-wrapper">
                <TickCircle />{" "}
                <p className="mb-0">
                  Real-time data tracking for timely responses.
                </p>
              </div>
              <div className="mb-3 d-flex gap-2 p-4 py-3 align-items-center border-0 rounded feature-list-wrapper">
                <TickCircle />{" "}
                <p className="mb-0">
                  Actionable metrics drive continuous improvement.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
