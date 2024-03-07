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
    title: "المنيو الالكتروني",
    text: "هذه الميزة ليست متوفرة حاليا في نظام سكيل تاكس سيتم اضافتها قريبا...",
    icon: gift,
  },
];

const Options = () => {
  return (
    <section id="#" className="pt-28 md:pt-52">
      <Head title="المزيد من الحلول">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى،
      </Head>

      <div className="flex gap-8 items-center mt-[55px] flex-wrap">
        {/* Card */}
        {ALL_OPTIONS.map(({ id, title, text, icon }) => {
          return (
            <div
              key={id}
              className="w-full sm:w-[470px] h-[560px] border-[1.5px] p-7 shadow border-[#EEEEEE] flex justify-between flex-col items-center rounded-[40px]"
            >
              <img src={icon} alt="image" className="h-[370px]" />
              <div className="w-full">
                <h4 className="text-[18px] sm:text-[22px] lg:text-[25px]">
                  {title}
                </h4>
                <p className="text-[15px] sm:text-[18] lg:text-[23px] text-secondary">
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

export default Options;
