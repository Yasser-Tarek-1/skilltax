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
  { id: 2, title: "الكفيهات", img: cafes },
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
      <div className="w-full flex items-center gap-8 flex-wrap">
        {/* Solution Card */}
        {flexible_solutions.map(({ id, title, img }) => {
          return (
            <div
              key={id}
              className="flex items-end w-full h-[210px] sm:w-[310px] lg:h-[310px] lg:w-[470px] rounded-[40px] relative overflow-hidden bg-cover"
              style={{
                backgroundImage: `url(${img})`,
              }}
              loading="lazy"
            >
              <div
                className="w-full h-full absolute inset-0 z-[1] bg-cover"
                style={{
                  background:
                    "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-10 p-6 lg:p-9 text-white">
                <h4 className="text-lg lg:text-[28px] lg:leading-[40px] font-[dinFontBold]">
                  {title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solution;
