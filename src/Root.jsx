import { Outlet } from "react-router-dom";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import SidebarMobile from "./components/Layouts/SideBar";
import Overlay from "./components/Modal/Overlay";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSideHandler = () => {
    setIsOpen(false);
  };
  const openSideHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <a
        href="https://wa.me/+966553559038"
        target="_blank"
        className="bg-[#25d366] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center fixed bottom-7 right-7 sm:bottom-10 sm:right-10 z-[98]"
      >
        <FontAwesomeIcon size="2x" icon={faWhatsapp} color="#fff" />
      </a>
      <Overlay isOpen={isOpen} onCloseSideHandler={closeSideHandler} />
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
