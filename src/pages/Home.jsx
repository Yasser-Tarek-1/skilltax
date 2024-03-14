import Screen from "../components/Home/Screen";
import Features from "../components/Home/Sections/Features";
import Tracking from "../components/Home/Sections/Tracking";
import Solution from "../components/Home/Sections/Solution";
import BusinessSolutions from "../components/Home/Sections/BusinessSolutions";
import MoreSolutions from "../components/Home/Sections/MoreSolutions";
import ContactUs from "../components/Home/Sections/ContactUs";
import HelmetSEO from "../HelmetSEO/HelmetSEO";
import { SECTIONS } from "../content";
const SEO_HOME = {
  title: "SkillTax - سكيل تاكس نظام الكاشير الامثل",
  description:
    "تسهيل وتنظيم عملية إدارة وتنظيم المطاعم و المبيعات بطريقة فعّالة وبسيطة. يتيح هذا النظام  إدارة جميع جوانب المطعم بكل يسر وسهولة.",
  keywords: "تطبيق كاشير, نظام مطعم, نقاط بيع, نظام نقاط بيع, كاشير",
};

const Home = () => {
  return (
    <>
      <HelmetSEO {...SEO_HOME} />
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
          {SECTIONS.map(({ id, ...content }) => {
            return <Tracking key={id} id={id} {...content} />;
          })}
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
