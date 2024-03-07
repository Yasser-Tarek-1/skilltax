import Head from "../../Layouts/Head";

const array = [{}, {}, {}, {}, {}, {}];

const Solution = () => {
  return (
    <section id="solution" className="pt-28 md:pt-52">
      <Head title="حلول مرنة وفعالة لمختلف القطاعات.">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى،
      </Head>
      <h3 className="text-[20px] lg:text-[28px] xl:text-[35px] font-[dinFontBold]"></h3>
      <p className="text-secondary text-[15px] md:text-[18px] lg:text-[20px] xl:text-[23px] max-w-[580px]"></p>
      <div className="w-full flex items-center gap-8 pt-9 lg:pt-14 flex-wrap">
        {/* Solution Card */}
        {array.map((_, idx) => {
          return (
            <div
              key={idx}
              className="flex items-end w-full sm:w-[470px] h-[310px] rounded-[40px] relative overflow-hidden bg-cover"
              style={{
                backgroundImage:
                  "url(https://s3-alpha-sig.figma.com/img/7b08/79ca/10050046329d669946c4117d4e817a1c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBi8bc1vP2k4IJNP3rjyiUmV~~M89EengFE213BvtsT5WyH26x~hlvd~jh9rc661A3hdBCjJoU~txSjAEZ9Jgt1HdCXv5YcdTk8hJFdIKI1d5d8k6Ula5wzEpGttnfTy8iiR2r5hLsRHitYpFhkDGXbTuMKEoG1s5fxrRFkXz14oqfFxkx3uruGa-IUJRc9NoE7SXupqb22kWRC2SzDl0ZADcfmmv6JBbIteA-YJ3cRq8Cq9Wg~zp7eeFJLy03zvhewhUuRRy0wo5b-uyikwpgYD9qmBAWAh9y2HaY0-llhjnQtFvxe6usnXZBM3PB6gNdbDso-T90uE9bwORCj~wA__)",
              }}
            >
              <div
                className="w-full h-full absolute inset-0 z-[1] bg-cover"
                style={{
                  background:
                    "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-10 p-6 sm:p-9 text-white">
                <h4 className="text-[18px] lg:text-[28px] xl:text-[28px] font-[dinFontBold]">
                  هذا النص هو مثال
                </h4>
                <p className="text-[12px] lg:text-[16px]">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solution;
