module.exports = {
  siteMetadata: {
    baseUrl: 'https://nede.dev',
    title: `nede.dev`,
    description: `Dev blog of Peter Ruttkay-Nedecký`,
    author: `Peter Ruttkay-Nedecký`,
    authorShortDescription: 'I’m a freelance full stack software engineer and technology lead.',
    twitter: 'https://twitter.com/PNedecky',
    linkedIn: 'https://www.linkedin.com/in/peter-ruttkay-nedeck%C3%BD-69296bb3/',
    github: 'https://github.com/pruttned',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: { // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs
            // defaults to 'language-' (e.g. <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (e.g. for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: 'language-',
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: null,
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
          }
        },
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_blank',
            rel: 'nofollow noopener'
          }
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 680,
          }
        }]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nede.dev`,
        short_name: `nede.dev`,
        start_url: `/`,
        background_color: `#F6F6F6`,
        theme_color: `#2E3131`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-svg-sprite',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true // https://github.com/KyleAMathews/typography.js/issues/211
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
