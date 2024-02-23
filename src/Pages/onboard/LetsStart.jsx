import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/context/auth";
import "../../Css/onboarding/onboarding.css";
import ProgressIndicator from "./progressIndicator";
import { STATUS } from "../../utils/constants/status";
import { useNavigate } from "react-router-dom";
import { commonPath } from "../../utils/constants/path";
import {
  FaArrowLeft,
  FaArrowRight,
  FaClosedCaptioning,
  FaFile,
} from "react-icons/fa6";
import { skillsList } from "../../utils/constants/skillsList";
import { toast, ToastContainer } from "react-toastify";
import { Languages } from "../../utils/constants/languageList";
import { CloseCircle } from "iconsax-react";

const LetsStart = () => {
  const { userState } = useContext(AuthContext);
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
      label: "Why",
    },
    {
      status: STATUS.DEFAULT,
      label: "Resume",
    },
    {
      status: STATUS.DEFAULT,
      label: "Finish",
    },
  ]);
  const headerSubtitles = [
    "let's know more about you",
    "Your skill and profession",
    "Your legacy",
    "Your resume help us to know more",
    "Starting your new journey",
  ];
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
        <WhyAndWhere setGotoNext={setGotoNext} setUserInfo={setUserInfo} />
      ),
    },
    {
      page: (setGotoNext, setUserInfo) => (
        <ResumeAndLanguage
          setGotoNext={setGotoNext}
          setUserInfo={setUserInfo}
        />
      ),
    },
    {
      page: (setGotoNext, setUserInfo) => (
        <UserSummary setGotoNext={setGotoNext} setUserInfo={setUserInfo} />
      ),
    },
  ];
  const navigator = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [gotoNext, setGotoNext] = useState(false);
  useEffect(() => {
    console.log(userState);
    console.log(pages[currentPage]);
  }, []);
  const onNextPage = () => {
    console.log("user info ==> ", userInfo);
    if (!gotoNext) {
      toast("please compelet all", {});
    }
    if (gotoNext && currentPage == pages.length - 1) {
      navigator(`/${commonPath}/dashboard`);
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
              <span className={`font-weight-300`}>Hello,</span>
              <span className="text-green-secondary text-capitalize">
                {userState.user?.firstName}
              </span>{" "}
            </h1>
            <h4
              className="text-md
        text-black-variant-2
        font-weight-400
        "
            >
              {headerSubtitles[currentPage]}
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
         mt-5
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
  const professionList = [
    "Designer",
    "Engineer",
    "Educator",
    "Student",
    "Product Manager",
    "Sales",
    "Other",
  ];
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
    <div className="text-black-variant-1 ">
      {/* What is your profession */}
      <div
        className="d-flex 
        mt-3
      flex-column 
      align-items-center
      max-width-400-center
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
          {professionList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
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
        <span className="text-xsm">(at least 2 skill is required)</span>
        <div
          className={`
        mt-3
        border-black-variant-1
        border-green-variant-3
        rounded
        w-100
        p-2
        d-flex flex-column
        gap-2
        `}
          style={{
            maxWidth: "400px",
            Height: "200px",
          }}
        >
          {/*Skills list view  */}
          <div
            className={"d-flex skill-wrapper gap-2 pb-2"}
            style={{
              maxWidth: "400px",
              overflowX: "scroll",
            }}
            id="skill-wrapper"
          >
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
                text-sm
                `}
                  style={{
                    whiteSpace: "nowrap",
                    borderRadius: "20px",
                  }}
                >
                  {skill}
                  <CloseCircle
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
          </div>
          {/* Input for skill */}
          <div
            className={`
          position-relative
          border-green-variant-3
            rounded
              p-1
          `}
            style={{
              maxWidth: "200px",
              zIndex: "100",
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
                  <CloseCircle />
                </span>
              )}
            </div>
            <ul
              className={`
          skills-list
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
                        const skillWrapper =
                          document.getElementById("skill-wrapper");
                        skillWrapper.scrollLeft = skillWrapper.scrollWidth;
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

const WhyAndWhere = ({ setGotoNext, setUserInfo }) => {
  const [whyFreelance, setWhyFreelance] = useState("");
  const [hearedAboutUs, setHeardAboutUs] = useState("");
  useEffect(() => {
    if (whyFreelance && whyFreelance.length > 3 && hearedAboutUs)
      setGotoNext(true);
    else setGotoNext(false);
  }, [whyFreelance, hearedAboutUs]);

  return (
    <div className="text-black-variant-1">
      <div>
        <div
          className={`
       
        mt-3
      flex-column 
      max-width-400-center
     
        `}
        >
          <p className={`text-center`}>Why do you want start freelancing</p>
          <input
            placeholder="why"
            className={`
      w-100
      p-2
      rounded
      border-green-variant-3
      transparent
      text-black-variant-2
          `}
            onChange={(e) => setWhyFreelance(e.target.value)}
          />
        </div>
        <div
          className="d-flex 
        mt-3
      flex-column 
      align-items-center
      max-width-400-center
      "
        >
          <p className="text-center">Where did you heard about us?</p>
          <select
            className={`
      p-2
      rounded
      border-green-variant-3
      text-black-variant-1
      bg-white-variant-2
      w-100
      `}
            name="where"
            onChange={(e) => setHeardAboutUs(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Instagram">Instagram</option>
            <option value="Youtube">Youtube</option>
            <option value="Friends">Friends</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const ResumeAndLanguage = ({ setGotoNext, setUserInfo }) => {
  const [resume, setResume] = useState("");
  const [userLanguage, setUserLanguage] = useState([
    {
      language: "English",
      level: "good",
    },
  ]);
  const [showLanguageList, setShowLanguageList] = useState(false);
  useEffect(() => {}, []);
  useEffect(() => {
    const size = resume?.size / 1000_000 ?? null;
    if (size && size > 2) toast(`Resume size ${size}MB greater than 2MB`);
    if (size && size <= 2) setGotoNext(true);
  }, [resume]);
  return (
    <div>
      <div className={`max-width-400-center mt-4`}>
        <p className={`text-center  text-black-variant-1`}>
          Upload Your Resume
        </p>
        <div
          className={`
        border-green-variant-3
        p-1
        rounded
        d-flex
        align-items-center
        justify-content-between
        `}
        >
          <input
            type="file"
            id="resume"
            placeholder="max(2 mb)"
            accept=".pdf,.doc,.docx"
            className={`d-none border`}
            onChange={(e) => setResume(e.target.files[0])}
          />
          <label htmlFor="resume" className={`text-gray cursor-pointer`}>
            {resume ? resume.name : "Resume max(2 Mb)"}
          </label>

          <label htmlFor="resume" className="cursor-pointer p-1 ">
            <FaFile color="green" />
          </label>
        </div>
      </div>
      {/*Language  */}
      <div className={`max-width-400-center mt-3`}>
        <p className={`text-black-variant-1 text-center`}>Language</p>
        <div className={`d-flex align-items-center justify-content-between`}>
          <div className={`position-relative text-black-variant-2`}>
            <div className={`rounded border-green-variant-3`}>
              <input
                type="text"
                id="0"
                className={`p-1 rounded  bg-white-variant-2 text-black-variant-2`}
                placeholder="Language"
                defaultValue={userLanguage[0]?.language}
                onFocus={() => setShowLanguageList(true)}
              />
              {showLanguageList && (
                <span
                  className={`cursor-pointer p-1`}
                  onClick={() => setShowLanguageList(false)}
                >
                  X
                </span>
              )}
              <ul
                className={`language-list ${showLanguageList ? "active" : ""}`}
              >
                {Languages.map(
                  (skill, index) =>
                    !skill.isSelected && (
                      <li key={index} onClick={() => {}}>
                        {skill.name}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div>
            <select
              className={`
      p-1
      rounded
      border-green-variant-3
      text-black-variant-1
      bg-white-variant-2
      
      `}
              name="level"
              onChange={(e) => {}}
              defaultValue={userLanguage[0].level}
            >
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
              <option value="native">Native</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserSummary = ({ setGotoNext, setUserInfo }) => {
  const [summary, setSummary] = useState("");
  return (
    <div
      className={`mt-4 
    max-width-400-center
    `}
    >
      <p className={`text-center`}>
        About You
        <span className={`text-gray text-xsm`}> min (50 words)</span>
      </p>
      <div
        className={`border-green-variant-3 rounded overflow-hidden
      p-1
      `}
      >
        <textarea
          className={`w-100 
        textarea-about
        border-0
        transparent
        p-2 text-black-variant-2`}
          placeholder={`eg. With expertise in web designing and development using React.js and Node, I am well-equipped to deliver innovative and robust solutions. My commitment to clear and proactive communication ensures a smooth collaboration, making me the ideal candidate for your project
        `}
          rows={4}
          style={{
            textAlign: "justify",
          }}
          onChange={(e) => {
            const { value } = e.target;
            setSummary(e.target.value);
            if (value.split(" ").length > 50) setGotoNext(true);
          }}
        />
        <span className={`text-xsm p-1 text-black-variant-1`}>
          {summary.split(" ").length - 1}
        </span>
      </div>
    </div>
  );
};
