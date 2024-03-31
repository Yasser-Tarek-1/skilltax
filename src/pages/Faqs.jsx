import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../store/faqsSlice";
import Screen from "../components/Home/Screen";
import LoadingSpin from "../components/Layouts/LoadingSpin";
import HelmetSEO from "../HelmetSEO/HelmetSEO";
import { FaPlus, FaWindowMinimize } from "react-icons/fa6";
import ErrorAlert from "../components/Layouts/ErrorAlert";

const SEO_Faqs = {
  title: "SkillTax - الاسئلة الشائعة",
  description:
    "صفحة الاسئلة الشائعة الخاصة بنظام سكيل تاكس لادارة نقاط البيع والمطاعم",
  keywords: "الاسئلة الشائعة, شروط الاشتراك, قطاعات الذي يخدمها نظام سكيل تاكس",
};

const Faqs = () => {
  const { faqs, isLoading, isError } = useSelector((state) => state.faqs);

  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(null);

  useEffect(() => {
    dispatch(getFaqs());
  }, []);

  const showAnswerHandler = (id) => {
    if (showAnswer == id) {
      setShowAnswer(null);
    } else {
      setShowAnswer(id);
    }
  };

  return (
    <>
      <HelmetSEO {...SEO_Faqs} />
      <div className="w-full ">
        <div className="bg-primary md:bg-gradient-to-r from-orange to-30% from-30% to-primary md:bg-transparent">
          <Screen />
        </div>
        {/* Sections */}
        <div id="faqs" className="container mx-auto px-4 pt-10 sm:pt-20">
          <div className="w-full mb-10 lg:mb-16 flex justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-[dinFontBold]">
              الاسئلة الشائعة
            </h2>
          </div>
          <div className="w-full rounded-[40px]">
            {isLoading && (
              <div className="w-full mx-auto flex items-center justify-center">
                <LoadingSpin stroke="stroke-[#373873]" />
              </div>
            )}
            {!isLoading && !isError && (
              <div className="flex flex-col items-start justify-start gap-1">
                {faqs?.map(({ id, ar_question, ar_answer }) => {
                  return (
                    <div key={id} className="w-full relative">
                      <button
                        onClick={() => showAnswerHandler(id)}
                        className={`${
                          showAnswer == id ? "rounded-t-msd" : "rounded-msd"
                        } p-4 sm:p-5 gap-2 bg-primary text-white w-full text-start flex items-center justify-between duration-300 transition-all`}
                      >
                        <span className="text-base xl:text-xl">
                          {ar_question}
                        </span>

                        {showAnswer == id ? (
                          <>
                            <FaWindowMinimize color="#fff" />
                          </>
                        ) : (
                          <>
                            <FaPlus color="#fff" />
                          </>
                        )}
                      </button>

                      <p
                        className={`
                        ${
                          showAnswer == id
                            ? "max-h-96 px-4 py-3 sm:p-5"
                            : "max-h-0 p-0"
                        }  bg-[#373873cc] text-white duration-300 transition-all`}
                      >
                        <span className="text-sm xl:text-base w-full h-full">
                          {ar_answer}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            {isError && !isLoading && <ErrorAlert />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
