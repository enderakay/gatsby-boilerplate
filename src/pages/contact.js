import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Layout from '../components/layout'

const ContactPage = () =>{
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          twitter
        }
      }
    }
  `)
    return (
        <div>
            <Layout>
            <h2>Title</h2>
            <p>Contact Details</p>
            <p>Go to my twitter <a href="https://twitter.com/ender_akay" target="_blank">ender_akay</a></p>
            </Layout>
        </div>
    )
}

export default ContactPage