import { useState, useEffect } from "react";
import { ToastContainer as Toast } from "react-toastify";

function ToastContainer() {
  let [theme, setTheme] = useState(localStorage.getItem("theme"));
  return <Toast theme={theme} />;
}

export default ToastContainer;
