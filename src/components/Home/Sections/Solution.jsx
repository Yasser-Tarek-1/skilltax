import { SOlUTIONS } from "../../../content";
import SolutionImg from "./SolutionImg";

const Solution = () => {
  return (
    <section id="solution" className="pt-20 sm:pt-28 2xl:pt-40">
      <div className="w-full mb-8 lg:mb-16 flex justify-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold]">
          حلول فعالة لمختلف القطاعات.
        </h3>
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
