import { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

import styles from "./DarkMode.module.scss";

const DarkMode = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    const darkModeSet = localStorage.getItem("darkmode");
    setIsDarkmode(darkModeSet === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", isDarkmode.toString());

    // data-theme 속성 추가
    document.documentElement.setAttribute(
      "data-theme",
      isDarkmode ? "dark" : "light"
    );
  }, [isDarkmode]);

  return (
    <button
      className={`${styles.button} ${isDarkmode ? "dark" : ""}`}
      onClick={() => setIsDarkmode(!isDarkmode)}
    >
      {isDarkmode ? <CiLight size={30} /> : <CiDark size={30} />}
    </button>
  );
};

export default DarkMode;
