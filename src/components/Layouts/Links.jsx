import { useLocation } from "react-router-dom";

const Links = ({ onCloseSideHandler }) => {
  let { pathname } = useLocation();
  return (
    <>
      <div
        className={`
      ${pathname == "/" ? "lg:text-white" : "lg:text-black"}
      flex items-center flex-col bg-white lg:bg-transparent lg:flex-row justify-between text-primary gap-0 lg:gap-3 xl:gap-14
      `}
      >
        <a
          onClick={onCloseSideHandler}
          href="/#home"
          className="text-[14px] lg:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          الرئيسية
        </a>
        <a
          onClick={onCloseSideHandler}
          href="/#solution"
          className=" text-[14px] lg:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          حلول سكيل تاكس
        </a>
        <a
          onClick={onCloseSideHandler}
          href="/#moreSolution"
          className="text-[14px] lg:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          حلول خاصة لأعمالك
        </a>
        <a
          onClick={onCloseSideHandler}
          href="/#packages"
          className="text-[14px] lg:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          الباقات
        </a>
      </div>
      <a onClick={onCloseSideHandler} href="/#contactUs">
        <button
          className={`${
            pathname == "/" ? "bg-white text-primary" : " bg-primary text-white"
          }
        hidden lg:flex items-center justify-center h-[60px]  rounded-full w-[188px] font-medium text-base 
        `}
        >
          تواصل معنا
        </button>
      </a>
    </>
  );
};

export default Links;
