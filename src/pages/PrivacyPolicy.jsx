import { useEffect } from "react";
import { logo } from "../assets";
import Screen from "../components/Home/Screen";
import PrivacyContent from "../components/PrivacyPolicy/PrivacyContent";

const PrivacyPolicy = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return (
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
          <PrivacyContent />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
