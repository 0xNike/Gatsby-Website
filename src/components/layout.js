import * as React from 'react'
import { Link } from 'gatsby'
import * as layoutStyles from './layout.module.css'
import "@fontsource/ibm-plex-mono"
import "@fontsource/inter"
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

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
          <FontAwesomeIcon icon={brands('github')} size="2x" inverse />
        </a>        
      </footer>
    </div>
  )
}
export default Layout