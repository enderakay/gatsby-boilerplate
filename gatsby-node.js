const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark') 
    {
      const slug = path.basename(node.fileAbsolutePath, '.md')
      console.log(slug)
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })
    }
  }

  module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const res = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  
      // Create blog post pages.
      res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
          // Path for this page — required
          path: `/blog/${edge.node.fields.slug}`,
          component: blogPostTemplate,
          context: {
            slug: edge.node.fields.slug
          },
        })
      })
  }