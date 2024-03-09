import { Link, useLocation } from "react-router-dom";
import { logo, logo_primary } from "../../assets";
import Links from "./Links";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ onOpenSideHandler }) => {
  const { pathname } = useLocation();

  return (
    <div className="w-full inset-0 absolute z-10 h-16 sm:h-20 lg:h-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="w-full h-full flex items-center justify-between gap-16 xl:gap-32">
          <Link to="/">
            <div>
              <img
                src={pathname == "/" ? logo : logo_primary}
                alt="SkillTax"
                className="w-[120px] lg:w-[150px]"
                loading="lazy"
              />
            </div>
          </Link>
          {/* Menu Bar*/}
          <button onClick={onOpenSideHandler} className="block lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              // className="h-7"
              color={pathname == "/" ? "#fff " : "#000"}
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
