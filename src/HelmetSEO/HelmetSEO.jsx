import { Helmet } from "react-helmet-async";
import { skilltax, S_logo } from "../assets";

const HelmetSEO = ({ title, description = "", keywords = "" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={S_logo} />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={skilltax} />
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-F3DN9WTGV0"
      ></script>
      <script>
        {` window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-F3DN9WTGV0');`}
      </script>
    </Helmet>
  );
};

export default HelmetSEO;
