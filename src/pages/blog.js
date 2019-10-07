import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Layout from '../components/layout'

const BlogPage = () => {
    const blogs = useStaticQuery(graphql`
    {
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
            }
          }
        }
    }
  `)
  const data = blogs.allMarkdownRemark.edges.map(blog => 
   <li>  <h3>{blog.node.frontmatter.title}</h3>  <p>{blog.node.frontmatter.date}</p> </li> 
     )

    return (
        <div>
            <Layout>
            <h2>Blogs</h2>
            <ol>{data}</ol>
            </Layout>
        </div>
    )
}

export default BlogPage