const Head = ({ title, children }) => {
  return (
    <div className="w-full mb-10 lg:mb-16 xl:mb-20">
      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold] mb-1">
        {title}
      </h3>
      <p className="text-secondary text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[600px]">
        {children}
      </p>
    </div>
  );
};

export default Head;
