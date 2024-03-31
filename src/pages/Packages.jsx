import ContactUs from "../components/Home/Sections/ContactUs/ContactUs";
import PackagesTable from "../components/PackagesPage/PackagesTable";
import PackagesTableSmallScreen from "../components/PackagesPage/PackagesTableSmallScreen";
import HelmetSEO from "../HelmetSEO/HelmetSEO";

const SEO_PACKAGES = {
  title: "SkillTax - باقات سكيل تاكس",
  description:
    "باقات سكيل تاكس مناسبة لجميع انواع الاعمال من اول اصحاب المشاريع الناشئة حتي اصحاب الشركات",
  keywords:
    "باقات سكيل تاكس, اسعار سكيل تاكس, خدمة كاشير, باقة نمو, باقة بيسك, باقة بريميوم",
};

const Packages = () => {
  return (
    <>
      <HelmetSEO {...SEO_PACKAGES} />
      <div id="prices" className="w-full h-full pt-32 lg:pt-40">
        <div className="container mx-auto px-4">
          <div className="w-full mb-10 lg:mb-16 flex justify-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-[dinFontBold]">
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
