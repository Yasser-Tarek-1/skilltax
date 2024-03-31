const Head = ({ title, children }) => {
  return (
    <div className="w-full mb-10 lg:mb-16 xl:mb-20">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-[dinFontBold] mb-1">
        {title}
      </h2>
      <p className="text-secondary text-sm sm:text-lg lg:text-xl max-w-[600px]">
        {children}
      </p>
    </div>
  );
};

export default Head;
