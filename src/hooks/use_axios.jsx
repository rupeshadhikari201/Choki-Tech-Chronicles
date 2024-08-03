import { useState } from "react";
import customToast from "../components/custom_toast/custom_toast";
import axios from "axios";

axios.defaults.baseURL = "https://gokap.onrender.com";
export const useAxios = (props) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [url, setUrl] = useState(props.url);
  function sendRequest(
    data,
    onSuccess,
    onError,
    requestRefresh = true,
    newUrl
  ) {
    setLoading(true);
    axios({
      method: props.method,
      url: newUrl ? newUrl : url,

      headers: props.headers
        ? {
            "Content-Type": "application/json",
            Authorization: `Bearer ${""}`,
          }
        : undefined,
      data,
    })
      .then((res) => {
        setResponse(res.data);
        onSuccess(res);
      })
      .catch(async (e) => {
        setApiError(e);
        try {
          if (e.message === "Network Error") {
            customToast({
              message: "Check your connection",
              type: "error",
            });
            return;
          } else onError(e);
        } catch (e) {
          customToast({ message: "Server Error 500", type: "error" });
        }

        //refreshRef.current = true;
      })
      .finally(() => setLoading(false));
  }
  return {
    loading,
    response,
    apiError,
    sendRequest,
    setUrl,
  };
};
