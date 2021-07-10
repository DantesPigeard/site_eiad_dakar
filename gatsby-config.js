module.exports = {
  siteMetadata: {
    siteUrl: `https://www.eiad-dakar.com`,
  },
  plugins: [
    // FILE
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/media`,
      },
    },

    // IMAGE
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        // forceBase64Format: ``, // valid formats: png,jpg,webp // don't work on OSX
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
  ],
};
