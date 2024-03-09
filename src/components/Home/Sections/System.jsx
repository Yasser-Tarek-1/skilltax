import { storeTwo } from "../../../assets";
import Button from "../../Layouts/Button";

const System = () => {
  return (
    <section id="#" className="pt-20 sm:pt-28 2xl:pt-52">
      <div className="flex items-center gap-8 lg:gap-32 xl:gap-52 flex-col lg:flex-row-reverse">
        <div className="flex-1 custom_shadow">
          <img
            src={storeTwo}
            alt="tracking"
            className="max-w-full"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl lg:text-[28px] lg:leading-[40px] xl:text-[35px] xl:leading-[49px]">
            نظام المطبخ
          </h3>
          <p className="mb-6 mt-1 text-[#14131399] text-sm sm:text-lg xl:text-2xl">
            من خلال نظام المطبخ المُقدم من سكيل تاكس، يمكنك تحديد كميات معينة من
            المواد للتموين يوميًا أو وفقًا لتفضيلاتك الخاصة، مما يسهل عليك ضبط
            عمليات التوريد بشكل دقيق وفقًا لاحتياجاتك الفعلية. بفضل شاشة معلومات
            المطبخ
          </p>
          <Button>قراءة المزيد</Button>
        </div>
      </div>
    </section>
  );
};

export default System;
