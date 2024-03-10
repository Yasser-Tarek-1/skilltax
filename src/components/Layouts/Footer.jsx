import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logo, payments } from "../../assets";
const Footer = () => {
  return (
    <div className="w-full bg-primary mt-28 md:mt-52">
      <div className="container mx-auto px-4">
        {/* Center */}
        <div className="w-full py-16 xl:py-24 flex items-start gap-x-40 gap-y-12 flex-wrap">
          {/* 1 */}
          <div className="flex flex-col items-start gap-4 lg:gap-6 max-w-[500px]">
            <img src={logo} className="w-40 xl:w-64" loading="lazy" />
            <p className="text-[#FFFFFF99] text-[15px] w-[90%] xl:text-[22px] xl:leading-[30px] font-[dinFontRegularc]">
              نفخر بنظام نقاط البيع الخاص بنا المصمم خصيصًا للمطاعم والكافيهات،
              حيث ستجد تجربة لا مثيل لها في إدارة عملك وتحسين أدائه.
            </p>
            <img src={payments} className="w-[70%] max-w-full" loading="lazy" />
          </div>
          {/* 2 */}
          <div>
            <h3 className="text-xl xl:text-2xl font-[dinFontBold] text-white">
              روابط سريعة
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <HashLink to="/#home">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  الرئيسية
                </p>
              </HashLink>
              <HashLink to="/#solution">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  حلول سكيل تاكس
                </p>
              </HashLink>
              <HashLink to="/#moreSolution">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  حلول خاصة لاعمالك
                </p>
              </HashLink>
              <Link to="/packages">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  الأسعار
                </p>
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div>
            <h3 className="text-xl xl:text-2xl font-[dinFontBold] text-white">
              روابط عامة
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <Link to="/">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  الأسئلة الشائعة
                </p>
              </Link>
              <HashLink to="/privacy-policy#policy">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  سياسة خصوصية
                </p>
              </HashLink>
              <Link to="/">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  شروط الاستخدام
                </p>
              </Link>
            </div>
          </div>
          {/* 4 */}
          <div>
            <h3 className="text-xl xl:text-2xl font-[dinFontBold] text-white">
              التواصل الاجتماعي
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <a target="_blank">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  انستقرام
                </p>
              </a>
              <a target="_blank">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  لينكد ان
                </p>
              </a>
              <a target="_blank">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  يوتيوب
                </p>
              </a>
              <a target="_blank">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  تويتر
                </p>
              </a>
              <a href="https://wa.me/+966553559038" target="_blank">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  واتس اب
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#32336A] h-10 xl:h-[55px] w-full flex items-center justify-center">
        <p className="text-white text-sm lg:text-base 2xl:text-xl">
          جميع الحقوق محفوظة 2024 © SkillTax
        </p>
      </div>
    </div>
  );
};

export default Footer;
