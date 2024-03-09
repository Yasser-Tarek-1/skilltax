const ContactUs = () => {
  return (
    <section id="contactUs" className="pt-20 sm:pt-28 2xl:pt-52">
      <div className="w-full flex items-center lg:gap-8 flex-col-reverse lg:flex-row">
        {/* Right Card */}
        <div className="w-full h-[830px] bg-[#F8F8F8] p-6 lg:p-10 border-[3px] border-[#EEEEEEEE] rounded-[40px]">
          <h3 className="text-xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold]">
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
                  className="w-full outline-none border-[1.5] border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-7 lg:px-8"
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
                  className="w-full outline-none border-[1.5] border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-7 lg:px-8"
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
                className="w-full outline-none border-[1.5] border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-7 lg:px-8"
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
                className="w-full outline-none border-[1.5] border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-7 lg:px-8"
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
                className="w-full outline-none border-[1.5] border-[#ECECEC] rounded-[100px] h-14 lg:h-16 px-7 lg:px-8"
                placeholder="اكتب أسم النشاط هنا"
              />
            </div>
            <button className=" bg-primary rounded-[100px] h-14 lg:h-16 w-full lg:w-[50%] text-white">
              ارسال
            </button>
          </form>
        </div>
        {/* Left Card */}
        <div
          className="w-full lg:h-[830px] pb-16 lg:pb-0 flex items-end rounded-[40px] relative bottom-[-64px] z-[-1] lg:bottom-0 overflow-hidden bg-cover"
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/6e1a/d2d2/645235ad9879ca56fe186be99b4161de?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LlaCR37UCyPqvcKqVfAtWkQC2ORY1ELcVK9d2u86wpgaq4SlMPe8CHJHTt9fjeyZC1ouV2U8IUdxxRdaBpPsj75uQ6fPllM8oLXr2ZQUF0sKqBTs5c4KxGihMtnSoDr3I87rtVVIpe900GtDvTDznSkuMDOQfMAkTBYqujF7-5oPfwr-ka-l7lAfR8KtBhFbBzfZrmpQvFIdN1leD-ecll-yIrTtSeNxRHp15Cubbhn3yr7lexaeoZyIel-qeIZKWtugaxkm6ZQoogCnKEL35F~vRJ6CLG~r4r-zGZhb81bHEpUsWNLjdFTryuxicWJNXTCGPc5bfnKgcdCoaE4dig__)",
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
          <div className="relative z-10 p-9 lg:p-12 text-white">
            <h4 className="text-xl xl:text-[30px] xl:leading-[44px]">
              افضل نظام ادارة نقاط البيع
            </h4>
            <p className="text-sm xl:text-2xl xl:leading-[44px]">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
