import { SOlUTIONS } from "../../../services/content";
import SolutionImg from "./SolutionImg";

const Solution = () => {
  return (
    <section id="solution" className="pt-20 sm:pt-28 2xl:pt-40">
      <div className="w-full mb-12 lg:mb-16 flex justify-center">
        <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-[dinFontBold]">
          حلول فعالة لمختلف القطاعات.
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Solution Card */}
        {SOlUTIONS.map(({ id, ...props }) => {
          return <SolutionImg key={id} {...props} />;
        })}
      </div>
    </section>
  );
};

export default Solution;
