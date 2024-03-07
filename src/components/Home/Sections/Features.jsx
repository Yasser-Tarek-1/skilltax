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
    <section id="#" className="pt-28 sm:pt-52">
      <Head title="مميزاتنا">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى،
      </Head>
      <div className="pt-10 sm:pt-16 flex items-start justify-between flex-wrap gap-10">
        {FEATURES.map(({ id, icon, h4, p }) => {
          return (
            <div key={id} className="flex items-start flex-col w-[286px]">
              <img src={icon} alt="icon" className="w-20 sm:w-[105px] mb-4" />
              <h4 className="text-lg sm:text-[25px] font-[dinFontMedium]">
                {h4}
              </h4>
              <p className="text-secondary text-[15px] sm:text-[23px] font-[dinFontMedium] w-[156px] sm:w-full">
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
