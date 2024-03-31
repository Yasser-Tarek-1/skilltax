import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../../Layouts/Button";
import { getCities, sendQuestion } from "../../../../store/contactUsSlice";
import FormField from "./FormField";
import { IoIosArrowDown } from "react-icons/io";

function gtagSendEventAds(url) {
  let callback = function () {
    if (typeof url === "string") {
      window.location = url;
    }
  };
  gtag("event", "ads_conversion_Contact_1", {
    event_callback: callback,
    event_timeout: 2000,
    // <event_parameters>
  });

  return false;
}

const PHONE_REGEXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FORM_SCHSEMA = Yup.object({
  name: Yup.string().required("الاسم مطلوب"),
  activity_type: Yup.string().required("نوع النشاط مطلوب"),
  city_id: Yup.string().required("المدينة مطلوبة"),

  phone: Yup.string()
    .required("رقم الهاتف مطلوب")
    .matches(PHONE_REGEXP, "رقم الهاتف يجب ان يحتوي علي ارقام فقط ")
    .min(9, "رقم الهاتف لا يصلح")
    .max(10, "رقم الهاتف لا يصلح"),
  email: Yup.string()
    .email("يجب أن يكون البريد الإلكتروني صالحًا")
    .required("البريد الالكتروني مطلوب"),
  activity_name: Yup.string().required("الرسالة مطلوبة"),
});

const ContactUsForm = ({ onSendMsg }) => {
  const { cities } = useSelector((state) => state.contact);
  const [showDrop, setShowDrop] = useState(false);
  const [cityIdAndName, setCityIdAndName] = useState({
    id: null,
    name: "اختر المدينة",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      activity_type: "",
      city_id: cityIdAndName.id,
      phone: "",
      email: "",
      activity_name: "",
    },
    validationSchema: FORM_SCHSEMA,
    onSubmit: (values, { resetForm }) => {
      dispatch(sendQuestion({ ...values }))
        .unwrap()
        .then(() => {
          gtagSendEventAds();
          onSendMsg({
            isSubmit: true,
            isSuccess: true,
            msg: ".تم الاسال شكرا لتواصلك معنا",
          });
        })
        .catch((status) => {
          if (status == 422) {
            onSendMsg({
              isSubmit: true,
              isSuccess: false,
              msg: "لقد أرسلت بالفعل. حاول لاحقا",
            });
          } else {
            onSendMsg({
              isSubmit: true,
              isSuccess: false,
              msg: "هنالك خطأ ما حاول لاحقا",
            });
          }
        })
        .finally(() => {
          resetForm();
          setCityIdAndName({
            id: null,
            name: "اختر المدينة",
          });
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-10 flex flex-col gap-9">
      <div className="flex items-start gap-8 w-full flex-col lg:flex-row">
        <FormField
          {...formik}
          id={"name"}
          placeholder={"اكتب اسمك هنا"}
          label={"الاسم"}
        />
        <FormField
          {...formik}
          id={"activity_type"}
          placeholder={"اكتب نوع النشاط هنا"}
          label={"نوع النشاط"}
        />
      </div>
      <div className="flex items-start gap-8 w-full flex-col lg:flex-row">
        <FormField
          {...formik}
          id={"phone"}
          placeholder={"اكتب رقم الهاتف هنا"}
          label={"رقم الهاتف"}
        />
        <div className="flex items-start flex-col gap-3 w-full">
          <label className="text-base" htmlFor="city_id">
            المدينة <span className="text-red-600">*</span>
          </label>
          <div
            onClick={() => setShowDrop(!showDrop)}
            id="city_id"
            name="city_id"
            className={`${
              formik.touched.city_id && formik.errors.city_id
                ? "border-red-600"
                : "border-[#ECECEC]"
            } ${
              cityIdAndName.id == null ? "text-[#9ca3af]" : "text-black"
            } w-full outline-none flex items-center justify justify-between border-[1.5px] cursor-pointer relative bg-white text-sm rounded-3xl h-14 lg:h-15 px-4 sm:px-5 `}
          >
            <span>{cityIdAndName.name}</span>
            <span
              className={`${
                showDrop && " rotate-180"
              } mt-1 transition-all duration-300`}
            >
              <IoIosArrowDown size={20} />
            </span>
            <ul
              className={`${
                showDrop ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              } absolute top-14 lg:top-15 bg-white text-black overflow-y-auto w-full left-0 rounded-lg transition-all duration-300 `}
            >
              {cities?.map(({ id, ar_name }) => {
                return (
                  <li
                    onClick={() => {
                      setCityIdAndName({ id, name: ar_name });
                      formik.setFieldValue("city_id", id);
                    }}
                    className="w-full text-start px-4 py-1 cursor-pointer pointer-events-auto"
                    key={id}
                  >
                    {ar_name}
                  </li>
                );
              })}
            </ul>
          </div>
          {formik.touched.city_id && formik.errors.city_id && (
            <p className="text-sm text-red-600 mt-[-9px]">
              {formik.errors.city_id}
            </p>
          )}
        </div>
      </div>
      <FormField
        {...formik}
        id="email"
        placeholder="اكتب بريدك الالكتروني هنا"
        label="البريد الالكتروني"
      />
      <div className="flex items-start flex-col gap-3 w-full">
        <label className="text-base" htmlFor="activity_name">
          الرسالة <span className="text-red-600">*</span>
        </label>
        <textarea
          id="activity_name"
          type="text"
          rows={4}
          className={` ${
            formik.touched.activity_name && formik.errors.activity_name
              ? "border-red-600"
              : "border-[#ECECEC]"
          } w-full lg:resize-none border-[1.5px] rounded-3xl py-3 px-4 sm:px-5 text-sm outline-none `}
          placeholder="اكتب رسالتك"
          onChange={formik.handleChange}
          value={formik.values.activity_name}
        />
        {formik.touched.activity_name && formik.errors.activity_name && (
          <p className="text-sm text-red-600 mt-[-9px]">
            {formik.errors.activity_name}
          </p>
        )}
      </div>

      <Button className="w-full lg:w-[50%]" type="submit" isMain={true}>
        ارسال
      </Button>
    </form>
  );
};

export default ContactUsForm;
