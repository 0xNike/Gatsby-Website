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
            </ul>
          </div>
          <div className={indexStyles.flexItem}>
            <h2>Learning:</h2>
            <ul className={indexStyles.twoCol}>
              <li>React</li>
              <li>Solidity</li>
              <li>Brownie</li>
              <li>Cryptography</li>
            </ul>
          </div>
          <div className={indexStyles.flexItem}>
            <h2>Certification:</h2>
            <ul className={indexStyles.twoCol}>
              <li><Link to='https://certificates.cs50.io/d8ba20d8-8388-48ec-b222-4b2833d92a11.pdf?size=letter'>CS50</Link></li>
              <li><Link to='https://tokenengineering.net/user/6391be4b3221bdba9308cb73/'>Token Engineering</Link></li>
            </ul>
          </div>
          <div className={indexStyles.flexItem}>
            <h2>Experience:</h2>
            <ul className={indexStyles.twoCol}>
              <li>Crypto.com 2022 Hackathon Finalist</li>
            </ul>
          </div>
        </div>
        
    </Layout>
  )
}


export default IndexPage