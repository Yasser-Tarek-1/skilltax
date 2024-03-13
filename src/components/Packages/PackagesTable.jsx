import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../packages_prices.json";
import { faCheck, faO, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../Layouts/Button";

const Packages2 = () => {
  const [per, setPer] = useState("per_year");

  return (
    <div className="w-full h-full mt-[40px] hidden lg:block">
      <div className="relative overflow-x-auto rounded-[40px] border-2 border-[#E8E8E8] grid grid-cols-4">
        {/* 1 col */}
        <div className="text-center">
          {/* Head */}
          <div className="bg-[#F9F9F9] h-32 flex items-center justify-center">
            <h3 className="text-2xl">الخصائص</h3>
          </div>
          <div className="flex items-center justify-center w-full flex-col">
            {data[0].advantages.map(({ title, id }) => {
              return (
                <div
                  key={id}
                  className="w-full flex items-center justify-start h-20 border-b-2 border-[#E8E8E8] pr-7"
                >
                  <h4 className="text-[#00000099] text-lg xl:text-xl">
                    {title}
                  </h4>
                </div>
              );
            })}
            {/* per month */}
            <div className="w-full flex items-center justify-center h-24">
              <button
                onClick={() => setPer("per_month")}
                className={`${
                  per == "per_month" ? "border-primary" : "border-[#EEEEEEEE]"
                } h-16 w-[80%] mx-auto rounded-[100px] flex items-center gap-2 px-3 border-[3px]`}
              >
                <p className="w-8">
                  <FontAwesomeIcon
                    icon={faO}
                    size="xl"
                    color={`${per == "per_month" ? "#373873" : "#EEEEEEEE"}`}
                    className="w-full mx-auto"
                  />
                </p>
                <p className="text-xl flex items-center justify-start flex-1 mt-[-4px]">
                  الدفع شهريا
                </p>
              </button>
            </div>
            {/* per year */}
            <div className="w-full flex items-center justify-center h-24">
              <button
                onClick={() => setPer("per_year")}
                className={`${
                  per == "per_year" ? "border-primary" : "border-[#EEEEEEEE]"
                } h-16 w-[80%] mx-auto rounded-[100px] flex items-center gap-2 px-3 border-[3px]`}
              >
                <p className="w-8">
                  <FontAwesomeIcon
                    icon={faO}
                    size="xl"
                    color={`${per == "per_year" ? "#373873" : "#EEEEEEEE"}`}
                    className="w-full mx-auto"
                  />
                </p>
                <p className="text-xl flex items-center justify-start flex-1 mt-[-4px]">
                  الدفع سنويا
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* 3 cols */}
        {data.map(
          ({ title, id, advantages, price_per_month, price_per_year }) => {
            return (
              <div key={id} className="border-r-2 border-[#E8E8E8] text-center">
                {/* Head */}
                <div className="bg-[#F9F9F9] h-32 flex items-center justify-center">
                  <h3 className="text-2xl">{title}</h3>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                  {advantages.map(({ include, id }) => {
                    return (
                      <div
                        key={id}
                        className="w-full flex items-center justify-center h-20 border-b-2 border-[#E8E8E8]"
                      >
                        {include ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="2xl"
                            color="#373873"
                            className="w-full mx-auto"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmark}
                            size="2xl"
                            color="#373873"
                            className="w-full mx-auto"
                          />
                        )}
                      </div>
                    );
                  })}
                  {/* price */}
                  <div className="w-full flex items-center justify-center h-24 border-b-2 border-[#E8E8E8]">
                    <h4 className="text-3xl 2xl:text-4xl">
                      {per == "per_year" ? price_per_year : price_per_month} رس
                    </h4>
                  </div>
                  {/* button */}
                  <div className="w-full flex items-center justify-center h-24">
                    <Button width="w-[50%] overflow-hidden">
                      <a
                        target="_blank"
                        className="w-full h-full flex items-center justify-center"
                        href="https://wa.me/+966553559038"
                      >
                        اطلب الان
                      </a>
                    </Button>
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

export default Packages2;
