import { Helmet } from "react-helmet-async";

interface DocumentHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  robots?: string;
}

const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const DocumentHead = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  structuredData,
  robots = DEFAULT_ROBOTS,
}: DocumentHeadProps) => {
  const resolvedCanonicalUrl =
    canonicalUrl ??
    (typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : undefined);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {resolvedCanonicalUrl && <link rel="canonical" href={resolvedCanonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {resolvedCanonicalUrl && <meta property="og:url" content={resolvedCanonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Rör24" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default DocumentHead;
