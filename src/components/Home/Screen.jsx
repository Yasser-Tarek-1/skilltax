import { home, homeLine } from "../../assets";
import { HashLink } from "react-router-hash-link";

const Screen = () => {
  return (
    <div className="w-full pt-24 sm:pt-32 lg:pt-36 xl:pt-52 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full h-full flex flex-col gap-12 lg:flex-row items-end justify-between relative ">
          <div className="h-full lg:pb-16 text-white relative z-10 flex flex-col gap-4 2xl:gap-8">
            <h1 className="text-[35px] leading-[47px] sm:text-[45px] sm:leading-[60px] 2xl:text-[70px] 2xl:leading-[90px]">
              <div className="relative">
                <span className="relative z-10"> سكيل تاكس خيارك</span>
                <div className="absolute bottom-[-12px] sm:bottom-[-17px] lg:bottom-[-24px]">
                  <img
                    src={homeLine}
                    alt="home-line"
                    className="w-[150px] sm:w-[200px] lg:w-[275px]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div> الامثل لادارة مبيعاتك</div>
            </h1>
            <p className="text-sm sm:text-xl 2xl:text-2xl text-[#FFFFFFCC]">
              تسهيل وتنظيم عملية إدارة وتنظيم المطاعم و المبيعات بطريقة فعّالة
              وبسيطة. يتيح هذا النظام إدارة جميع جوانب المطعم بكل يسر وسهولة.
            </p>
            <div className="flex items-center gap-4">
              <HashLink to="/#contactUs">
                <button className="w-32 h-12 sm:w-40 sm:h-14 xl:w-[220px] xl:h-[67px] text-xs sm:text-sm lg:text-lg 2xl:text-xl rounded-full flex items-center justify-center bg-white text-primary">
                  انضم الينا الان
                </button>
              </HashLink>
              <button className="w-32 h-12 sm:w-40 sm:h-14 xl:w-[220px] xl:h-[67px] text-xs sm:text-sm lg:text-lg 2xl:text-xl rounded-full flex items-center justify-center bg-[#FFFFFF1A] text-white">
                قراءة المزيد
              </button>
            </div>
          </div>
          <div className="w-[120%] relative left-0 sm:w-full 2xl:scale-110 2xl:top-[-22px]">
            <img
              alt="Casher - كاشير"
              src={home}
              className="max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
