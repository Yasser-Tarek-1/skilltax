import { Helmet } from "react-helmet-async";
import { skilltax } from "../../assets";

const HelmetSeo = ({ title }) => {
  let description =
    "تسهيل وتنظيم عملية إدارة وتنظيم المطاعم و المبيعات بطريقة فعّالة وبسيطة. يتيح هذا النظام  إدارة جميع جوانب المطعم بكل يسر وسهولة.";
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={"../assets/logo_primary.svg"} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={"نظام مطعم, نقاط بيع, نظام نقاط بيع, كاشير, تطبيق كاشير"}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={skilltax} />
    </Helmet>
  );
};

export default HelmetSeo;
