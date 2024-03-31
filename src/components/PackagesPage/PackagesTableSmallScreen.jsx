import data from "../../packages_prices.json";
import { useState } from "react";
import Button from "../Layouts/Button";
import { FaCheck, FaO, FaXmark } from "react-icons/fa6";

const PackagesTableSmallScreen = () => {
  const [per, setPer] = useState("per_year");
  const [showPackage, setShowPackage] = useState({
    1: null,
    2: null,
    3: null,
  });

  const onShow = (id) => {
    if (showPackage[id] == null) {
      setShowPackage((prev) => {
        return { ...prev, [id]: id };
      });
    } else {
      setShowPackage((prev) => {
        return { ...prev, [id]: null };
      });
    }
  };

  return (
    <div className="w-full h-full mt-[40px] lg:hidden">
      <div className="flex justify-center items-center flex-col gap-8">
        {data?.map(
          ({ id, title, advantages, price_per_month, price_per_year }) => {
            return (
              <div
                key={id}
                className="w-full relative overflow-hidden z-50 max-w-[90%] bg-[#F9F9F9] border-[1.5px] border-[#E8E8E8] rounded-[20px] flex flex-col items-center justify-center"
              >
                {/* head */}
                <div
                  id={id}
                  className="flex h-40 items-center justify-center flex-col py-9 px-6"
                >
                  <h2 className="text-xl sm:text-2xl font-[dinFontRegular]">
                    {title}
                  </h2>
                  <button
                    onClick={() => onShow(id)}
                    className="w-36 h-12 mt-5 text-xs text-primary bg-[#3738731A] rounded-[100px]"
                  >
                    {showPackage[id] == id ? "اخفاء الممزيات" : " عرض الممزيات"}
                  </button>
                </div>
                {/* body */}
                <div
                  className={`${
                    showPackage[id] == id ? "block" : "hidden"
                  } w-full overflow-hidden transition-all duration-300 ease-in relative`}
                >
                  {/* row */}
                  {advantages.map(({ id, title, include }) => {
                    return (
                      <div
                        key={id}
                        className="row border-t-[1.5px] overflow-hidden border-[#E8E8E8] h-14 flex items-center justify-between"
                      >
                        <p className="text-sm text-[#00000099] px-6 flex-1">
                          {title}
                        </p>
                        <p className="border-r-[1.5px] w-14 h-full border-[#E8E8E8] flex items-center justify-center">
                          {include ? (
                            <FaCheck
                              size={22}
                              color="#373873"
                              className="w-full mx-auto"
                            />
                          ) : (
                            <>
                              <FaXmark
                                size={22}
                                color="#373873"
                                className="w-full mx-auto"
                              />
                            </>
                          )}
                        </p>
                      </div>
                    );
                  })}
                  {/* per */}
                  <div className="row border-t-[1.5px] border-[#E8E8E8] h-36 flex items-center  justify-around flex-col">
                    <button
                      onClick={() => setPer("per_month")}
                      className={`${
                        per == "per_month"
                          ? "border-primary"
                          : "border-[#EEEEEEEE]"
                      } h-12 w-[80%] max-w-[380px] mx-auto rounded-[100px] flex items-center gap-2 px-3 border-[2px]`}
                    >
                      <p className="w-8">
                        <FaO
                          size={22}
                          color={`${
                            per == "per_month" ? "#373873" : "#EEEEEEEE"
                          }`}
                          className="w-full mx-auto"
                        />
                      </p>
                      <p className="text-sm flex items-center justify-start flex-1 ">
                        الدفع شهريا
                      </p>
                    </button>
                    <button
                      onClick={() => setPer("per_year")}
                      className={`${
                        per == "per_year"
                          ? "border-primary"
                          : "border-[#EEEEEEEE]"
                      } h-12 w-[80%] max-w-[380px] mx-auto rounded-[100px] flex items-center gap-2 px-3 border-[2px]`}
                    >
                      <span>
                        <FaO
                          size={22}
                          color={`${
                            per == "per_year" ? "#373873" : "#EEEEEEEE"
                          }`}
                          className="w-full mx-auto"
                        />
                      </span>
                      <span className="text-sm">الدفع سنويا</span>
                    </button>
                  </div>
                  {/* price */}
                  <div className="row border-t-[1.5px] border-[#E8E8E8] h-28 flex items-center  justify-around flex-col">
                    <h4 className="font-[dinFontRegular] flex flex-col items-center">
                      {" "}
                      <span className="text-[30px] leading-[50px]">
                        {per == "per_year" ? price_per_year : price_per_month}{" "}
                        رس
                      </span>
                      <span className="text-lg text-primary mt-[-8px]">
                        {per == "per_year" ? "سنويا" : "شهريا"}
                      </span>
                    </h4>
                  </div>
                  {/* button */}
                  <div className="row border-t-[1.5px] border-[#E8E8E8] h-24 flex items-center  justify-around flex-col">
                    <a
                      target="_blank"
                      className="w-fit h-fit flex items-center justify-center"
                      href="https://wa.me/+966553559038"
                    >
                      <Button isMain={true}>اطلب الان</Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default PackagesTableSmallScreen;
