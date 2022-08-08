import * as React from 'react'
import { Link } from 'gatsby'
import * as layoutStyles from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import "@fontsource/ibm-plex-mono"
import "@fontsource/inter"


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={layoutStyles.navLinks}>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/" activeClassName={layoutStyles.active}>
                Home
            </Link ></li>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/blog" className={layoutStyles.navLinkText} activeClassName={layoutStyles.active}>
                Blog
            </Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <h2>Contact me</h2>
        <a href="https://github.com/0xNike">
         <StaticImage alt="GitHub" src="../images/github-brands.svg" className={layoutStyles.icon}/>
         <StaticImage alt="GitHub" src="../images/CP9998.png" className={layoutStyles.icon}/>
        </a>        
      </footer>
    </div>
  )
}
export default Layout