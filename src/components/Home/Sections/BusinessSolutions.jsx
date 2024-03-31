import { HashLink } from "react-router-hash-link";
import { iPad } from "../../../assets";
import Button from "../../Layouts/Button";

const BusinessSolutions = () => {
  return (
    <section id="businessSolutions" className="pt-20 sm:pt-28 2xl:pt-40">
      <div className="w-full h-full lg:h-80 px-6 py-12 lg:py-0 sm:px-12 lg:px-20 bg-primary gap-7 lg:gap-14 rounded-3xl relative flex items-center justify-between flex-col-reverse md:flex-row">
        <div>
          <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-[dinFontBold]">
            حلول سكيل تاكس للأعمال
          </h2>
          <p className="text-white text-sm sm:text-lg lg:text-xl max-w-[510px] pt-2 pb-6">
            نحن نؤمن بأن تلبية احتياجات عملائنا تتطلب تقديم حلول مخصصة وفقًا
            لاحتياجاتهم .
          </p>
          <HashLink to="/#contactUs">
            <Button>تواصل معنا</Button>
          </HashLink>
        </div>
        <div className="w-full md:w-[70%] lg:w-[55%]">
          <img
            src={iPad}
            alt="Casher - كاشير"
            className="w-full h-full  max-w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
