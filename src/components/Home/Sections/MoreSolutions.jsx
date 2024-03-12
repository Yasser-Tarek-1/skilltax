import { email, gift, qrCode } from "../../../assets";
import Head from "../../Layouts/Head";

const ALL_OPTIONS = [
  {
    id: 1,
    title: "المنيو الالكتروني",
    text: "دون عناء أو اشتراكات اخرى وفرنا المنيو الالكتروني الدائم مع باقات سكيل تاكس",
    icon: qrCode,
  },
  {
    id: 2,
    title: "الرسائل النصية",
    text: "أرسال العروض والخصومات للعملاء من خلال لوحة تحكم سكيل تاكس",
    icon: email,
  },
  {
    id: 3,
    title: "نظام الولاء",
    text: "عزز التواصل مع عملائك من خلال تقديم نقاط المكافآت . تعمل نقاط المكافآت كمزايا جذابة تحفز العملاء على المشتريات  وتعزز رضاهم عن خدماتك ومنتجاتك.",
    icon: gift,
  },
];

const MoreSolutions = () => {
  return (
    <section className="pt-20 sm:pt-28 2xl:pt-52">
      <Head title="المزيد من الحلول">
        تمتع بالكثير من الحلول الفعالة المقدمة مع باقات سكيل تاكس أو منفردة
      </Head>
      <div className="flex gap-8 items-center mt-[55px] flex-wrap">
        {/* Card */}
        {ALL_OPTIONS.map(({ id, title, text, icon }) => {
          return (
            <div
              key={id}
              className="w-full min-h-[380px] sm:w-[300px] xl:w-[470px] xl:min-h-[560px] border-[1.5px] p-7 shadow border-[#EEEEEE] flex justify-between flex-col items-center rounded-[40px]"
            >
              <img
                src={icon}
                alt={title}
                className="h-[260px] xl:h-[370px]"
                loading="lazy"
              />
              <div className="w-full">
                <h4 className="text-lg sm:text-[22px] xl:text-2xl">{title}</h4>
                <p className="text-sm sm:text-lg xl:text-[22px] text-secondary">
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
