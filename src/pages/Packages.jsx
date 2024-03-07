import { useEffect } from "react";
import ContactUs from "../components/Home/Sections/ContactUs";
import Head from "../components/Layouts/Head";
import PackagesTable from "../components/Packages/PackagesTable";
import PackagesTableSmallScreen from "../components/Packages/PackagesTableSmallScreen";

const Packages = () => {
  useEffect(() => {
    window.scrollBy({ top: 0 });
  }, []);
  return (
    <div className="w-full h-full pt-40">
      <div className="container mx-auto px-4">
        <Head title="الباقات">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى،
        </Head>
        <PackagesTable />
        <PackagesTableSmallScreen />
        <ContactUs />
      </div>
    </div>
  );
};

export default Packages;
