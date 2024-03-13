import Head from "../../Layouts/Head";
import { ALL_OPTIONS } from "../../../content";
const MoreSolutions = () => {
  return (
    <section className="pt-20 sm:pt-28 2xl:pt-40">
      <Head title="المزيد من الحلول">
        تمتع بالكثير من الحلول الفعالة المقدمة مع باقات سكيل تاكس أو منفردة
      </Head>
      <div className="gap-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* Card */}
        {ALL_OPTIONS.map(({ id, title, text, icon }) => {
          return (
            <div
              key={id}
              className="w-full gap-9 xl:max-h-[530px] 2xl:max-h-[507px] overflow-y-auto border-[1.5px] p-7 shadow border-[#EEEEEE] flex  flex-col items-center rounded-[40px]"
            >
              <img
                src={icon}
                alt={title}
                className="h-[312px]"
                loading="lazy"
              />
              <div className="w-full">
                <h4 className="text-lg sm:text-xl xl:text-2xl font-[dinFontMedium]">
                  {title}
                </h4>
                <p className="text-secondary text-sm sm:text-xl xl:text-[22px] xl:leading-[30px] font-[dinFontMedium] max-w-full">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoreSolutions;
