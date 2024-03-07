const Head = ({ title, children }) => {
  return (
    <div className="w-full mb-10 lg:mb-16">
      <h3 className="text-xl sm:text-[35px] sm:leading-[50px] font-[dinFontBold] ">
        {title}
      </h3>
      <p className="text-secondary sm:text-2xl text-sm max-w-[600px]">
        {children}
      </p>
    </div>
  );
};

export default Head;
