import { HashLink } from "react-router-hash-link";
import Button from "../Layouts/Button";
import { home, homeLine } from "../../assets";

const Screen = () => {
  return (
    <div className="w-full pt-24 sm:pt-32 lg:pt-36 xl:pt-52 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full h-full flex flex-col gap-12 lg:gap-0 lg:flex-row items-end justify-between relative ">
          <div className="h-full lg:pb-10 xl:pb-20 2xl:pb-36 text-white relative z-10 flex flex-col gap-4 xl:gap-6">
            <h1 className="text-[35px] leading-[47px] sm:text-[45px] sm:leading-[60px] 2xl:text-[60px] 2xl:leading-[78px]">
              <div className="relative">
                <span className="relative z-10"> سكيل تاكس خيارك</span>
                <div className="absolute bottom-[-12px] sm:bottom-[-17px] lg:bottom-[-24px]">
                  <img
                    src={homeLine}
                    alt="home-line"
                    className="w-[150px] sm:w-[200px] lg:w-[275px] h-full"
                  />
                </div>
              </div>
              <span> الامثل لادارة مبيعاتك</span>
            </h1>
            <p className="text-sm sm:text-lg xl:text-xl text-[#FFFFFFCC]">
              تسهيل وتنظيم عملية إدارة المطاعم و المبيعات بطريقة فعّالة وبسيطة.
              يتيح هذا النظام إدارة جميع جوانب المطعم بكل يسر وسهولة.
            </p>
            <div className="flex items-center gap-4">
              <HashLink to="/#contactUs">
                <Button> انضم الينا الان</Button>
              </HashLink>
              <Button custom="bg-[#FFFFFF1A] text-white">قراءة المزيد</Button>
            </div>
          </div>
          <div className="w-[120%] relative left-0 sm:w-full 2xl:scale-110 2xl:top-[-22px]">
            <img
              alt="Casher - كاشير"
              src={home}
              className="w-full h-full  max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
