import Head from "../../Layouts/Head";
import { FEATURES } from "../../../content";

const Features = () => {
  return (
    <section className="pt-20 sm:pt-28 2xl:pt-40">
      <Head title="مميزاتنا">
        تتميز بالمرونه والقدرة على تلبية كافة إحتياجتك بشكل فعال وفقاً لمتطلباتك
        ، مما يجعل تجربتك معنا متميزة
      </Head>
      <div className="flex items-start justify-center  sm:justify-between flex-wrap gap-8 sm:gap-12">
        {FEATURES.map(({ id, icon, h4, p }) => {
          return (
            <div
              key={id}
              className="flex items-center sm:items-start w-[220px] flex-col sm:w-[286px]"
            >
              <img
                src={icon}
                alt={h4}
                className="w-[75px] lg:w-[105px] mb-4"
                loading="lazy"
              />
              <h4 className="text-lg sm:text-xl xl:text-2xl font-[dinFontMedium]">
                {h4}
              </h4>
              <p className="text-secondary text-center sm:text-start text-sm sm:text-xl xl:text-[22px] xl:leading-[30px] font-[dinFontMedium] max-w-full">
                {p}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
