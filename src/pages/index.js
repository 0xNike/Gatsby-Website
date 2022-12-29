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
              <li>Brownie</li>
              <li>Cryptography</li>
            </ul>
          </div>
        </div>
        
    </Layout>
  )
}


export default IndexPage