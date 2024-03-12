import { useEffect, useState } from "react";
import { logo } from "../assets";
import Screen from "../components/Home/Screen";
import HelmetSeo from "../components/Seo/HelmetSeo";
import DOMPurify from "dompurify";

const PrivacyPolicy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dash.wajen.net/api/privacies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <HelmetSeo title={"SkillTax - سياسة الخصوصية"} />
      <div className="w-full ">
        <div className="bg-primary md:bg-gradient-to-r from-orange to-30% from-30% to-primary md:bg-transparent">
          <Screen />
        </div>
        {/* Sections */}
        <div id="policy" className="container mx-auto px-4 pt-10 sm:pt-20">
          <div className="w-full mb-10 lg:mb-16 flex justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-[35px] lg:leading-[50px] font-[dinFontBold]">
              السياسة والخصوصية
            </h3>
          </div>
          <div className="w-full py-8 lg:py-12 bg-primary rounded-[40px]">
            <h4 className="flex items-center justify-center mb-10 lg:mb-16">
              <img src={logo} className="h-6 lg:h-14" />
            </h4>
            <div className="text-white pe-3 ps-10 lg:px-32">
              <ol start={1} className="list-decimal">
                {data.map(({ id, ar_first, second }) => {
                  return (
                    <div key={id}>
                      <li
                        className="text-lg lg:text-2xl mb-3"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(ar_first),
                        }}
                      ></li>
                      {second.length > 0 && (
                        <ul className="list-disc text-sm lg:text-lg gap-2 lg:gap-1 flex flex-col ps-2 sm:ps-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
