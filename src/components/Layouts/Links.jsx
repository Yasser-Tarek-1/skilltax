import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Links = () => {
  let { pathname } = useLocation();
  return (
    <>
      <div
        className={`
      ${
        pathname == "/" || pathname == "/privacy-policy"
          ? "bg-white text-primary lg:text-white"
          : "bg-primary text-white lg:text-black"
      }
      flex items-center flex-col rounded-lg sm:rounded-none overflow-hidden lg:bg-transparent lg:flex-row justify-between gap-0 lg:gap-3 xl:gap-9
      `}
      >
        <Link
          to="/"
          className="text-sm lg:text-lg xl:text-xl 2xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          الرئيسية
        </Link>
        <HashLink
          to="/#solution"
          className=" text-sm lg:text-lg xl:text-xl 2xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          حلول سكيل تاكس
        </HashLink>
        <HashLink
          to="/#businessSolutions"
          className="text-sm lg:text-lg xl:text-xl 2xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          حلول خاصة لأعمالك
        </HashLink>
        <Link
          to="/packages"
          className="text-sm lg:text-lg xl:text-xl 2xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          الباقات
        </Link>
        <HashLink
          to={`${pathname == "/packages" ? "#contactUs" : "/#contactUs"}`}
          className="text-sm lg:hidden lg:text-lg xl:text-xl 2xl:text-[22px] px-4 h-12 flex items-center justify-center"
        >
          تواصل معنا
        </HashLink>
      </div>
      <HashLink to="#contactUs">
        <button
          className={`${
            pathname == "/" || pathname == "/privacy-policy"
              ? "bg-white text-primary"
              : " bg-primary text-white"
          }
        hidden lg:flex items-center justify-center lg:w-40 lg:h-12 xl:w-[188px] xl:h-[60px] rounded-full font-medium text-base 
        `}
        >
          تواصل معنا
        </button>
      </HashLink>
    </>
  );
};

export default Links;
