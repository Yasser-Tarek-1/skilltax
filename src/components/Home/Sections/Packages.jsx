import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { trueIcon, trueIcon_main } from "../../../assets";
import Head from "../../Layouts/Head";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ALL_PACKAGES = [
  {
    id: 1,
    isMain: false,
  },
  {
    id: 2,
    isMain: true,
  },
  {
    id: 3,
    isMain: false,
  },
];

const Packages = () => {
  const navigate = useNavigate();
  return (
    <section id="packages" className="pt-20 sm:pt-28 2xl:pt-52">
      <Head title="الباقات">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى،
      </Head>
      <div className="flex items-center gap-8 2xl:gap-20 mt-24 flex-wrap">
        {ALL_PACKAGES.map(({ id, isMain }) => {
          return (
            <div
              key={id}
              className={`${
                isMain ? "2xl:scale-[1.2] bg-primary" : "bg-[#F8F8F8]"
              }  text-white rounded-[40px] p-5 xl:p-7 w-full sm:w-[330px] xl:w-[430px] 2xl:flex-1 flex items-center flex-col gap-7 xl:gap-12`}
            >
              {/* Title */}
              <div
                className={`${
                  isMain ? "text-white" : "text-black"
                } text-center max-w-[270px] `}
              >
                <h4 className="text-lg xl:text-[26px] xl:leading-[42.61px]">
                  باقة البداية
                </h4>
                <p className="text-xs xl:text-sm">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص
                </p>
              </div>
              {/* Price */}
              <div
                className={`${
                  isMain ? "text-white" : "text-black"
                } text-center`}
              >
                <p
                  className={`${
                    isMain ? "text-white" : "text-[#000000CC]"
                  } text-sm xl:text-xl `}
                >
                  شهريا
                </p>
                <p className="text-[40px] leading-[65px] xl:text-[60px] font-[dinFontBold]">
                  50.99 رس
                </p>
              </div>
              {/* Features */}
              <div
                className={`${
                  isMain ? "text-white" : "text-[#000000CC]"
                } flex items-center flex-col gap-4`}
              >
                {[{}, {}, {}, {}, {}].map((_, idx) => {
                  return (
                    <p
                      key={idx}
                      className="text-sm lg:text-lg flex items-center gap-3"
                    >
                      <span>
                        <FontAwesomeIcon
                          icon={faCheck}
                          size="xl"
                          color={isMain ? "#FFFFFFCC " : "#000000CC"}
                          className="w-full mx-auto"
                        />
                      </span>
                      <span
                        className={`${
                          isMain ? "text-[#FFFFFFCC]" : "text-[#000000CC]"
                        } text-sm xl:text-lg `}
                      >
                        هذا النص هو مثال لنص يمكن أن يستبدل
                      </span>
                    </p>
                  );
                })}
              </div>
              {/* Select */}
              <button
                onClick={() => navigate("/packages")}
                className={`${
                  isMain ? "text-primary bg-white" : "text-white bg-primary"
                } w-full h-11 lg:h-14 text-xs xl:text-lg rounded-full`}
              >
                اختر الباقة
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Packages;
