import { useState} from "react";
import { Link} from "react-router-dom";
import { Bicon } from "./Button";
import {
  FaBars,
  FaEnvelope,
  FaHeart,
  FaHome,
  FaPager,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "./Link";
import Logo from "./Logo";
import DarkMode from "./DarkMode";

function Sidebar() {
  let [bar, setBar] = useState(false);


  function openBar() {
    bar ? setBar(true) : setBar(true);
  }
  function closeBar() {
    bar ? setBar(false) : setBar(false);
  }

  return (
    <nav>
      <div
        className={`shadow-sm px-4 shadow-gray-200 dark:shadow-none fixed top-0 z-30 w-full bg-white dark:bg-gray-900 dark:border-b dark:border-b-gray-700 flex items-center justify-between p-2`}
      >
        {/* Start */}
        <div className={`flex gap-x-5`}>
          <Bicon
            icon={<FaBars className="w-8 h-8 dark:text-white" />}
            title="Open Menu"
            onClick={openBar}
          />
          {/* Home Link 1 */}
          <Link
            to="/"
            className="flex font-bold items-center gap-x-1 dark:text-white"
            onClick={closeBar}
          >
            {/* Logo */}
            <div className="w-10 p-1">
              <img src="/img/logo.png" alt="Logo of RCCG" />
            </div>

            {/* <!-- Text --> */}
            <span className="text-xl hidden xs:inline">Emmanuel Sanctuary</span>
          </Link>
        </div>

        {/* End */}
        {/* <div
          className={`flex items-center gap-x-5 xs:gap-x-7 lg:gap-x-10 text-2xl text-primary lg:pr-10`}
        >
          <DarkMode />
        </div> */}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 flex z-30 w-full h-full transition-transform duration-300 ${
          bar ? "translate-x-0" : "-translate-x-[150vw]"
        }`}
      >
        <div
          className={`bg-white dark:bg-slate-900 w-3/4 xs:w-3/5 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 h-full px-5 pt-2 pb-3 z-40 border-r dark:border-gray-600 shadow-xl`}
        >
          {/* Heading */}
          <div className="flex gap-x-5 pb-4 pt-2 items-center">
            {/* Hamburger */}
            <Bicon
              icon={<FaTimes className="text-3xl dark:text-white" />}
              title="Close Menu"
              onClick={closeBar}
            />

            {/* Home Link */}
            <Link
              to="/"
              className="flex font-bold items-center gap-x-1 dark:text-white"
              onClick={closeBar}
            >
              {/* Logo */}
              <div className="w-9 lg:w-10 p-1">
                <img src="/img/logo.png" alt="Logo of RCCG" />
              </div>

              {/* <!-- Text --> */}
              <span className="text-base lg:text-xl leading-none hidden xs:inline">
                Emmanuel Sanctuary
              </span>
            </Link>
          </div>

          <ul className="pt-5 flex flex-col gap-y-3 lg:gap-y-4">
            <NavLink
              value="Home"
              href="/"
              icon={<FaHome />}
              onClick={closeBar}
            />
              <NavLink
                value="Give"
                href="/give"
                icon={<FaHeart />}
                onClick={closeBar}
              />
            <NavLink
              value="Contact"
              href="/contact"
              icon={<FaEnvelope />}
              onClick={closeBar}
            />
          </ul>
        </div>
        <div
          className={`w-full h-full`}
          onClick={closeBar}
        ></div>
      </aside>
    </nav>
  );
}

export default Sidebar;
