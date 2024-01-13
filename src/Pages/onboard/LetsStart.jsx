import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/context/auth";
import "../../Css/onboarding/onboarding.css";
import ProgressIndicator from "./progressIndicator";
import { STATUS } from "../../utils/constants/status";
import { useNavigate } from "react-router-dom";
import { commonPath } from "../../utils/constants/path";
import { FaArrowLeft, FaArrowRight, FaClosedCaptioning } from "react-icons/fa6";
import { skillsList } from "../../utils/constants/skillsList";
import { toast, ToastContainer } from "react-toastify";

const LetsStart = () => {
  const { state } = useContext(AuthContext);
  const [progressState, setProgressState] = useState([
    {
      status: STATUS.PENDING,
      label: "First",
    },
    {
      status: STATUS.DEFAULT,
      label: "About",
    },
    {
      status: STATUS.DEFAULT,
      label: "Finish",
    },
    {
      status: STATUS.DEFAULT,
      label: "why",
    },
    {
      status: STATUS.DEFAULT,
      label: "resume",
    },
  ]);
  const pages = [
    {
      page: (setGotoNext, setUserInfo) => (
        <UserPreference setGotoNext={setGotoNext} setUserInfo={setUserInfo} />
      ),
    },
    {
      page: (setGotoNext, setUserInfo) => (
        <UserProfessionAndSkill
          setGotoNext={setGotoNext}
          setUserInfo={setUserInfo}
        />
      ),
    },
    {
      page: (setGotoNext, setUserInfo) => (
        <UserSomething setGotoNext={setGotoNext} setUserInfo={setUserInfo} />
      ),
    },
  ];
  const navigator = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [gotoNext, setGotoNext] = useState(false);
  useEffect(() => {
    console.log(state);
    console.log(pages[currentPage]);
  }, []);
  const onNextPage = () => {
    if (!gotoNext) {
      toast("please compelet all", {});
      console.log("toast");
    }
    if (gotoNext && currentPage == pages.length - 1) {
      navigator(`${commonPath}/dashboard`);
    } else if (gotoNext && currentPage != pages.length - 1) {
      setCurrentPage((c) => c + 1);
      let progress = progressState;
      progress[currentPage].status = STATUS.CHECKED;
      if (currentPage + 1 < pages.length)
        progress[currentPage + 1].status = STATUS.PENDING;
      setProgressState(progress);
    }
    setGotoNext(false);
  };
  const previousPage = () => {
    setCurrentPage((c) => c - 1);
    let progress = progressState;
    progress[currentPage - 1].status = STATUS.PENDING;
  };
  return (
    <>
      <ToastContainer />
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
        position-relative
        "
        >
          {/* Left svg onboard */}
          <div
            className={`
        onboard_left_img
        position-absolute
        
        `}
          />
          {/* Right svg onboard */}
          <div
            className={`
        onboard_right_img
        position-absolute
       
        `}
          />
          {/*  */}
          <div
            className="
      d-flex flex-column
        align-items-center
        position-relative
        mt-4
      "
          >
            <h1 className="text-black-variant-1">
              Hello,
              <span className="text-green-secondary text-capitalize">
                {state.user?.firstName}
              </span>{" "}
            </h1>
            <h4
              className="text-md
        text-black-variant-2
        "
            >
              let&apos;s know more about you
            </h4>

            <ProgressIndicator
              numberOfProgress={progressState.length}
              progress={progressState}
            />

            {
              <div
                className={`
            w-100
            position-relative
            
            `}
                style={{ zIndex: 20 }}
              >
                {pages[currentPage]?.page(setGotoNext, setUserInfo)}
              </div>
            }
          </div>
          <div
            className={`
        previous-next-btn-wrapper
        
        `}
          >
            {/* previous button */}
            {currentPage > 0 && (
              <button
                className="
          text-black-variant-1
          p-1
          mt-4
          btn-custom-circular
          d-flex
          align-items-center
          justify-content-center
          text-white
          position-relative
          "
                style={{ zIndex: "10" }}
                onClick={previousPage}
              >
                <FaArrowLeft />
              </button>
            )}
            {/* Next Button */}

            <button
              className={`
          text-black-variant-1
          d-block
          p-1
          mt-4
          ms-auto
          btn-custom-circular
          d-flex
          align-items-center
          justify-content-center
          position-relative
          ${gotoNext ? "text-white" : "text-gray"}
          cursor-not-allowed`}
              style={{ zIndex: 10 }}
              onClick={onNextPage}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsStart;

const UserPreference = ({ setGotoNext, setUserInfo }) => {
  const [currentId, setCurrentId] = useState("");
  const userPreference = (e) => {
    setCurrentId(e.currentTarget.id);
    switch (e.currentTarget.id) {
      case "01":
        setUserInfo((info) => {
          return { ...info, userAs: "agent" };
        });
        setGotoNext(true);
        break;
      case "02":
        setUserInfo((info) => {
          return { ...info, userAs: "agent" };
        });
        setGotoNext(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <button
        className={`
         text-black-variant-1
         mt-3
         mb-0
         text-md
         btn-custom-secondary
       ${currentId === "01" ? "bg-green-variant-4" : "transparent"}
         `}
        id="01"
        onClick={userPreference}
      >
        I am here to hire
      </button>
      <button
        className={`
         text-black-variant-1
         mt-3
         mb-4
         text-md
         btn-custom-secondary
         ${currentId === "02" ? "bg-green-variant-4" : "transparent"}
         `}
        id="02"
        onClick={userPreference}
      >
        Work as agent
      </button>
    </>
  );
};

const UserProfessionAndSkill = ({ setGotoNext, setUserInfo }) => {
  const [showSkillList, setShowSkillList] = useState(false);
  const [personalSkills, setPersonalSkills] = useState([]);
  const [skills, setSkills] = useState(skillsList);
  const [profession, setProfession] = useState("");

  useEffect(() => {
    if (personalSkills.length >= 2) {
      setUserInfo((info) => {
        return { ...info, skills: personalSkills };
      });
    }
    // Checking if all requirement are met
    if (profession && personalSkills.length >= 2) setGotoNext(true);
    else setGotoNext(false);
  }, [personalSkills, profession]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value)
      setUserInfo((info) => {
        return { ...info, [name]: value };
      });
    console.log(value);
    setProfession(value);
  };

  return (
    <div className="text-black-variant-1">
      {/* What is your profession */}
      <div
        className="d-flex 
        mt-3
      flex-column 
      align-items-center
      profession
      "
      >
        <p className="text-center">What is your profession?</p>
        <select
          className={`
      p-2
      rounded
      border-green-variant-3
      text-black-variant-1
      bg-white-variant-2
      w-100
      `}
          name="profession"
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Student">Student</option>
          <option value="teacher">teacher</option>
          <option value="other">other</option>
        </select>
      </div>
      {/* skills you have */}
      <div
        className={`d-flex 
        mt-3
      flex-column 
      align-items-center
      
      `}
      >
        What skill do you have?
        <div
          className={`
        mt-3
        border-black-variant-1
        border-green-variant-3
        rounded
        w-100
        p-2
        d-flex
        flex-wrap
        gap-2
        
        `}
          style={{
            maxWidth: "400px",
          }}
        >
          {/*  */}
          {personalSkills &&
            personalSkills.map((skill, index) => (
              <div
                key={index}
                className={`
                border-green-variant-1
                p-1
                bg-green-variant-4
                d-flex
                justify-content-between
                align-items-center
                gap-2
                text-xsm
                `}
                style={{
                  whiteSpace: "nowrap",

                  borderRadius: "20px",
                }}
              >
                {skill}
                <FaClosedCaptioning
                  color="white"
                  onClick={() => {
                    let filtered = personalSkills.filter((sk) => sk != skill);
                    let pos = skillsList.findIndex((sk) => sk.name === skill);
                    skillsList[pos].isSelected = false;
                    setPersonalSkills(filtered);
                  }}
                  className={`cursor-pointer`}
                />
              </div>
            ))}
          {/* Input for skill */}
          <div
            className={`
          position-relative
          border-green-variant-3
            rounded
              p-1
            bg-green-variant-4
          `}
            style={{
              maxWidth: "200px",
            }}
          >
            <div className={`d-flex`}>
              <input
                type="text"
                placeholder="your skills"
                name="skills"
                className={`
            transparent
            w-100
            `}
                onFocus={() => setShowSkillList(true)}
                onChange={(e) => {
                  const { value } = e.target;
                  let filtered;
                  if (value) {
                    filtered = skillsList.filter(
                      (skill) =>
                        !skill.isSelected &&
                        skill.name.toLowerCase().includes(value.toLowerCase())
                    );
                    setSkills(filtered);
                  } else setSkills(skillsList);
                }}
              />
              {showSkillList && (
                <span
                  className={`
            cursor-pointer

            `}
                  onClick={() => setShowSkillList(false)}
                >
                  X
                </span>
              )}
            </div>
            <ul
              className={`
          skills-list
          bg-white
          ${showSkillList ? "active" : ""}
          `}
            >
              {skills.map(
                (skill, index) =>
                  !skill.isSelected && (
                    <li
                      key={index}
                      onClick={() => {
                        setPersonalSkills([...personalSkills, skill.name]);
                        skills[index].isSelected = true;
                        setSkills(skillsList);
                      }}
                    >
                      {skill.name}
                    </li>
                  )
              )}
            </ul>
          </div>
          {/*  */}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

const UserSomething = ({ setGotoNext, setUserInfo }) => {
  return (
    <div className="text-black-variant-1">
      <h2 className="text-center">Thank you for choosing us</h2>
    </div>
  );
};
