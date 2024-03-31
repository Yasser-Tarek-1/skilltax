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
          <img
            src={img}
            alt={title}
            className="w-full h-full max-w-full"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-[dinFontBold]">
            {title}
          </h2>
          <p className="mb-6 mt-2 text-secondary  text-sm sm:text-lg xl:text-xl">
            {description}
          </p>
          <Button isMain={true}>قراءة المزيد</Button>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
