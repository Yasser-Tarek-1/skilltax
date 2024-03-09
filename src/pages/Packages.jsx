import { useEffect } from "react";
import ContactUs from "../components/Home/Sections/ContactUs";
import Head from "../components/Layouts/Head";
import PackagesTable from "../components/Packages/PackagesTable";
import PackagesTableSmallScreen from "../components/Packages/PackagesTableSmallScreen";

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-full pt-40">
      <div className="container mx-auto px-4">
        <div className="w-full mb-10 lg:mb-16 flex justify-center">
          <h3 className="text-xl sm:text-2xl lg:text-[35px] lg:leading-[50px] font-[dinFontBold]">
            أسعار الباقات
          </h3>
        </div>
        <PackagesTable />
        <PackagesTableSmallScreen />
        <ContactUs />
      </div>
    </div>
  );
};

export default Packages;
