// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
        {/* This will be passed as a children */}
        <h1>I'm 0xNike.</h1>
        <p>Student Developer</p>
        {/* <StaticImage alt="Ethereum Finance" src="https://ethereum.org/static/0453c88b09ddaa2c7e7552840c650ad2/41cf9/finance_transparent.webp"/>
        <StaticImage alt="CryptoPunk #9998" src="../images/CP9998.png"/> */}
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage