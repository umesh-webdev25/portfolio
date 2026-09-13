import { Helmet } from "react-helmet-async";

const SEO = () => {
  const siteUrl = "https://portfolio-seven-rho-2qtqbgnh1n.vercel.app/";

  const title = "Umesh Gayakwad | MERN Stack Developer";

  const description =
    "Umesh Gayakwad is a MERN Stack Developer specializing in React, JavaScript, Node.js, Express.js, MongoDB and modern web development.";

  const image = `${siteUrl}/assets/images/myImage.png`;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content="Umesh Gayakwad, MERN Stack Developer, React Developer, JavaScript Developer, Node.js Developer, Full Stack Developer, MongoDB Developer, Express.js Developer"
      />

      <meta
        name="author"
        content="Umesh Gayakwad"
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={siteUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={siteUrl}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:site_name"
        content="Umesh Gayakwad"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Umesh Gayakwad",
          url: siteUrl,
          image: image,
          jobTitle: "MERN Stack Developer",
          knowsAbout: [
            "React",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TypeScript",
            "Full Stack Development",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;