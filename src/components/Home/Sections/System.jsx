import { storeTwo } from "../../../assets";

const System = () => {
  return (
    <section id="#" className="pt-28 md:pt-52">
      <div className="flex items-center gap-8 lg:gap-32 xl:gap-52 flex-col lg:flex-row-reverse">
        <div className="flex-1 custom_shadow">
          <img src={storeTwo} alt="system" className="max-w-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl lg:text-[28px] xl:text-[35px]">نظام المطبخ</h3>
          <p className="mb-6 xl:mb-11 mt-4 text-[#14131399] text-[15px] md:text-lg lg:text-xl xl:text-[23px]">
            من خلال نظام المطبخ المُقدم من سكيل تاكس، يمكنك تحديد كميات معينة من
            المواد للتموين يوميًا أو وفقًا لتفضيلاتك الخاصة، مما يسهل عليك ضبط
            عمليات التوريد بشكل دقيق وفقًا لاحتياجاتك الفعلية. بفضل شاشة معلومات
            المطبخ
          </p>
          <button className="w-32 lg:w-36 xl:w-44 h-12 lg:h-12 xl:h-16 bg-primary rounded-full text-white text-sm lg:text-base">
            قراءة المزيد
          </button>
        </div>
      </div>
    </section>
  );
};

export default System;
