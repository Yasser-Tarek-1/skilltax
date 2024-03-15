import { contactUs, email } from "../../../assets";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../Layouts/Button";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      activity_type: "",
      city_name: "",
      phone: "",
      email: "",
      company_name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("هذا الحقل مطلوب"),
      activity_type: Yup.string().required("هذا الحقل مطلوب"),
      city_name: Yup.string().required("هذا الحقل مطلوب"),
      phone: Yup.string()
        .required("هذا الحقل مطلوب")
        .test(
          "is-first-number-five",
          "رقم الهاتف لابد ان يبدأ برقم 5",

          (value) => {
            if (!value) return false; // Handle empty string case
            const numStr = value.toString();
            const firstChar = numStr?.charAt(0);
            return parseInt(firstChar) === 5;
          }
        )
        .matches(/^[0-9]{9}$/, "يجب أن يتكون الهاتف من 9 أرقام"),
      email: Yup.string()
        .email("يجب أن يكون البريد الإلكتروني صالحًا")
        .required("هذا الحقل مطلوب"),
      company_name: Yup.string().required("هذا الحقل مطلوب"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section id="contactUs" className="pt-20 sm:pt-28 2xl:pt-40">
      <div className="w-full flex items-center lg:gap-8 flex-col-reverse lg:flex-row">
        {/* Right Card */}
        <div className="w-full h-full lg:h-[830px] bg-[#F8F8F8] p-6 lg:p-10 border-[3px] border-[#EEEEEEEE] rounded-[40px]">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px] font-[dinFontBold]">
            تواصل معنا
          </h3>
          {/* Contact Us Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="mt-10 flex flex-col gap-9"
          >
            <div className="flex items-start gap-8 w-full flex-col lg:flex-row">
              <div className="flex items-start flex-col gap-3 w-full">
                <label className="text-base xl:text-lg" htmlFor="name">
                  الاسم
                </label>
                <input
                  id="name"
                  type="text"
                  className={`${
                    formik.touched.name && formik.errors.name
                      ? "border-red-600"
                      : "border-[#ECECEC]"
                  } w-full outline-none border-[1.5px] text-sm rounded-[100px] h-14 lg:h-15 px-4 sm:px-7 lg:px-8 `}
                  placeholder="اكتب اسمك هنا"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm text-red-600 mt-[-9px]">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <div className="flex items-start flex-col gap-3 w-full">
                <label className="text-base xl:text-lg" htmlFor="activity_type">
                  نوع النشاط
                </label>
                <input
                  id="activity_type"
                  type="text"
                  className={`${
                    formik.touched.activity_type && formik.errors.activity_type
                      ? "border-red-600"
                      : "border-[#ECECEC]"
                  } w-full outline-none border-[1.5px] text-sm rounded-[100px] h-14 lg:h-15 px-4 sm:px-7 lg:px-8 `}
                  placeholder="اكتب نوع النشاط"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.activity_type}
                />
                {formik.touched.activity_type &&
                  formik.errors.activity_type && (
                    <p className="text-sm text-red-600 mt-[-9px]">
                      {formik.errors.activity_type}
                    </p>
                  )}
              </div>
            </div>
            <div className="flex items-start gap-8 w-full flex-col lg:flex-row">
              <div className="flex items-start flex-col gap-3 w-full">
                <label className="text-base xl:text-lg" htmlFor="phone">
                  رقم الهاتف
                </label>
                <input
                  id="phone"
                  type="nubmer"
                  className={`${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-600"
                      : "border-[#ECECEC]"
                  } w-full outline-none border-[1.5px] text-sm rounded-[100px] h-14 lg:h-15 px-4 sm:px-7 lg:px-8 `}
                  placeholder="اكتب رقم الهاتف هنا"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-sm text-red-600 mt-[-9px]">
                    {formik.errors.phone}
                  </p>
                )}
              </div>
              <div className="flex items-start flex-col gap-3 w-full">
                <label className="text-base xl:text-lg" htmlFor="city_name">
                  المدينة
                </label>
                <input
                  id="city_name"
                  type="text"
                  className={`${
                    formik.touched.city_name && formik.errors.city_name
                      ? "border-red-600"
                      : "border-[#ECECEC]"
                  } w-full outline-none border-[1.5px] text-sm rounded-[100px] h-14 lg:h-15 px-4 sm:px-7 lg:px-8 `}
                  placeholder="اكتب اسم المدينة"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city_name}
                />
                {formik.touched.city_name && formik.errors.city_name && (
                  <p className="text-sm text-red-600 mt-[-9px]">
                    {formik.errors.city_name}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-start flex-col gap-3 w-full">
              <label className="text-base xl:text-lg" htmlFor="email">
                البريد الالكتروني
              </label>
              <input
                id="email"
                type="email"
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "border-red-600"
                    : "border-[#ECECEC]"
                } w-full outline-none border-[1.5px] text-sm rounded-[100px] h-14 lg:h-15 px-4 sm:px-7 lg:px-8 `}
                placeholder="اكتب بريدك الالكتروني هنا"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-600 mt-[-9px]">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="flex items-start flex-col gap-3 w-full">
              <label className="text-base xl:text-lg" htmlFor="company_name">
                أسم النشاط{" "}
              </label>
              <input
                id="company_name"
                type="text"
                className={`${
                  formik.touched.company_name && formik.errors.company_name
                    ? "border-red-600"
                    : "border-[#ECECEC]"
                } w-full outline-none border-[1.5px] text-sm rounded-[100px] h-14 lg:h-15 px-4 sm:px-7 lg:px-8 `}
                placeholder="اكتب أسم النشاط هنا"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company_name}
              />
              {formik.touched.company_name && formik.errors.company_name && (
                <p className="text-sm text-red-600 mt-[-9px]">
                  {formik.errors.company_name}
                </p>
              )}
            </div>

            <Button className="w-full lg:w-[50%]" type="submit" isMain={true}>
              ارسال
            </Button>
          </form>
        </div>
        {/* Left Card */}
        <div
          className="w-full lg:h-[830px] pb-16 lg:pb-0 flex items-end rounded-[40px] relative bottom-[-64px] z-[-1] lg:bottom-0 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${contactUs})`,
          }}
          loading="lazy"
        >
          <div
            className="w-full h-full absolute inset-0 z-[1] bg-cover"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          ></div>
          <div className="relative z-10 p-6 lg:p-12 text-white">
            <h4 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] xl:leading-[50px]">
              افضل نظام ادارة نقاط البيع
            </h4>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl">
              احصل على نسختك الآن واستفد من الخدمات المتميزة التي يقدمها
              Skilltax في إدارة مطعمك .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
