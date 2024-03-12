import { storeOne } from "../../../assets";
import Button from "../../Layouts/Button";

const Tracking = () => {
  return (
    <section className="pt-20 sm:pt-28 2xl:pt-52">
      <div className="flex items-center gap-8 lg:gap-32 xl:gap-52 flex-col lg:flex-row">
        <div className="flex-1 custom_shadow">
          <img
            src={storeOne}
            alt="Tracking"
            className="max-w-full"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl lg:text-[28px] lg:leading-[40px] xl:text-[35px] xl:leading-[49px]">
            متابعة المخزون بشكل دائم
          </h3>
          <p className="mb-6 mt-1 text-[#14131399] text-sm sm:text-lg xl:text-2xl">
            تمكنك أداة متابعة المخزون من مراقبة الأصناف بشكل دائم، فإنك تضمن
            استمرار توفر المواد الضرورية في مخزونك دون انقطاع. بالإضافة إلى ذلك،
            يساعدك تتبع كميات المطبخ قبل النفاذ على تجنب المواقف المحرجة أو
            الأزمات.
          </p>
          <Button>قراءة المزيد</Button>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
