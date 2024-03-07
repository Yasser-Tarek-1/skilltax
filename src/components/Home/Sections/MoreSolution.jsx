import { iPad } from "../../../assets";

const MoreSolution = () => {
  return (
    <section id="moreSolution" className="pt-28 md:pt-52">
      <div className="w-full bg-primary h-full gap-10 lg:gap-14 px-8 md:px-12 lg:px-20 py-16 lg:py-0 md:h-96 rounded-3xl md:rounded-[100px] relative flex items-center justify-between flex-col-reverse md:flex-row">
        <div>
          <h3 className="text-white text-[25px] xl:text-[35px]">
            حلول سكيل تاكس للأعمال
          </h3>
          <p className="text-white text-[15px] lg:text-lg xl:text-xl max-w-[510px] pt-4 pb-8">
            نحن نؤمن بأن تلبية احتياجات عملائنا تتطلب تقديم حلول مخصصة وفقًا
            لاحتياجاتهم الفريدة. من خلال التواصل المستمر مع عملائنا
          </p>
          <button className="bg-white text-primary font-[dinFontMedium] text-xs lg:text-lg h-12 lg:h-[60px] w-[140px] lg:w-[218px] rounded-full">
            تواصل معنا
          </button>
        </div>
        <div className="w-full md:w-[70%] lg:w-[55%]">
          <img src={iPad} className="w-full max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default MoreSolution;
