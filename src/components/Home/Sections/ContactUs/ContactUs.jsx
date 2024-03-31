import ContactUsForm from "./ContactUsForm";
import { contactUs, messageError, messageSuccess } from "../../../../assets";
import { useState } from "react";

const ContactUs = () => {
  const [showForm, setShowForm] = useState({
    isSubmit: false,
    isSuccess: null,
    msg: "",
  });
  return (
    <section id="contactUs" className="pt-20 sm:pt-28 2xl:pt-40">
      <div className="w-full flex items-center lg:gap-12 flex-col-reverse lg:flex-row">
        {/* Right Card */}
        {/* Form */}
        {!showForm.isSubmit ? (
          <div className="w-full h-full lg:h-[850px] bg-[#F8F8F8] p-6 lg:p-10 border-[3px] border-[#EEEEEEEE] rounded-[40px]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-[dinFontBold]">
              تواصل معنا
            </h2>
            {/* Contact Us Form */}
            <ContactUsForm onSendMsg={setShowForm} />
          </div>
        ) : (
          <div className="w-full h-full lg:h-[850px] flex items-center justify-center flex-col">
            <img
              src={showForm.isSuccess ? messageSuccess : messageError}
              alt="message"
              className="w-[35%] max-w-full bg-contain"
            />
            <p className="text-secondary sm:text-start text-sm sm:text-base lg:text-lg font-[dinFontMedium] max-w-full">
              {showForm.msg}
            </p>
          </div>
        )}
        {/* Left Card */}
        <div
          className={`${
            !showForm.isSubmit ? "bottom-[-64px] pb-16" : "bottom-0 mb-12 py-4"
          } w-full lg:h-[850px] lg:pb-0 flex items-end rounded-[40px] relative z-[-1] lg:bottom-0 overflow-hidden bg-cover bg-center`}
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
            <h3 className="text-xl sm:text-2xl lg:text-3xl">
              افضل نظام ادارة نقاط البيع
            </h3>
            <p className="text-sm sm:text-lg lg:text-xl">
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
