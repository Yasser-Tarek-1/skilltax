import { wifi, dashboard, app, cloud } from "../../../assets";
import Head from "../../Layouts/Head";

const FEATURES = [
  {
    id: 1,
    icon: cloud,
    h4: "نظام سحابي",
    p: "يعمل دون توقف او إنقطاع والوصول الية من اي مكان",
  },
  {
    id: 2,
    icon: app,
    h4: "تطبيق للكاشير",
    p: "يمكنك من إدارة عمليات البيع ويدعم الايباد والتابلت",
  },
  {
    id: 3,
    icon: wifi,
    h4: "يعمل دون إنقطاع",
    p: "يمكنك الاستمرار في العمل اثناء ضعف الانترنت أو إنقطاعها",
  },
  {
    id: 4,
    icon: dashboard,
    h4: "لوحة تحكم",
    p: "متوافقه مع جميع الأجهزه لتمكنك من متابعة عملك بشكل مستمر",
  },
];

const Features = () => {
  return (
    <section className="pt-20 sm:pt-28 2xl:pt-52">
      <Head title="مميزاتنا">
        تتميز بالمرونه والقدرة على تلبية كافة إحتياجتك بشكل فعال وفقاً لمتطلباتك
        ، مما يجعل تجربتك معنا متميزة
      </Head>
      <div className="flex items-start justify-between flex-wrap gap-8 sm:gap-12">
        {FEATURES.map(({ id, icon, h4, p }) => {
          return (
            <div
              key={id}
              className="flex items-start w-[220px] flex-col sm:w-[286px]"
            >
              <img
                src={icon}
                alt={h4}
                className="w-[75px] lg:w-[105px] mb-4"
                loading="lazy"
              />
              <h4 className="text-lg sm:text-xl lg:text-2xl font-[dinFontMedium]">
                {h4}
              </h4>
              <p className="text-secondary text-sm sm:text-xl lg:text-[22px] lg:leading-[30px] font-[dinFontMedium] max-w-full">
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
