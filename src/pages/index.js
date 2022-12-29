import * as React from 'react'
import Layout from '../components/layout'
import * as indexStyles from '../components/index.module.css'
import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

 const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
        {/* Introduction */}
        <p >
          Web3 and Blockchain advocate. Enjoy creating stuff and overcoming challenges. Aspiring Web3/DeFi entrepreneur.
        </p>
        <div className={indexStyles.colorLine}></div>
        {/* Content */}
        <div className={indexStyles.flexBox}>
          <div className={indexStyles.flexItem}>
            <h2>Skills:</h2>
            <ul className={indexStyles.twoCol}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Python</li>
              <li>Solidity</li>
            </ul>
          </div>
          <div className={indexStyles.flexItem}>
            <h2>Learning:</h2>
            <ul className={indexStyles.twoCol}>
              <li>React</li>
              <li>Brownie</li>
              <li>Cryptography</li>
            </ul>
          </div>
          <div className={indexStyles.flexItem}>
            <h2>Certification:</h2>
            <ul className={indexStyles.twoCol}>
              <li><a href="https://certificates.cs50.io/d8ba20d8-8388-48ec-b222-4b2833d92a11.pdf?size=letter">CS50</a></li>
              <li>Token Engineering</li>
              <li><Link to='https://google.com'>CS50</Link></li>
            </ul>
          </div>
        </div>
        
    </Layout>
  )
}


export default IndexPage