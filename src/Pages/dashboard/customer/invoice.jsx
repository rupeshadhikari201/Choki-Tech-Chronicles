import { ArrowDown2 } from "iconsax-react";
import "../../../Css/invoice/invoice.css";
import CircularAvatar from "../../../Components/commen/circular_avatar";
import { FaCircle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../utils/context/auth";
const Invoice = () => {
  const { userState } = useContext(AuthContext);
  return (
    <div
      className={`text-black-variant-2 px-2 px-md-1 mx-auto`}
      style={{ maxWidth: "1200px" }}
    >
      <h4 className={`text-center mb-3 font-weight-300`}>Transactions</h4>
      <div>
        <div
          className={`d-flex justify-content-around mx-auto mb-4 gap-4`}
          style={{ maxWidth: "900px" }}
        >
          <div className="invoice-choice position-relative">
            <div
              onClick={(e) => {
                const next = e.currentTarget.nextElementSibling;
                if (next.style.maxHeight) next.style.maxHeight = null;
                else next.style.maxHeight = next.scrollHeight + 20 + "px";
              }}
            >
              <span className="text-end d-block"> Month</span>
              <div className="border-bottom d-flex justify-content-between p-1 mt-1">
                current <ArrowDown2 className="" />{" "}
              </div>
            </div>
            <ul
              className="bg-white-variant-4   position-absolute w-100 text-black-variant-1"
              style={{ overflow: "hidden" }}
            >
              <li>current</li>
              <li>last</li>
            </ul>
          </div>
          <div className="invoice-choice position-relative">
            <div
              onClick={(e) => {
                const next = e.currentTarget.nextElementSibling;
                if (next.style.maxHeight) next.style.maxHeight = null;
                else next.style.maxHeight = next.scrollHeight + 20 + "px";
              }}
            >
              <span className="text-end d-block"> Type</span>
              <div className="border-bottom d-flex justify-content-between p-1 mt-1">
                Success <ArrowDown2 className="" />{" "}
              </div>
            </div>
            <ul
              className="bg-white-variant-4  position-absolute w-100"
              style={{ overflow: "hidden" }}
            >
              <li>Success</li>
              <li>Faild</li>
            </ul>
          </div>
        </div>
        {/* Invoice lists  */}
        <div className="d-flex gap-3">
          <div className="border-green-variant-3  rounded col p-2">
            <div className="d-flex gap-2">
              <CircularAvatar
                size={60}
                bgcolor={"#eee"}
                text={userState?.user.firstName.slice(0, 2)}
              />
              <div className="col cursor-pointer">
                <p className="font-weight-500 mb-0">Paid for paper writing</p>
                <p className="mb-0">Feburary 20,2024 9:30AM</p>
                <hr />
              </div>
            </div>
            <div className="d-flex gap-2">
              <CircularAvatar
                size={60}
                bgcolor={"#eee"}
                text={userState?.user.firstName.slice(0, 2)}
              />
              <div className="col cursor-pointer">
                <p className="font-weight-500 mb-0">Paid for Web Design</p>
                <p className="mb-0">Feburary 21,2024 10:30AM</p>
                <hr />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="border-green-variant-3 rounded col-5 d-none flex-column align-items-center p-1 pb-3 d-md-flex">
            <CircularAvatar
              size={60}
              bgcolor={"#eee"}
              className={"mt-2"}
              text={userState?.user.firstName.slice(0, 2)}
            />
            <p className="m-0 mt-1">
              Paid for <span className="font-weight-500"> writing paper</span>
            </p>
            <h2 className="font-weight-300">4000</h2>
            <p className="m-0">Feburary 20,2024 9:30AM</p>
            <div className="w-100 px-4 mt-3">
              <div className="d-flex justify-content-between">
                <p>Amount Paid</p> <p>4000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Transaction Id</p> <p>id00003238</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Status</p>{" "}
                <div
                  className="border-green-variant-1 px-2 d-flex align-items-center gap-3"
                  style={{ borderRadius: "30px", height: "25px" }}
                >
                  <FaCircle size={10} color="green" /> <span>Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Invoice;
