import { useEffect } from "react";
import ContactUs from "../components/Home/Sections/ContactUs";
import PackagesTable from "../components/Packages/PackagesTable";
import PackagesTableSmallScreen from "../components/Packages/PackagesTableSmallScreen";
import HelmetSeo from "../components/Seo/HelmetSeo";

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetSeo title={"SkillTax - باقات سكيل تاكس"} />
      <div className="w-full h-full pt-40">
        <div className="container mx-auto px-4">
          <div className="w-full mb-10 lg:mb-16 flex justify-center">
            <h1 className="text-xl sm:text-2xl lg:text-[35px] lg:leading-[50px] font-[dinFontBold]">
              أسعار الباقات
            </h1>
          </div>
          <PackagesTable />
          <PackagesTableSmallScreen />
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Packages;
