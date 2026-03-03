import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Ezone Group - Building Businesses, Creating Opportunities",
  description = "Ezone Group of Company Limited provides investment, land, and strategic partnerships to entrepreneurs and enterprises across multiple industries. Start or expand your business with us.",
  keywords = "business investment, business partnership, land development, commercial real estate, business funding, strategic partnerships, business opportunities, Nepal business, UK investment",
  ogImage = "/ezone_icon.png",
  ogType = "website",
  canonicalUrl = "",
  structuredData = null,
}) => {
  const siteUrl = "https://ezonegroup.com";
  const fullCanonicalUrl = canonicalUrl
    ? `${siteUrl}${canonicalUrl}`
    : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Ezone Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Ezone Group" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
