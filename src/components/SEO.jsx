import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "CursorClone - AI Coding Assistant for Developers",
  description = "Build software faster with an AI-powered coding assistant. Generate, refactor, and debug code instantly with CursorClone.",
  keywords = "AI coding assistant, Cursor AI alternative, code generation, AI developer tools, programming assistant, MERN development, AI IDE",
  author = "Samar Hirau",
  canonicalUrl = "https://yourdomain.com",
  ogImage = "https://yourdomain.com/og-image.png"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content="#0f172a" />
    </Helmet>
  );
}