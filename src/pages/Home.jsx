import Screen from "../components/Home/Screen";
import Features from "../components/Home/Sections/Features";
import Tracking from "../components/Home/Sections/Tracking";
import KitchenSystem from "../components/Home/Sections/KitchenSystem";
import Solution from "../components/Home/Sections/Solution";
import BusinessSolutions from "../components/Home/Sections/BusinessSolutions";
import MoreSolutions from "../components/Home/Sections/MoreSolutions";
import ContactUs from "../components/Home/Sections/ContactUs";
import HelmetSeo from "../components/Seo/HelmetSeo";

const Home = () => {
  return (
    <>
      <HelmetSeo title={"SkillTax - سكيل تاكس نظام الكاشير الامثل"} />
      <div className="w-full">
        <div
          id="home"
          className="bg-primary md:bg-gradient-to-r from-orange to-30% from-30% to-primary md:bg-transparent"
        >
          <Screen />
        </div>
        {/* Sections */}
        <div className="container mx-auto px-4">
          <Features />
          <Tracking />
          <KitchenSystem />
          <Solution />
          <BusinessSolutions />
          <MoreSolutions />
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Home;
