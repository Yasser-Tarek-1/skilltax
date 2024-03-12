import SolutionImg from "./SolutionImg";
import {
  restaurants,
  cafes,
  cafes2,
  from_cars,
  food_trucks,
  for_your_work,
} from "../../../assets";

const flexible_solutions = [
  { id: 1, title: "المطاعم", img: restaurants },
  { id: 2, title: "الكافيهات", img: cafes },
  { id: 3, title: "المقاهي", img: cafes2 },
  { id: 4, title: "الشراء من السيارة", img: from_cars },
  { id: 5, title: "عربات الطعام", img: food_trucks },
  { id: 6, title: "نسخة خاصة لنشاطك", img: for_your_work },
];

const Solution = () => {
  return (
    <section id="solution" className="pt-20 sm:pt-28 2xl:pt-52">
      <div className="w-full mb-10 lg:mb-16 flex justify-center">
        <h3 className="text-xl sm:text-2xl lg:text-[35px] lg:leading-[50px] font-[dinFontBold]">
          حلول فعالة لمختلف القطاعات.
        </h3>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-wrap">
        {/* Solution Card */}
        {flexible_solutions.map(({ id, ...props }) => {
          return <SolutionImg key={id} {...props} />;
        })}
      </div>
    </section>
  );
};

export default Solution;
