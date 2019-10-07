/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Turkish Vegan",
    author: "Ender Akay",
    twitter: "ender_akay"
  },
  plugins: [`gatsby-plugin-sass`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/posts`
    },    
  },
  'gatsby-transformer-remark'
]
}
