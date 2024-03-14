import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo, payments } from "../../assets";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="w-full bg-primary mt-28 md:mt-52">
      <div className="container">
        {/* Head */}
        <div className="w-full py-16 xl:py-24 flex items-start flex-col sm:flex-row gap-x-24 justify-between gap-y-12 flex-wrap">
          {/* Col-1 */}
          <div className="flex flex-col items-start gap-4 lg:gap-6 max-w-[500px]">
            <img
              src={logo}
              alt="SkillTax - سكيل تاكس نظام الكاشير الامثل"
              className="w-[180px] xl:w-[220px]"
              loading="lazy"
            />
            <p className="text-[#FFFFFF99] text-sm sm:text-xl 2xl:text-2xl font-[dinFontRegularc]">
              نفخر بنظام نقاط البيع الخاص بنا المصمم خصيصًا للمطاعم والكافيهات،
              حيث ستجد تجربة لا مثيل لها في إدارة عملك وتحسين أدائه.
            </p>
            <img src={payments} className="w-[70%] max-w-full" loading="lazy" />
          </div>
          {/* Col-2 */}
          <div>
            <h3 className="text-lg sm:text-xl xl:text-2xl font-[dinFontMedium] text-white">
              روابط سريعة
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <HashLink smooth to="/#home">
                <p className="text-base xl:text-xl 2xl:text-xl text-[#FFFFFF99]">
                  الرئيسية
                </p>
              </HashLink>
              <HashLink smooth to="/#solution">
                <p className="text-base xl:text-xl 2xl:text-xl text-[#FFFFFF99]">
                  حلول سكيل تاكس
                </p>
              </HashLink>
              <HashLink smooth to="/#businessSolutions">
                <p className="text-base xl:text-xl 2xl:text-xl text-[#FFFFFF99]">
                  حلول خاصة لاعمالك
                </p>
              </HashLink>
              <Link to="/packages">
                <p className="text-base xl:text-xl 2xl:text-xl text-[#FFFFFF99]">
                  الأسعار
                </p>
              </Link>
            </div>
          </div>
          {/* Col-3 */}
          <div>
            <h3 className="text-lg sm:text-xl xl:text-2xl font-[dinFontMedium] text-white">
              روابط عامة
            </h3>
            <div className="flex flex-col gap-3 xl:gap-4 mt-4 lg:mt-6">
              <Link to="/">
                <p className="text-base xl:text-xl 2xl:text-xl text-[#FFFFFF99]">
                  الأسئلة الشائعة
                </p>
              </Link>
              <HashLink smooth to="/privacies#policy">
                <p className="text-base xl:text-xl 2xl:text-xl text-[#FFFFFF99]">
                  سياسة الخصوصية
                </p>
              </HashLink>
              <Link to="/">
                <p className="text-base xl:text-xl 2xl:text-xl text-[#FFFFFF99]">
                  شروط الاستخدام
                </p>
              </Link>
            </div>
          </div>
          {/* Col-4 */}
          <div>
            <h3 className="text-lg sm:text-xl xl:text-2xl font-[dinFontMedium] text-white">
              التواصل الاجتماعي
            </h3>
            <div className="flex flex-row gap-3 xl:gap-4 mt-4 lg:mt-6">
              <a href="https://www.instagram.com/skilltax.sa" target="_blank">
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
      <div className="bg-[#32336A] h-10 xl:h-[45px] w-full flex items-center justify-center">
        <p className="text-white text-sm xl:text-lg">
          جميع الحقوق محفوظة {year} &#169; SkillTax
        </p>
      </div>
    </div>
  );
};

export default Footer;
