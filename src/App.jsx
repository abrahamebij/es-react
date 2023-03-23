import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastContainer from "./components/ToastContainer";
import ColorSet from "./components/ColorSet";
import Router from "./configs/routes";


const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <HelmetProvider>
        <ToastContainer />
        <ColorSet />
        <Wrapper>
          <Navbar />
            <Router />
          <Footer />
        </Wrapper>
      </HelmetProvider>
    </>
  );
}

export default App;
