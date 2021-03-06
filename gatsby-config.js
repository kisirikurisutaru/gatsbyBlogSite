/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `https://affectionate-varahamihira-9f9433.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ESSENTIALS エッセンシャルズ`,
        short_name: `ESSENTIALS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "b22dddab-6afb-406c-bca5-3879b6f8fdab",
        serviceId: "yoshikinsei-blog",
        endpoint: "blog",
        query: {
          limit: 100,
        },
      },
    },

    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "b22dddab-6afb-406c-bca5-3879b6f8fdab",
        serviceId: "yoshikinsei-blog",
        endpoint: "category",
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: "gatsby-plugin-imgix",
      options: {
        domain: "images.microcms-assets.io",
        fields: [
          {
            nodeType: "MicrocmsBlog",
            fieldName: "featuredImage",
            getUrl: node => node.eyecatch.url,
          },
        ],
      },
    },
  ],
}
