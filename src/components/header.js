import React from 'react'
import {Link, graphql, useStaticQuery} from "gatsby"

//import '../styles/header.module.scss'
import banner from '../images/turkish-vegan.jpg'

import headerStyle from '../styles/header.module.scss'
const Header = () =>{
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return(
        <header className={headerStyle.header}>
            <div className={headerStyle.banner}>
                <img  src={banner}/>
            </div>
            
            <h3 className={headerStyle.title}>{data.site.siteMetadata.title}</h3>
            <nav>
                <ul className={headerStyle.navList}>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.navItemActive} to="/">home</Link></li> 
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.navItemActive} to="/about">recepies</Link></li>                   
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.navItemActive} to="/about">workshop</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.navItemActive} to="/about">book</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.navItemActive} to="/blog">blog</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.navItemActive} to="/about">about</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.navItemActive} to="/contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header