import data from "../../packages_prices.json";
import { useState } from "react";
import Button from "../Layouts/Button";
import { FaCheck, FaO, FaXmark } from "react-icons/fa6";

const PackagesTable = () => {
  const [per, setPer] = useState("per_year");

  return (
    <div className="w-full h-full mt-[40px] hidden lg:block">
      <div className="relative overflow-x-auto rounded-[40px] border-2 border-[#E8E8E8] grid grid-cols-4">
        {/* 1 col */}
        <div className="text-center">
          {/* Head */}
          <div className="bg-[#F9F9F9] h-32 flex items-center justify-center">
            <h2 className="text-2xl">الخصائص</h2>
          </div>
          <div className="flex items-center justify-center w-full flex-col">
            {data[0].advantages.map(({ title, id }) => {
              return (
                <div
                  key={id}
                  className="w-full flex items-center justify-start h-20 border-b-2 border-[#E8E8E8] pr-7"
                >
                  <h4 className="text-[#00000099] text-lg">{title}</h4>
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
                  <FaO
                    size={26}
                    color={`${per == "per_month" ? "#373873" : "#EEEEEEEE"}`}
                    className="w-full mx-auto"
                  />
                </p>
                <p className="text-lg xl:text-xl flex items-center justify-start flex-1 mt-[-4px]">
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
                  <FaO
                    size={26}
                    color={`${per == "per_year" ? "#373873" : "#EEEEEEEE"}`}
                    className="w-full mx-auto"
                  />
                </p>
                <p className="text-lg xl:text-xl flex items-center justify-start flex-1 mt-[-4px]">
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
                  <h2 className="text-2xl">{title}</h2>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                  {advantages.map(({ include, id }) => {
                    return (
                      <div
                        key={id}
                        className="w-full flex items-center justify-center h-20 border-b-2 border-[#E8E8E8]"
                      >
                        {include ? (
                          <FaCheck size={26} color="#373873" />
                        ) : (
                          <FaXmark size={26} color="#373873" />
                        )}
                      </div>
                    );
                  })}
                  {/* price */}
                  <div className="w-full flex items-center justify-center h-24 border-b-2 border-[#E8E8E8]">
                    <h4 className="text-2xl">
                      {per == "per_year" ? price_per_year : price_per_month} رس
                    </h4>
                  </div>
                  {/* button */}
                  <div className="w-full flex items-center justify-center h-24">
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

export default PackagesTable;
