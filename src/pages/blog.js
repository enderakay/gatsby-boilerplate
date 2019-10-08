import React from 'react'
import {Link, graphql, useStaticQuery} from "gatsby"
import Layout from '../components/layout'
import blogStyle from '../styles/blog.module.scss'
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
              fields{
                slug
              }
            }
          }
        }
    }
  `)
  const data = blogs.allMarkdownRemark.edges.map(blog => 
   <li className={blogStyle.post}>  
     <Link to = {`/blog/${blog.node.fields.slug}`}>
        <h2> {blog.node.frontmatter.title}</h2> 
        <p>{blog.node.frontmatter.date}</p> 
     </Link>
    </li> 
     )

    return (
        <div>
            <Layout>
            <h2>Blogs</h2>
            <ol className={blogStyle.posts}>{data}</ol>
            </Layout>
        </div>
    )
}

export default BlogPage