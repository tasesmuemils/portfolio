module.exports = {
  siteMetadata: {
    title: `Emils Bisenieks Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `This is Emils Bisenieks web development portfolio page`,
    image: `/snape.jpg`,
    twitterUsername: `@tasesmuemils`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
