const Overlay = ({ isOpen, onCloseSideHandler }) => {
  return (
    <div
      onClick={onCloseSideHandler}
      className={`${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } lg:hidden w-full h-full fixed inset-0 bg-[#00000080] z-[99] transition-all duration-300`}
    ></div>
  );
};

export default Overlay;
