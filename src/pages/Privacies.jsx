import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import Screen from "../components/Home/Screen";
import LoadingSpin from "../components/Layouts/LoadingSpin";
import HelmetSEO from "../HelmetSEO/HelmetSEO";
import { getPrivacies } from "../store/privaciesSlice";
import { logo } from "../assets";
import ErrorAlert from "../components/Layouts/ErrorAlert";

const SEO_PRIVACIES = {
  title: "SkillTax - سياسة الخصوصية",
  description:
    "صفحة سياسية الخصوصية الخاصة بنظام سكيل تاكس لادارة نقاط البيع والمطاعم",
  keywords: "سياسة الخصوصيه, ما هو نظام سكيل تاكس, سياسة سكيل تاكس",
};

const Privacies = () => {
  const { privacies, isError, isLoading } = useSelector(
    (state) => state.privacies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrivacies());
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
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-[dinFontBold]">
              السياسة والخصوصية
            </h2>
          </div>
          {isError && !isLoading && <ErrorAlert />}
          {!isError && (
            <div className="w-full py-8 lg:py-12 bg-primary rounded-[40px]">
              <h3 className="flex items-center justify-center mb-10 lg:mb-16">
                <img
                  src={logo}
                  className="h-6 w-full lg:h-10"
                  alt="SkillTax - سكيل تاكس نظام الكاشير الامثل"
                />
              </h3>
              {isLoading && (
                <div className="w-full mx-auto flex items-center justify-center">
                  <LoadingSpin />
                </div>
              )}
              {!isLoading && !isError && (
                <div className="flex flex-col">
                  <div dir="ltr" className="text-white pe-3 ps-9 lg:px-32">
                    <ol start={1} className="list-decimal">
                      {privacies.map(({ id, en_first, second }) => {
                        return (
                          <li key={id} className="text-lg xl:text-xl">
                            <div className="mt-3 mb-2">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: DOMPurify.sanitize(en_first),
                                }}
                              />
                            </div>
                            {second.length > 0 && (
                              <ul className="list-disc text-sm xl:text-base gap-2 lg:gap-1 flex flex-col ps-2 sm:ps-4">
                                {second?.map(
                                  ({ id: id_2, en_second, third }) => {
                                    return (
                                      <li key={id_2}>
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              DOMPurify.sanitize(en_second),
                                          }}
                                        />
                                        {third.length > 0 && (
                                          <ol
                                            start={1}
                                            className="list-decimal ps-2 sm:ps-4"
                                          >
                                            {third?.map(
                                              ({ id: id_3, en_third }) => {
                                                return (
                                                  <li key={id_3}>
                                                    <span
                                                      dangerouslySetInnerHTML={{
                                                        __html:
                                                          DOMPurify.sanitize(
                                                            en_third
                                                          ),
                                                      }}
                                                    />
                                                  </li>
                                                );
                                              }
                                            )}
                                          </ol>
                                        )}
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            )}
                          </li>
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
                      {privacies.map(({ id, ar_first, second }) => {
                        return (
                          <li key={id} className="text-lg xl:text-xl">
                            <div className="mt-3 mb-2">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: DOMPurify.sanitize(ar_first),
                                }}
                              />
                            </div>
                            {second.length > 0 && (
                              <ul className="list-disc text-sm xl:text-base gap-2 lg:gap-1 flex flex-col ps-2 sm:ps-4">
                                {second?.map(
                                  ({ id: id_2, ar_second, third }) => {
                                    return (
                                      <li key={id_2}>
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              DOMPurify.sanitize(ar_second),
                                          }}
                                        />
                                        {third.length > 0 && (
                                          <ol
                                            start={1}
                                            className="list-decimal ps-2 sm:ps-4"
                                          >
                                            {third?.map(
                                              ({ id: id_3, ar_third }) => {
                                                return (
                                                  <li key={id_3}>
                                                    <span
                                                      dangerouslySetInnerHTML={{
                                                        __html:
                                                          DOMPurify.sanitize(
                                                            ar_third
                                                          ),
                                                      }}
                                                    />
                                                  </li>
                                                );
                                              }
                                            )}
                                          </ol>
                                        )}
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Privacies;
