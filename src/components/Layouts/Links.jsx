import { Link, useLocation } from "react-router-dom";

const Links = ({ onCloseSideHandler }) => {
  let { pathname } = useLocation();
  return (
    <>
      <div
        className={`
      ${pathname == "/" ? "lg:text-white" : "lg:text-black"}
      flex items-center flex-col bg-white lg:bg-transparent lg:flex-row justify-between text-primary gap-0 lg:gap-3 xl:gap-9
      `}
      >
        <Link
          onClick={onCloseSideHandler}
          to="/"
          className="text-sm lg:text-lg xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          الرئيسية
        </Link>
        <a
          onClick={onCloseSideHandler}
          href="/#solution"
          className=" text-sm lg:text-lg xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          حلول سكيل تاكس
        </a>
        <a
          onClick={onCloseSideHandler}
          href="/#moreSolution"
          className="text-sm lg:text-lg xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          حلول خاصة لأعمالك
        </a>
        <a
          onClick={onCloseSideHandler}
          href="/#packages"
          className="text-sm lg:text-lg xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          الباقات
        </a>
      </div>
      <a onClick={onCloseSideHandler} href="/#contactUs">
        <button
          className={`${
            pathname == "/" ? "bg-white text-primary" : " bg-primary text-white"
          }
        hidden lg:flex items-center justify-center lg:w-40 lg:h-12 xl:w-[188px] xl:h-[60px] rounded-full font-medium text-base 
        `}
        >
          تواصل معنا
        </button>
      </a>
    </>
  );
};

export default Links;
