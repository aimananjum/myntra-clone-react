import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// This is main function
function ToastMessage({ btnName, toastMsg }) {
  const notify = () => toast(toastMsg, { className: "toast-message" });

  return (
    <div>
      <button onClick={notify} className="notify">
        {btnName}
      </button>
      <ToastContainer style={{ width: "200px" }} autoClose={1000} />
    </div>
  );
}

export default ToastMessage;
