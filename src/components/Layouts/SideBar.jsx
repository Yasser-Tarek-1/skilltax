import Links from "./Links";

const SidebarMobile = ({ isOpen, onCloseSideHandler }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
      } lg:hidden w-[90%] left-[50%] translate-x-[-50%] transition-all duration-500 absolute z-[998]  rounded-lg overflow-hidden mt-16`}
    >
      <Links onCloseSideHandler={onCloseSideHandler} />
    </div>
  );
};

export default SidebarMobile;
