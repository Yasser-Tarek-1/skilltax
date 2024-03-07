import { home, mainLast, homeLine } from "../../assets";

const Screen = () => {
  return (
    <div id="#home" className="w-full pt-[331px]">
      <div className="container px-4 mx-auto">
        <div className="w-full h-full flex flex-col lg:flex-row items-end justify-between relative ">
          <div className="flex-1 pb-20 h-full text-white relative z-10 flex flex-col gap-8 ">
            <h1 className="text-[40px] md:text-[80px] leading-[104px]">
              <p className="relative">
                <span className="relative z-10"> سكيل تاكس خيارك</span>
                <div className="absolute bottom-[-24px]">
                  <img src={homeLine} alt="home-line" />
                </div>
              </p>
              <p> الامثل لادارة مبيعاتك</p>
            </h1>
            <p className="text-sm md:text-2xl">
              تسهيل وتنظيم عملية الإدارة والتنظيم للمطاعم و المبيعات بطريقة
              فعّالة وبسيطة. يتيح هذا النظام للمنظمين إدارة جميع جوانب المطعم
              بكل يسر وسلاسة.
            </p>
            <div className="flex items-center gap-4">
              <button className="w-[123px] h-12 md:w-[220px] md:h-[67px] text-xs md:text-xl rounded-full flex items-center justify-center bg-white text-primary">
                انضم الينا الان
              </button>
              <button className="w-[123px] h-12 md:w-[220px] md:h-[67px] text-xs md:text-xl rounded-full flex items-center justify-center bg-[#FFFFFF1A] text-white">
                قراءة المزيد
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src={mainLast} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
