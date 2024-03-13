import Button from "../../Layouts/Button";

const Tracking = ({ id, title, description, img }) => {
  return (
    <section className="pt-20 sm:pt-28 2xl:pt-40">
      <div
        className={`${
          id == 1 ? "lg:flex-row" : "lg:flex-row-reverse"
        } flex items-center gap-8 lg:gap-32 xl:gap-52 flex-col `}
      >
        <div className="flex-1 custom_shadow">
          <img src={img} alt={title} className="max-w-full" loading="lazy" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold]">
            {title}
          </h3>
          <p className="mb-6 mt-2 text-secondary text-base sm:text-lg lg:text-xl xl:text-2xl">
            {description}
          </p>
          <Button>قراءة المزيد</Button>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
