import { Helmet } from 'react-helmet';

const PageMeta = ({ title, description }) => {
  const sharedImage = "https://www.anvilandembermetalworks.com/images/og-image.jpg";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={sharedImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={sharedImage} />
    </Helmet>
  );
};

export default PageMeta;