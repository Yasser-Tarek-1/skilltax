import { Link } from "react-router-dom";
import { logo, payments } from "../../assets";
const Footer = () => {
  return (
    <div className="w-full bg-primary mt-28 md:mt-52">
      <div className="container mx-auto px-4">
        {/* Center */}
        <div className="w-full py-16 md:py-24 flex items-start gap-x-40 gap-y-12 flex-wrap">
          {/* 1 */}
          <div className="flex flex-col items-start gap-4 lg:gap-6 max-w-[500px]">
            <img src={logo} className=" w-40 lg:w-64" />
            <p className="text-[#FFFFFF99] text-[15px] w-[90%] lg:text-[23px] font-[dinFontRegularc]">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة.
            </p>
            <img src={payments} className="w-full max-w-full" />
          </div>
          {/* 2 */}
          <div>
            <h3 className="text-[20px] lg:text-[25px] font-[dinFontBold] text-white">
              روابط سريعة
            </h3>
            <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-6">
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  الرئيسية
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  حلول سكيل تاكس
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  حلول خاصة لاعمالك
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  الأسعار
                </p>
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div>
            <h3 className="text-[20px] lg:text-[25px] font-[dinFontBold] text-white">
              روابط عامة
            </h3>
            <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-6">
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  الأسئلة الشائعة
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  سياسة خصوصية
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  شروط الاستخدام
                </p>
              </Link>
            </div>
          </div>
          {/* 4 */}
          <div>
            <h3 className="text-[20px] lg:text-[25px] font-[dinFontBold] text-white">
              التواصل الاجتماعي
            </h3>
            <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:mt-6">
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  انستقرام
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  فيس بوك
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  يوتيوب
                </p>
              </Link>
              <Link to="/">
                <p className="text-[18px] lg:text-[23px] text-[#FFFFFF99]">
                  تويتر
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#32336A] h-[55px] w-full flex items-center justify-center">
        <p className="text-white text-[14px] lg:text-[20px] font-[dinFontRegular]">
          جميع الحقوق محفوظة 2024 © لنظام سكيل تاكس
        </p>
      </div>
    </div>
  );
};

export default Footer;
