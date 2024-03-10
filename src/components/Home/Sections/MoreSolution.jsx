import { HashLink } from "react-router-hash-link";
import { iPad } from "../../../assets";
import Button from "../../Layouts/Button";

const MoreSolution = () => {
  return (
    <section id="moreSolution" className="pt-20 sm:pt-28 2xl:pt-52">
      <div className="w-full h-full lg:h-96 px-[30px] py-16 lg:py-0 sm:px-12 lg:px-20 bg-primary  gap-10 lg:gap-14  rounded-3xl md:rounded-[100px] relative flex items-center justify-between flex-col-reverse md:flex-row">
        <div>
          <h3 className="text-white text-[25px] xl:text-[35px]">
            حلول سكيل تاكس للأعمال
          </h3>
          <p className="text-white text-[15px] lg:text-lg xl:text-xl max-w-[510px] pt-4 pb-8">
            نحن نؤمن بأن تلبية احتياجات عملائنا تتطلب تقديم حلول مخصصة وفقًا
            لاحتياجاتهم .{" "}
          </p>
          <HashLink to="/#contactUs">
            <Button prim={true} width="w-[60%] sm:w-[40%]">
              تواصل معنا
            </Button>
          </HashLink>
        </div>
        <div className="w-full md:w-[70%] lg:w-[55%]">
          <img src={iPad} className="w-full max-w-full" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default MoreSolution;
