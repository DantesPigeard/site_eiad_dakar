require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.eiad-dakar.com`,
  },
  plugins: [
    // FILE SYSTEM

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partenaires`,
        path: `${__dirname}/media/partenaires`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/media`,
      },
    },

    // TEXT
    `gatsby-transformer-plaintext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text`,
        path: `./media/`,
      },
    },

    // MARKDOWN
    // https://dev.to/alexalexyang/how-to-use-markdown-in-pages-in-gatsby-5dee
    // https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/media/markdown`,
        name: `markdown`,
      },
    },
    `gatsby-transformer-remark`,

    // IMAGE
    `gatsby-plugin-image`,
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

    // MANIFEST
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EIAD`,
        short_name: `EIAD`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `media/icon.png`,
      },
    },

    // CONTENTFUL
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags: true,
      },
    },
  ],
};
