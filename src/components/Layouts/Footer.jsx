import { HashLink } from "react-router-hash-link";

import { logo, payments, zakat } from "../../assets";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full bg-primary mt-28 md:mt-52">
      <div className="container">
        {/* Head */}
        <div className="w-full py-16 xl:py-24 flex items-start flex-col sm:flex-row gap-x-6 justify-between gap-y-12 flex-wrap">
          {/* Col-1 */}
          <div className="flex flex-col items-start gap-4 lg:gap-4 max-w-[500px]">
            <img
              src={logo}
              alt="SkillTax - سكيل تاكس نظام الكاشير الامثل"
              className="w-[180px] h-full"
              loading="lazy"
            />
            <p className="text-[#FFFFFF99] text-sm sm:text-lg xl:text-xl font-[dinFontRegular]">
              نفخر بنظام نقاط البيع الخاص بنا المصمم خصيصًا للمطاعم والكافيهات،
              حيث ستجد تجربة لا مثيل لها في إدارة عملك وتحسين الاداء.
            </p>
            <div className="flex items-center justify-center flex-col">
              <p className="text-base lg:text-lg text-[#FFFFFF99]">متوافق مع</p>
              <img
                src={zakat}
                className="w-[70%] sm:w-[60%] h-full max-w-full"
                loading="lazy"
                alt="zakat"
              />
            </div>
          </div>
          {/* Col-2 */}
          <div className="w-[200px]">
            <h3 className="text-lg sm:text-base lg:text-xl font-[dinFontMedium] text-white">
              روابط سريعة
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <HashLink smooth to="/#home">
                <p className="text-base lg:text-lg text-[#FFFFFF99]">
                  الرئيسية
                </p>
              </HashLink>
              <HashLink smooth to="/#solution">
                <p className="text-base lg:text-lg text-[#FFFFFF99]">
                  حلول سكيل تاكس
                </p>
              </HashLink>
              <HashLink smooth to="/#businessSolutions">
                <p className="text-base lg:text-lg text-[#FFFFFF99]">
                  حلول خاصة لاعمالك
                </p>
              </HashLink>
              <HashLink to="/packages#prices">
                <p className="text-base lg:text-lg text-[#FFFFFF99]">الأسعار</p>
              </HashLink>
            </div>
          </div>
          {/* Col-3 */}
          <div className="w-[200px]">
            <h3 className="text-lg sm:text-base lg:text-xl font-[dinFontMedium] text-white">
              روابط عامة
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <HashLink smooth to="/faqs#faqs">
                <p className="text-base lg:text-lg text-[#FFFFFF99]">
                  الأسئلة الشائعة
                </p>
              </HashLink>
              <HashLink smooth to="/privacies#policy">
                <p className="text-base lg:text-lg text-[#FFFFFF99]">
                  سياسة الخصوصية
                </p>
              </HashLink>
              {/* <Link> */}
              <p className="text-base lg:text-lg text-[#FFFFFF99] cursor-pointer">
                شروط الاستخدام
              </p>
              {/* </Link> */}
            </div>
          </div>
          {/* Col-4 */}
          <div className="max-w-[60%] sm:max-w-[200px]">
            <h3 className="text-lg sm:text-base lg:text-xl font-[dinFontMedium] text-white">
              التواصل الاجتماعي
            </h3>
            <div className="flex flex-row gap-3 xl:gap-4 mt-4 lg:mt-6">
              <a
                aria-label="Contact us via Instagram"
                href="https://www.instagram.com/skilltax.sa"
                target="_blank"
              >
                <FaInstagram size={26} color="#FFFFFF99" />
              </a>
              <a
                aria-label="Contact us via Twitter"
                href="https://twitter.com/skilltax?s=21&t=mjl-yGP7nqug1de3rxbgWQ"
                target="_blank"
              >
                <RiTwitterXLine size={26} color="#FFFFFF99" />
              </a>
              <a
                aria-label="Contact us via WhatsApp"
                href="https://wa.me/+966553559038"
                target="_blank"
              >
                <FaWhatsapp size={26} color="#FFFFFF99" />
              </a>
            </div>
            <img
              src={payments}
              className="w-full h-full max-w-full mt-2 lg:mt-3"
              loading="lazy"
              alt="payments"
            />
          </div>
        </div>
      </div>{" "}
      {/* Copy Rights */}
      <div className="bg-[#32336A] h-10 w-full flex items-center justify-center">
        <p className="text-white text-sm lg:text-base">
          جميع الحقوق محفوظة {new Date().getFullYear()} &#169; SkillTax
        </p>
      </div>
    </div>
  );
};

export default Footer;
