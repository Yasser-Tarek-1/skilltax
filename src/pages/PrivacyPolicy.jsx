import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { logo } from "../assets";
import Screen from "../components/Home/Screen";
import HelmetSEO from "../components/SEO/HelmetSEO";

const SEO = {
  title: "SkillTax - سياسة الخصوصية",
  description:
    "صفحة سياسية الخصوصية الخاصة بنظام سكيل تاكس لادارة نقاط البيع والمطاعم",
  keywords: "سياسة الخصوصيه, ما هو نظام سكيل تاكس, سياسة سكيل تاكس",
};

const PrivacyPolicy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch("https://dash.wajen.net/api/privacies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HelmetSEO {...SEO} />
      <div className="w-full ">
        <div className="bg-primary md:bg-gradient-to-r from-orange to-30% from-30% to-primary md:bg-transparent">
          <Screen />
        </div>
        {/* Sections */}
        <div id="policy" className="container mx-auto px-4 pt-10 sm:pt-20">
          <div className="w-full mb-10 lg:mb-16 flex justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold]">
              السياسة والخصوصية
            </h3>
          </div>

          <div className="w-full py-8 lg:py-12 bg-primary rounded-[40px]">
            <h4 className="flex items-center justify-center mb-10 lg:mb-16">
              <img src={logo} className="h-6 lg:h-14" />
            </h4>
            {isLoading && (
              <div className="w-full mx-auto flex items-center justify-center">
                <div className="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
            {!isLoading && !isError && (
              <div className="text-white pe-3 ps-9 lg:px-32">
                <ol start={1} className="list-decimal">
                  {data.map(({ id, ar_first, second }) => {
                    return (
                      <div key={id}>
                        <li
                          className="text-lg xl:text-2xl mb-3"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(ar_first),
                          }}
                        ></li>
                        {second.length > 0 && (
                          <ul className="list-disc text-sm xl:text-lg gap-2 lg:gap-1 flex flex-col ps-2 sm:ps-4">
                            {second?.map(({ id: id_2, ar_second, third }) => {
                              return (
                                <>
                                  <li
                                    key={id_2}
                                    dangerouslySetInnerHTML={{
                                      __html: DOMPurify.sanitize(ar_second),
                                    }}
                                  ></li>
                                  {third.length > 0 && (
                                    <ol
                                      start={1}
                                      className="list-decimal ps-2 sm:ps-4"
                                    >
                                      {third?.map(({ id: id_3, ar_third }) => {
                                        return (
                                          <li
                                            key={id_3}
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                DOMPurify.sanitize(ar_third),
                                            }}
                                          ></li>
                                        );
                                      })}
                                    </ol>
                                  )}
                                </>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </ol>
              </div>
            )}
            {isError && !isLoading && (
              <div className="text-center text-red-600 sm:text-xl">
                حدث خطأ ما حاول لاحقا
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
