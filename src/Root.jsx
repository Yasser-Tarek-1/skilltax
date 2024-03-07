import { Outlet } from "react-router-dom";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import SidebarMobile from "./components/Layouts/SideBar";
import Overlay from "./components/Modal/Overlay";
import { useState } from "react";

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
