import { home, lassss, mainLast, homeLine } from "../../assets";

const Screen = () => {
  return (
    <div id="#home" className="w-full pt-24 sm:pt-40 lg:pt-48 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full h-full flex flex-col gap-12 lg:flex-row items-end justify-between relative ">
          <div className=" h-full lg:pb-32 text-white relative z-10 flex flex-col gap-6 lg:gap-8">
            <h1 className="text-[40px] leading-[52px] sm:text-[60px] sm:leading-[78px] xl:text-[80px] xl:leading-[104px]">
              <p className="relative">
                <span className="relative z-10"> سكيل تاكس خيارك</span>
                <div className="absolute bottom-[-12px] sm:bottom-[-17px] lg:bottom-[-24px]">
                  <img
                    src={homeLine}
                    alt="home-line"
                    className="w-[150px] sm:w-[200px] lg:w-[275px]"
                  />
                </div>
              </p>
              <p> الامثل لادارة مبيعاتك</p>
            </h1>
            <p className="text-sm sm:text-xl xl:text-2xl text-[#FFFFFFCC]">
              تسهيل وتنظيم عملية الإدارة والتنظيم للمطاعم و المبيعات بطريقة
              فعّالة وبسيطة. يتيح هذا النظام للمنظمين إدارة جميع جوانب المطعم
              بكل يسر وسلاسة.
            </p>
            <div className="flex items-center gap-4">
              <button className="w-32 h-12 sm:w-40 sm:h-14 xl:w-[220px] xl:h-[67px] text-xs sm:text-base xl:text-xl rounded-full flex items-center justify-center bg-white text-primary">
                انضم الينا الان
              </button>
              <button className="w-32 h-12 sm:w-40 sm:h-14 xl:w-[220px] xl:h-[67px] text-xs sm:text-base xl:text-xl rounded-full flex items-center justify-center bg-[#FFFFFF1A] text-white">
                قراءة المزيد
              </button>
            </div>
          </div>
          <div className="w-[120%] relative left-0 sm:w-full 2xl:scale-110 2xl:top-[-27px]">
            <img src={lassss} className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
