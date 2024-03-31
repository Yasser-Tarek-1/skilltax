import { Link } from "react-router-dom";
import Button from "../components/Layouts/Button";
import HelmetSEO from "../HelmetSEO/HelmetSEO";

const SEO_404 = {
  title: "SkillTax - Page Not Found",
  description: "هذه الصفحة ليست جزء من موقعنا في الوقت الحالي",
};

const ErrorPage = () => {
  return (
    <>
      <HelmetSEO {...SEO_404} />
      <div className="w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className=" text-7xl sm:text-[120px] font-extrabold text-primary">
            404
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-secondary mb-6">
            هذه الصفحة غير موجودة
          </p>

          <Link to="/">
            <Button isMain={true}>الصفحة الرئسية</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
