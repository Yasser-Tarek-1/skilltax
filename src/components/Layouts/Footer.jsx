import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logo, payments } from "../../assets";
import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="w-full bg-primary mt-28 md:mt-52">
      <div className="container mx-auto px-4">
        {/* Head */}
        <div className="w-full py-16 xl:py-24 flex items-start gap-x-40 gap-y-12 flex-wrap">
          {/* Col-1 */}
          <div className="flex flex-col items-start gap-4 lg:gap-6 max-w-[500px]">
            <img src={logo} className="w-40 xl:w-64" loading="lazy" />
            <p className="text-[#FFFFFF99] text-[15px] w-[90%] xl:text-[22px] xl:leading-[30px] font-[dinFontRegularc]">
              نفخر بنظام نقاط البيع الخاص بنا المصمم خصيصًا للمطاعم والكافيهات،
              حيث ستجد تجربة لا مثيل لها في إدارة عملك وتحسين أدائه.
            </p>
            <img src={payments} className="w-[70%] max-w-full" loading="lazy" />
          </div>
          {/* Col-2 */}
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
              <HashLink to="/#businessSolutions">
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
          {/* Col-3 */}
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
                  سياسة الخصوصية
                </p>
              </HashLink>
              <Link to="/">
                <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  شروط الاستخدام
                </p>
              </Link>
            </div>
          </div>
          {/* Col-4 */}
          <div>
            <h3 className="text-xl xl:text-2xl font-[dinFontBold] text-white">
              التواصل الاجتماعي
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <a href="https://www.instagram.com/skilltax.sa" target="_blank">
                {/* <p className="text-lg xl:text-[22px] xl:leading-[30px] text-[#FFFFFF99]">
                  انستقرام
                </p> */}
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="#FFFFFF99"
                  size={"2xl"}
                />
              </a>
              <a
                href="https://twitter.com/skilltax?s=21&t=mjl-yGP7nqug1de3rxbgWQ"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  color="#FFFFFF99"
                  size={"2xl"}
                />
              </a>
              <a href="https://wa.me/+966553559038" target="_blank">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  color="#FFFFFF99"
                  size={"2xl"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Copy Rights */}
      <div className="bg-[#32336A] h-10 xl:h-[55px] w-full flex items-center justify-center">
        <p className="text-white text-sm lg:text-base 2xl:text-xl">
          جميع الحقوق محفوظة {year} © SkillTax
        </p>
      </div>
    </div>
  );
};

export default Footer;
