import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { logo } from "../assets";
import Screen from "../components/Home/Screen";
import HelmetSEO from "../HelmetSEO/HelmetSEO";

const SEO_PRIVACIES = {
  title: "SkillTax - سياسة الخصوصية",
  description:
    "صفحة سياسية الخصوصية الخاصة بنظام سكيل تاكس لادارة نقاط البيع والمطاعم",
  keywords: "سياسة الخصوصيه, ما هو نظام سكيل تاكس, سياسة سكيل تاكس",
};

const Privacies = () => {
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
      <HelmetSEO {...SEO_PRIVACIES} />
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
                <div
                  aria-label="Loading..."
                  role="status"
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="h-20 w-20 animate-spin stroke-[#FFF]"
                    viewBox="0 0 256 256"
                  >
                    <line
                      x1="128"
                      y1="32"
                      x2="128"
                      y2="64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="60.1"
                      x2="173.3"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="224"
                      y1="128"
                      x2="192"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="195.9"
                      x2="173.3"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="128"
                      y1="224"
                      x2="128"
                      y2="192"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="195.9"
                      x2="82.7"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="32"
                      y1="128"
                      x2="64"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="60.1"
                      x2="82.7"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                  </svg>
                </div>
              </div>
            )}
            {!isLoading && !isError && (
              <div className="flex flex-col">
                <div dir="ltr" className="text-white pe-3 ps-9 lg:px-32">
                  <ol start={1} className="list-decimal">
                    {data.map(({ id, en_first, second }) => {
                      return (
                        <div key={id}>
                          <li
                            className="text-lg xl:text-2xl mt-3 mb-2"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(en_first),
                            }}
                          ></li>
                          {second.length > 0 && (
                            <ul className="list-disc text-sm xl:text-lg gap-2 lg:gap-1 flex flex-col ps-2 sm:ps-4">
                              {second?.map(({ id: id_2, en_second, third }) => {
                                return (
                                  <>
                                    <li
                                      key={id_2}
                                      dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(en_second),
                                      }}
                                    ></li>
                                    {third.length > 0 && (
                                      <ol
                                        start={1}
                                        className="list-decimal ps-2 sm:ps-4"
                                      >
                                        {third?.map(
                                          ({ id: id_3, en_third }) => {
                                            return (
                                              <li
                                                key={id_3}
                                                dangerouslySetInnerHTML={{
                                                  __html:
                                                    DOMPurify.sanitize(
                                                      en_third
                                                    ),
                                                }}
                                              ></li>
                                            );
                                          }
                                        )}
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
                <h3
                  className="w-full text-center my-6
                 text-xl xl:text-3xl text-white mx-auto"
                >
                  سياسة الخصوصية
                </h3>
                <div dir="rtl" className="text-white pe-3 ps-9 lg:px-32">
                  <ol start={1} className="list-decimal">
                    {data.map(({ id, ar_first, second }) => {
                      return (
                        <div key={id}>
                          <li
                            className="text-lg xl:text-2xl mt-3 mb-2"
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
                                        className="list-decimal ps-2 sm:ps-4 gap-2 lg:gap-1 "
                                      >
                                        {third?.map(
                                          ({ id: id_3, ar_third }) => {
                                            return (
                                              <li
                                                key={id_3}
                                                dangerouslySetInnerHTML={{
                                                  __html:
                                                    DOMPurify.sanitize(
                                                      ar_third
                                                    ),
                                                }}
                                              ></li>
                                            );
                                          }
                                        )}
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

export default Privacies;
