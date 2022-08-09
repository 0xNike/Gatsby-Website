import * as React from 'react'
import { Link } from 'gatsby'
import * as layoutStyles from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import "@fontsource/ibm-plex-mono"
import "@fontsource/inter/variable.css"


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <title>{pageTitle}</title>
      <div className={layoutStyles.gridContainer}>
        <div className={layoutStyles.gridItem1}>
          <h1 className={layoutStyles.siteLogo}>0xNike</h1>
          <p>Student Developer</p>
        </div>
        <nav className={layoutStyles.gridItem2}>
          <ul className={layoutStyles.navLinks}>
            <li className={layoutStyles.navLinkItem}>
              <Link to="/" className={layoutStyles.navLinkText} activeClassName={layoutStyles.active}>
                  Home
              </Link ></li>
            <li className={layoutStyles.navLinkItem}>
              <Link to="/blog" className={layoutStyles.navLinkText} activeClassName={layoutStyles.active}>
                  Blog
              </Link></li>
              <li className={layoutStyles.navLinkItem}>
              <Link to="/blog" className={layoutStyles.navLinkText} activeClassName={layoutStyles.active}>
                  Projects
              </Link></li>
          </ul>
        </nav>
        <div className={layoutStyles.gridItem3}>
          <main>
          {children}
          </main>    
        </div>
      </div>
      <footer>
        <h2>Contact me</h2>
        <a href="https://github.com/0xNike">
         <StaticImage 
            alt="GitHub" 
            src="../images/github-brands.svg" 
            className={layoutStyles.icon}
            placeholder="none"
            />
        </a>
        <p>© 2022 0xNike.</p> 
      </footer>
    </div>
  )
}
export default Layout