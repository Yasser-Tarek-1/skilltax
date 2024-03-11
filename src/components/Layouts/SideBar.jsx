// import { useEffect } from "react";
import Links from "./Links";

const SidebarMobile = ({ isOpen }) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
  //   };
  // }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-[-200%] opacity-0"
      } lg:hidden w-[90%] left-[50%] translate-x-[-50%] transition-all duration-500 absolute z-[999] rounded-lg overflow-hidden mt-16 `}
    >
      <Links />
    </div>
  );
};

export default SidebarMobile;
