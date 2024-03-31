import { Link, useLocation } from "react-router-dom";
import Links from "./Links";
import { logo, logo_primary } from "../../assets";
import { FaBars } from "react-icons/fa6";

const Header = ({ onOpenSideHandler }) => {
  const { pathname } = useLocation();

  return (
    <div className="w-full inset-0 absolute z-[990] h-16 sm:h-20 lg:h-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="w-full h-full flex items-center justify-between gap-16 xl:gap-32">
          <Link to="/">
            <div>
              <img
                src={
                  pathname == "/" ||
                  pathname == "/privacies" ||
                  pathname == "/faqs"
                    ? logo
                    : logo_primary
                }
                alt="SkillTax - سكيل تاكس نظام الكاشير الامثل"
                className="w-[120px] lg:w-[200px] h-full"
                loading="lazy"
              />
            </div>
          </Link>
          {/* Menu Bar*/}
          <button
            aria-label="Menu Bar"
            onClick={onOpenSideHandler}
            className="block lg:hidden"
          >
            <FaBars
              size={26}
              color={
                pathname == "/" ||
                pathname == "/privacies" ||
                pathname == "/faqs"
                  ? "#fff "
                  : "#373873"
              }
            />
          </button>
          <div className="w-full h-full hidden lg:flex items-center justify-between">
            <Links pathname={pathname} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
