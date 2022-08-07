import * as React from 'react'
import { Link } from 'gatsby'
import * as layoutStyles from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={layoutStyles.navLinks}>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/" >
                Home
            </Link ></li>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/blog" className={layoutStyles.navLinkText}>
                Blog
            </Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={layoutStyles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout