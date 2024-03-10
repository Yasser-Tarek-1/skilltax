import Screen from "../components/Home/Screen";
import Features from "../components/Home/Sections/Features";
import Tracking from "../components/Home/Sections/Tracking";
import System from "../components/Home/Sections/System";
import Solution from "../components/Home/Sections/Solution";
import MoreSolution from "../components/Home/Sections/MoreSolution";
import Options from "../components/Home/Sections/Options";
// import Packages from "../components/Home/Sections/Packages";
import ContactUs from "../components/Home/Sections/ContactUs";

const Home = () => {
  return (
    <div className="w-full">
      <div
        id="home"
        className="bg-primary md:bg-gradient-to-r from-orange to-30% from-30% to-primary md:bg-transparent"
      >
        <Screen />
      </div>
      {/* Sections */}
      <div className="container mx-auto px-6">
        <Features />
        <Tracking />
        <System />
        <Solution />
        <MoreSolution />
        <Options />
        {/* <Packages /> */}
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
