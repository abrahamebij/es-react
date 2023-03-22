import { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { Bicon } from "./Button";
import colors from "../configs/colors.js";
import changeColorTheme, { checkColor } from "../configs/colorTheme";
import { Helmet } from "react-helmet-async";
checkColor();

function ColorSet() {
  const [bar, setBar] = useState(false);
  let [color, setColor] = useState(Number(localStorage.getItem("color")));
  let theme = localStorage.getItem("theme");

  function toggleBar() {
    bar ? setBar(false) : setBar(true);
  }
  function closeBar(e) {
    bar ? setBar(false) : setBar(false);
    changeColorTheme(e.target.id);
    setColor(localStorage.getItem("color"));
  }

  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
        .text-primary {
          color: ${colors[color].light}
        }
        .dark .text-primary {
          color: ${colors[color].dark}
        }
        .hover\\:text-primary:hover {
          color: ${colors[color].light}
        }
        .dark .hover\\:text-primary:hover {
          color: ${colors[color].dark}
        }
        .bg-primary {
          background: ${colors[color].light};
        }
        .dark .bg-primary {
          background: ${colors[color].dark};
        }
        .bg-loader {
          background: ${colors[color].light} !important;
        }
        .dark .bg-loader {
          background: ${colors[color].dark} !important;
        }
        .fill-primary {
          fill: ${colors[color].light};
        }
        .dark .fill-primary {
          fill: ${colors[color].dark};
        }
        .border-t-primary {
          border-top-color: ${colors[color].light}; 
        }
        .dark .border-t-primary {
          border-top-color: ${colors[color].dark}; 
        }
        .caret-primary {
          caret-color: ${colors[color].light}; 
        }
        .dark .caret-primary {
          caret-color: ${colors[color].dark}; 
        }
        .home-underline::after {
          content: '';
          display: block;
          margin: 5px auto 0;
          width: 40px;
          height: 5px;
          border-radius: 10px;
          background-color: ${colors[color].light};
        }
        .dark .home-underline::after {
          background-color: ${colors[color].dark};
        }
      `}
        </style>
      </Helmet>

      <div
        className={`flex items-center fixed z-10 duration-300 ${
          bar ? "right-0" : "-right-[134px]"
        } bottom-20`}
      >
        <div>
          <Bicon
            className="p-2 bg-white rounded-l border dark:border-gray-600 border-r-0 dark:bg-gray-900"
            icon={
              <FaCog className="text-xl text-gray-600 dark:text-gray-400" />
            }
            onClick={toggleBar}
          />
        </div>
        <div className="grid grid-cols-3 px-2 bg-white dark:bg-slate-900 border dark:border-gray-600 border-r-0 gap-x-2 gap-y-3 py-2">
          <Color
            color={theme === "light" ? colors[0].light : colors[0].dark}
            onClick={closeBar}
            id="0"
          />
          <Color
            color={theme === "light" ? colors[1].light : colors[1].dark}
            onClick={closeBar}
            id="1"
          />
          <Color
            color={theme === "light" ? colors[2].light : colors[2].dark}
            onClick={closeBar}
            id="2"
          />
          <Color
            color={theme === "light" ? colors[3].light : colors[3].dark}
            onClick={closeBar}
            id="3"
          />
          <Color
            color={theme === "light" ? colors[4].light : colors[4].dark}
            onClick={closeBar}
            id="4"
          />
          <Color
            color={theme === "light" ? colors[5].light : colors[5].dark}
            onClick={closeBar}
            id="5"
          />
        </div>
      </div>
    </>
  );
}

function Color(props) {
  return (
    <div
      className="cursor-pointer p-4 rounded-full border dark:border-gray-600"
      id={props.id}
      style={{ background: props.color }}
      onClick={props.onClick}
    ></div>
  );
}

export default ColorSet;
