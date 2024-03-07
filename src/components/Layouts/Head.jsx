const Head = ({ title, children }) => {
  return (
    <>
      <h3 className="text-[20px] lg:text-[28px] xl:text-[35px] font-[dinFontBold]">
        {title}
      </h3>
      <p className="text-secondary text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] max-w-[580px]">
        {children}
      </p>
    </>
  );
};

export default Head;
