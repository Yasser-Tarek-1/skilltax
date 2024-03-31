import Marquee from "react-marquee-slider";

import { PARTNERS_MARQUEE } from "../../../services/content";
import { useEffect, useState } from "react";

const Partners = () => {
  const [velocity, setVelocity] = useState(28); // Initial velocity

  useEffect(() => {
    // Function to update velocity based on screen size
    const updateVelocity = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Adjust as needed for your mobile screen size
        setVelocity(12); // Higher velocity for mobile screens
      } else {
        setVelocity(28); // Default velocity for other screens
      }
    };

    // Call updateVelocity initially and add event listener for window resize
    updateVelocity();
    window.addEventListener("resize", updateVelocity);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateVelocity);
    };
  }, []);
  return (
    <section id="solution" className="pt-20 sm:pt-28 2xl:pt-40">
      <div className="w-full mb-12 lg:mb-16 flex justify-center">
        <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-[dinFontBold]">
          شركاء النجاح
        </h2>
      </div>
      <div className="w-full h-full relative mask">
        <Marquee velocity={velocity} direction="right" paused={false}>
          {PARTNERS_MARQUEE.map(({ id, img, title }) => {
            return (
              <div
                key={id}
                className="w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] sm:mx-4"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full max-w-full h-auto max-h-full object-contain border-0 "
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
