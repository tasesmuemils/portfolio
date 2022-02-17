import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          twitterUsername
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* ICONS */}
      <link rel="icon" href="/EB_logo.ico" type="image/svg+xml" />
      <link rel="alternate icon" href="/EB_logo.ico" />
      {/* Meta tags*/}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/EB_logo.ico"} />
      {/* <meta property="og:title" content={title} key={ogtitle} />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key={ogsitename}
      />
      <meta
        property="og:description"
        content={description}
        key={ogdescription}
      /> */}
      {children}
    </Helmet>
  );
}
