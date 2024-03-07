import { NavLink } from "react-router-dom";
import Links from "./Links";

const SidebarMobile = ({ isOpen, onCloseSideHandler }) => {
  let o = false;
  return (
    <div
      className={`${
        isOpen ? " translate-x-0" : "translate-x-[-100%]"
      } transition-all duration-300 absolute z-[999] left-0 rounded-r-2xl w-fit overflow-hidden mt-16`}
    >
      <Links onCloseSideHandler={onCloseSideHandler} />
    </div>
  );
};

export default SidebarMobile;
