const Button = ({
  type = "button",
  className = "",
  children,
  isMain,
  custom,
}) => {
  return (
    <button
      type={type}
      className={`${
        isMain
          ? " bg-primary text-white"
          : custom
          ? custom
          : "bg-white text-primary"
      } ${
        className ? className : "w-32 sm:w-44"
      }  h-12 sm:h-14 rounded-[100px] flex items-center justify-center text-xs sm:text-sm xl:text-base  font-[dinFontMedium]`}
    >
      {children}
    </button>
  );
};

export default Button;
