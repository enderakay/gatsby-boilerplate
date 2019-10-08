import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import footerStyle from '../styles/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
    return(
        <footer className={footerStyle.footer}>
            <p className={footerStyle.line}>Created by <span className={footerStyle.me}>{data.site.siteMetadata.author}</span>, Copyright &copy; 2019</p>
        </footer>
    )    
}

export default Footer