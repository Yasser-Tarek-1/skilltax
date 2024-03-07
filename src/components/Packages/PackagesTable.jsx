import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faO, faX, faXmark } from "@fortawesome/free-solid-svg-icons";

const PackagesTable = () => {
  return (
    <div className="w-full h-full mt-[55px] hidden lg:block">
      <div className="relative overflow-x-auto rounded-[40px] border-2">
        <table className="w-full text-sm text-left rtl:text-right  ">
          {/* Head */}
          <thead className="text-xs text-gray-700 uppercase bg-[#F9F9F9]">
            <tr className="h-48">
              <th
                scope="col"
                className="text-center text-[30px] font-[dinFontMedium] "
              >
                الخصائص
              </th>
              <th scope="col" className="text-center  ">
                <h4 className="text-[35px] leading-[50px] font-[dinFontMedium]">
                  باقة البداية
                </h4>
                <p className="text-[20px] leading-[30px] font-[dinFontRegular]">
                  الباقة المثاليّة للشّركات النّاشئة.
                </p>
              </th>
              <th scope="col" className="text-center ">
                <h4 className="text-[35px] leading-[50px] font-[dinFontMedium]">
                  باقة البداية
                </h4>
                <p className="text-[20px] leading-[30px] font-[dinFontRegular]">
                  الباقة المثاليّة للشّركات النّاشئة.
                </p>
              </th>
              <th scope="col" className="text-center">
                <h4 className="text-[35px] leading-[50px] font-[dinFontMedium]">
                  باقة البداية
                </h4>
                <p className="text-[20px] leading-[30px] font-[dinFontRegular]">
                  الباقة المثاليّة للشّركات النّاشئة.
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-white border-b-2 h-20">
              <th
                scope="row"
                className="px-7 text-[#00000099] whitespace-nowrap"
              >
                نظام نقاط البيع السّحابي
              </th>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr className="bg-white border-b-2 h-20">
              <th
                scope="row"
                className="px-7 text-[#00000099] whitespace-nowrap"
              >
                إدارة المخزون
              </th>
              <td className="text-center text-[#00000099] text-[25px]">
                إضافة إختيارية
              </td>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
            </tr>
            {/* row 3 */}
            <tr className="bg-white border-b-2 h-20">
              <th
                scope="row"
                className="px-7 text-[#00000099] whitespace-nowrap"
              >
                مناطق التوصيل{" "}
              </th>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faXmark}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
              <td className="text-center text-[#00000099] text-[25px]">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  color="#373873"
                  className="w-full mx-auto"
                />
              </td>
            </tr>
            {/* row 4 Price */}
            <tr className="bg-white border-b-2 h-28">
              <th scope="row" className="text-[#00000099] whitespace-nowrap">
                <button className="rounded-[100px] border-[3px] border-primary w-64 h-16 mx-auto flex gap-3 justify-center items-center py-2">
                  <span className="mt-1">
                    <FontAwesomeIcon icon={faO} color="#373873" size="2xl" />
                  </span>
                  <span className="text-black text-[25px] leading-[30px] font-normal font-[dinFontRegular]">
                    الدفع شهريا
                  </span>
                </button>
              </th>

              <td className="text-center text-black text-[40px]"> 2000 رس</td>
              <td className="text-center text-black text-[40px]"> 2000 رس</td>
              <td className="text-center text-black text-[40px]"> 2000 رس</td>
            </tr>
            {/* row 5 Price */}
            <tr className="bg-white border-b-2 h-28">
              <th scope="row" className="text-[#00000099] whitespace-nowrap">
                <button className="rounded-[100px] border-[3px] border-[#EEEEEEEE] w-64 h-16 mx-auto flex gap-3 justify-center items-center py-2">
                  <span className="mt-1">
                    <FontAwesomeIcon icon={faO} color="#EEEEEEEE" size="2xl" />
                  </span>
                  <span className="text-black text-[25px] leading-[30px] font-normal font-[dinFontRegular]">
                    الدفع سنويا
                  </span>
                </button>
              </th>
              <td className="text-center">
                <button className="h-16 w-56 bg-primary rounded-[100px] text-white text-2xl">
                  اطلب الان
                </button>
              </td>
              <td className="text-center">
                <button className="h-16 w-56 bg-primary rounded-[100px] text-white text-2xl">
                  اطلب الان
                </button>
              </td>
              <td className="text-center">
                <button className="h-16 w-56 bg-primary rounded-[100px] text-white text-2xl">
                  اطلب الان
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackagesTable;
