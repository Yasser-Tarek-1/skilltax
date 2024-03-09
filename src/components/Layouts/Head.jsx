const Head = ({ title, children }) => {
  return (
    <div className="w-full mb-10 lg:mb-16">
      <h3 className="text-xl sm:text-2xl lg:text-[35px] lg:leading-[50px] font-[dinFontBold] ">
        {title}
      </h3>
      <p className="text-secondary text-lg sm:text-xl lg:text-2xl max-w-[600px]">
        {children}
      </p>
    </div>
  );
};

export default Head;
