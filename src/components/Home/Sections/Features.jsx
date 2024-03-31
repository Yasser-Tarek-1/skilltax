import { FEATURES } from "../../../services/content";
import Head from "../../Layouts/Head";

const Features = () => {
  return (
    <section className="pt-20 sm:pt-28 2xl:pt-40">
      <Head title="مميزاتنا">
        تتميز بالمرونه والقدرة على تلبية كافة إحتياجتك بشكل فعال وفقاً لمتطلباتك
        ، مما يجعل تجربتك معنا متميزة
      </Head>
      <div className="flex items-start justify-center sm:justify-between flex-wrap gap-8 sm:gap-12">
        {FEATURES.map(({ id, icon, title, description }) => {
          return (
            <div
              key={id}
              className="flex items-center sm:items-start w-[220px] flex-col sm:w-[286px]"
            >
              <img
                src={icon}
                alt={title}
                className="w-[75px] mb-2 sm:mb-4"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-base lg:text-xl font-[dinFontMedium]">
                {title}
              </h3>
              <p className="text-secondary text-center sm:text-start text-sm sm:text-base lg:text-lg font-[dinFontMedium] max-w-full">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
