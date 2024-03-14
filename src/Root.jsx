import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import SidebarMobile from "./components/Layouts/SideBar";
import Loading from "./components/Loading/Loading";
import useOnlineState from "./hooks/useOnlineState";
import OffLineAlert from "./components/Layouts/OffLineAlert";

const Root = () => {
  let isOnline = useOnlineState();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoding] = useState(true);
  const [showOffLineAlert, setShowOffLineAlert] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShowOffLineAlert(true);
    } else {
      setShowOffLineAlert(false);
    }
  }, [isOnline]);

  const closeSideHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const openSideHandler = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    let clear = setTimeout(() => {
      setIsLoding(false);
    }, 2000);
    return () => {
      clearTimeout(clear);
    };
  }, []);

  return (
    <div
      onClick={closeSideHandler}
      className="w-full h-full relative overflow-hidden"
    >
      {/* {isLoading && <Loading />} */}
      <OffLineAlert
        showOffLineAlert={showOffLineAlert}
        onSetShowOffLineAlert={setShowOffLineAlert}
      />
      <a
        href="https://wa.me/+966553559038"
        target="_blank"
        className={`${
          showOffLineAlert && "translate-y-[-55px] sm:translate-y-0"
        } bg-[#25d366] z-[999] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center fixed right-7 bottom-7 sm:bottom-10 sm:right-10 transition-all duration-300 ease-in`}
      >
        <FontAwesomeIcon size="2x" icon={faWhatsapp} color="#fff" />
      </a>
      <SidebarMobile isOpen={isOpen} onCloseSideHandler={closeSideHandler} />
      <Header onOpenSideHandler={openSideHandler} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
