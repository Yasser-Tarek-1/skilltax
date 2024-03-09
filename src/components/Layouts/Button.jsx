const Button = ({ width, children, onClick, prim }) => {
  return (
    <button
      onClick={onClick}
      className={`${width ? width : "w-32 xl:w-44"} ${
        prim ? "text-primary bg-white " : "bg-primary text-white"
      } h-12 xl:h-16 rounded-full text-xs sm:text-sm xl:text-base font-[dinFontMedium]`}
    >
      {children}
    </button>
  );
};

export default Button;
