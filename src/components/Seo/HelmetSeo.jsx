import { Helmet } from "react-helmet-async";
import { skilltax, logo_primary } from "../../assets";

const HelmetSEO = ({ title, description = "", keywords = "" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={logo_primary} />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={skilltax} />
    </Helmet>
  );
};

export default HelmetSEO;
