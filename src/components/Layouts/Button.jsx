const Button = ({ width, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        width ? width : "w-32 xl:w-44"
      } h-12 xl:h-16 bg-primary rounded-full text-white text-xs sm:text-sm xl:text-base`}
    >
      {children}
    </button>
  );
};

export default Button;
