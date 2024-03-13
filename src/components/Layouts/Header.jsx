import { Link, useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "./Links";
import { logo, logo_primary } from "../../assets";

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
                  pathname == "/" || pathname == "/privacy-policy"
                    ? logo
                    : logo_primary
                }
                alt="SkillTax - سكيل تاكس نظام الكاشير الامثل"
                className="w-[120px] lg:w-[180px] 2xl:w-[220px]"
                loading="lazy"
              />
            </div>
          </Link>
          {/* Menu Bar*/}
          <button onClick={onOpenSideHandler} className="block lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              color={
                pathname == "/" || pathname == "/privacy-policy"
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
