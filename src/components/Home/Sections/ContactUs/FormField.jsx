const FormField = ({ label, placeholder, id, ...formik }) => {
  return (
    <div className="flex items-start flex-col gap-3 w-full">
      <label className="text-base" htmlFor={id}>
        {label} <span className="text-red-600">*</span>
      </label>
      <input
        id={id}
        type="text"
        className={`${
          formik.touched[id] && formik.errors[id]
            ? "border-red-600"
            : "border-[#ECECEC]"
        } w-full border-[1.5px] text-sm rounded-3xl h-14 lg:h-15 px-4 sm:px-5 outline-none `}
        placeholder={placeholder}
        onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        value={formik.values[id]}
      />
      {formik.touched[id] && formik.errors[id] && (
        <p className="text-sm text-red-600 mt-[-9px]">{formik.errors[id]}</p>
      )}
    </div>
  );
};

export default FormField;
