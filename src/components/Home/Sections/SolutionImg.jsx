import { useState } from "react";
import SkeletonLoader from "../../Layouts/SkeletonLoader";

const SolutionImg = ({ img, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
  };

  // Create an image object to handle the loading event
  const imgLoad = new Image();
  imgLoad.src = img;
  imgLoad.onload = handleImageLoad;
  return (
    <>
      {!imageLoaded ? (
        <SkeletonLoader className="w-full h-[210px] sm:w-[310px] lg:h-[310px] lg:w-[470px] rounded-[40px]" />
      ) : (
        <div
          className="flex items-end w-full h-[210px] sm:w-[310px] lg:h-[310px] lg:w-[470px] rounded-[40px] relative overflow-hidden bg-cover"
          style={backgroundImageStyle}
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
      )}
    </>
  );
};

export default SolutionImg;