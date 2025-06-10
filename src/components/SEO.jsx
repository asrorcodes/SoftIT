import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Soft IT",
  description = "Ilg'or texnologiyalar va IT sanoati yangiliklari haqidagi asosiy manbaingiz.",
  keywords = "it,it xizmatlar,it konsulting,IT kansalting,texnologiya, IT konsalting xizmatlari, IT maslahatlar,IT yechimlar,vebsayt,kiberxavfsizlik,IT outsourcing",
  image = "/MainLogo.svg",
  url = "https://softit.uz/",
}) => {
  const siteName = "SOFTIT";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;