import { storeOne } from "../../../assets";

const Tracking = () => {
  return (
    <section id="#" className="pt-28 md:pt-52">
      <div className="flex items-center gap-8 lg:gap-32 xl:gap-52 flex-col lg:flex-row">
        <div className="flex-1 custom_shadow">
          <img src={storeOne} alt="tracking" className="max-w-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl lg:text-[28px] xl:text-[35px]">
            متابعة المخزون بشكل دائم
          </h3>
          <p className="mb-6 xl:mb-11 mt-4 text-[#14131399] text-[15px] md:text-lg lg:text-xl xl:text-[23px]">
            بالتأكيد! عندما تمكنك أداة متابعة المخزون من مراقبة الأصناف بشكل
            دائم، فإنك تضمن استمرار توفر المواد الضرورية في مخزونك دون انقطاع.
            بالإضافة إلى ذلك، يساعدك تتبع كميات المطبخ قبل النفاذ على تجنب
            المواقف المحرجة أو الأزمات الغذائية
          </p>
          <button className="w-32 lg:w-36 xl:w-44 h-12 lg:h-12 xl:h-16 bg-primary rounded-full text-white text-sm lg:text-base">
            قراءة المزيد
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
