import { contactUs } from "../../../assets";

const ContactUs = () => {
  return (
    <section id="contactUs" className="pt-20 sm:pt-28 2xl:pt-40">
      <div className="w-full flex items-center lg:gap-8 flex-col-reverse lg:flex-row">
        {/* Right Card */}
        <div className="w-full h-[830px] bg-[#F8F8F8] p-6 lg:p-10 border-[3px] border-[#EEEEEEEE] rounded-[40px]">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold]">
            تواصل معنا
          </h3>
          {/* Contact Us Form */}
          <form className="mt-10 flex flex-col gap-9">
            <div className="flex items-center gap-8 w-full flex-col lg:flex-row">
              <div className="flex items-start flex-col gap-3 w-full">
                <label className="text-base xl:text-lg" htmlFor="name">
                  الاسم
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full outline-none border-[1.5] text-sm border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-4 sm:px-7 lg:px-8"
                  placeholder="اكتب اسمك هنا"
                />
              </div>
              <div className="flex items-start flex-col gap-3 w-full">
                <label className="text-base xl:text-lg" htmlFor="activity">
                  نوع النشاط
                </label>
                <input
                  id="activity"
                  type="text"
                  className="w-full outline-none border-[1.5] text-sm border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-4 sm:px-7 lg:px-8"
                  placeholder="اكتب نوع النشاط"
                />
              </div>
            </div>
            <div className="flex items-start flex-col gap-3 w-full">
              <label className="text-base xl:text-lg" htmlFor="phone">
                رقم الهاتف
              </label>
              <input
                id="phone"
                type="nubmer"
                className="w-full outline-none border-[1.5] text-sm border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-4 sm:px-7 lg:px-8"
                placeholder="اكتب رقم الهاتف هنا"
              />
            </div>
            <div className="flex items-start flex-col gap-3 w-full">
              <label className="text-base xl:text-lg" htmlFor="email">
                البريد الالكتروني
              </label>
              <input
                id="email"
                type="email"
                className="w-full outline-none border-[1.5] text-sm border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-4 sm:px-7 lg:px-8"
                placeholder="اكتب بريدك الالكتروني هنا"
              />
            </div>
            <div className="flex items-start flex-col gap-3 w-full">
              <label className="text-base xl:text-lg" htmlFor="company">
                أسم النشاط{" "}
              </label>
              <input
                id="company"
                type="text"
                className="w-full outline-none border-[1.5] text-sm border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-4 sm:px-7 lg:px-8"
                placeholder="اكتب أسم النشاط هنا"
              />
            </div>
            <button
              type="button"
              className=" bg-primary rounded-[100px] h-14 lg:h-16 w-full lg:w-[50%] text-white"
            >
              ارسال
            </button>
          </form>
        </div>
        {/* Left Card */}
        <div
          className="w-full lg:h-[830px] pb-16 lg:pb-0 flex items-end rounded-[40px] relative bottom-[-64px] z-[-1] lg:bottom-0 overflow-hidden bg-cover"
          style={{
            backgroundImage: `url(${contactUs})`,
          }}
          loading="lazy"
        >
          <div
            className="w-full h-full absolute inset-0 z-[1] bg-cover"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          ></div>
          <div className="relative z-10 p-6 lg:p-12 text-white">
            <h4 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold]">
              افضل نظام ادارة نقاط البيع
            </h4>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl">
              احصل على نسختك الآن واستفد من الخدمات المتميزة التي يقدمها
              Skilltax في إدارة مطعمك .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
