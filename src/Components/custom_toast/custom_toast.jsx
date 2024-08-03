import { toast } from "react-toastify";

const customToast = ({ message, type }) => {
  return toast(message, { type: type, hideProgressBar: true });
};

export default customToast;
