import { useEffect } from "react";
import { logo } from "../assets";
import Screen from "../components/Home/Screen";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full ">
      <div className="bg-primary md:bg-gradient-to-r from-orange to-30% from-30% to-primary md:bg-transparent">
        <Screen />
      </div>
      {/* Sections */}
      <div className="container mx-auto px-6 pt-10 sm:pt-20">
        <div className="w-full mb-10 lg:mb-16 flex justify-center">
          <h3 className="text-xl sm:text-2xl lg:text-[35px] lg:leading-[50px] font-[dinFontBold]">
            السياسة والخصوصية
          </h3>
        </div>
        <div className="w-full py-8 sm:py-12 bg-primary rounded-[40px]">
          <h4 className="flex items-center justify-center mb-10 sm:mb-28">
            <img src={logo} className="h-4 sm:h-14" />
          </h4>
          <div className="text-white text-lg sm:text-2xl px-4 lg:px-32">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
