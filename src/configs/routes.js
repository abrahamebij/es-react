import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingBar from "react-top-loading-bar";
import colors from "./colors";
import Loader from "../components/Loader";
const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/About"));
const Give = lazy(() => import("../pages/Give"));
const MV = lazy(() => import("../pages/MV"));
const History = lazy(() => import("../pages/History"));
const Beliefs = lazy(() => import("../pages/Beliefs"));
const NotFound = lazy(() => import("../pages/404"));

function Router() {
  return (
    <Suspense
      fallback={
        <>
          <LoadingBar
            progress={100}
            className="bg-loader"
            shadow={false}
            loaderSpeed={2500}
            waitingTime={3500}
            color={getHex()}
          />
          <Loader />
        </>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/give" element={<Give />} />
        <Route path="/mission-and-vision" element={<MV />} />
        <Route path="/our-beliefs" element={<Beliefs />} />
        <Route path="/our-history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function getHex() {
  let colorObj = colors[Number(localStorage.color)];
  let theme = localStorage.theme;

  if (theme === "light") {
    return colorObj.light;
  } else {
    return colorObj.dark;
  }
}
export default Router;
