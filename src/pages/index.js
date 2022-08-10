import * as React from 'react'
import Layout from '../components/layout'
import * as indexStyles from '../components/index.module.css'
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
              <li>SQL</li>
              <li>Python</li>
              <li>Solidity</li>
            </ul>
          </div>
          <div className={indexStyles.flexItem}>
            <h2>Learning:</h2>
            <ul className={indexStyles.twoCol}>
              <li>React</li>
              <li>Redux</li>
              <li>GraphQL</li>
              <li>Cryptography</li>
              <li>Intermediate JS</li>
            </ul>
          </div>
          <div className={indexStyles.flexItem}>
            <h2>Certifications:</h2>
            <ul className={indexStyles.twoCol}>
              <li><a alt="CS50 Certification" href="https://certificates.cs50.io/d8ba20d8-8388-48ec-b222-4b2833d92a11.pdf?size=letter">CS50</a></li>
            </ul>
          </div>
        </div>
        
    </Layout>
  )
}


export default IndexPage