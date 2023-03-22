import { Bicon } from "./Button";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

function DarkMode() {
  let body = document.documentElement;
  let themey = localStorage.getItem('theme')
  let [currentTheme, setCurrentTheme] = useState(themey);
  let browserTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // If toggle theme
  const changeTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      body.classList.remove("dark");
      setCurrentTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      body.classList.add("dark");
      setCurrentTheme("dark");
    }
  };

  // If there is no choice made yet, respect OS preference and save the OS preference
  if (!localStorage.getItem("theme") && browserTheme) {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setCurrentTheme("dark");
  } else if (!localStorage.getItem("theme") && !browserTheme) {
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    setCurrentTheme("light");
  } else if (localStorage.getItem("theme")) {
    // If there is a choice, use that choice
    body.classList.add(localStorage.getItem("theme"));
  }

  return (
    <div className="flex relative overflow-hidden" onClick={() => changeTheme()}>
      <Bicon
        icon={<FaMoon />}
        title="Enable Dark Mode"
        className={`duration-300 ${
          currentTheme === "dark" ? "translate-x-[15vw]" : ""
        }`}
      />
      <Bicon
        icon={<FaSun />}
        title="Disable Dark Mode"
        className={`absolute inset-0 duration-300 ${
          currentTheme === "light" ? "translate-x-[15vw]" : ""
        }`}
      />
    </div>
  );
}

export default DarkMode;
