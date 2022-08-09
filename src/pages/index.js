import * as React from 'react'
import Layout from '../components/layout'
import * as indexStyles from '../components/index.module.css'
// import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
        {/* This will be passed as a children */}
        <p >
          Web3 and Blockchain advocate. Enjoy creating stuff and overcoming challenges. Aspiring Web3/DeFi entrepreneur.
        </p>
        <div className={indexStyles.colorLine}></div>
        
    </Layout>
  )
}


export default IndexPage