// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
        {/* This will be passed as a children */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu mi, scelerisque vel mi consequat, 
          lobortis gravida arcu. Maecenas dignissim pretium eros. Mauris iaculis ultricies turpis faucibus lacinia. 
          Suspendisse massa justo, egestas nec leo ac, pellentesque molestie erat. Aenean ligula massa, placerat id 
          urna nec, ultrices dignissim ante. Quisque viverra consectetur nibh, vel vulputate elit dignissim et. 
          Duis ut pharetra nulla, non iaculis nunc. Nam aliquet hendrerit metus, ut porta nulla venenatis sit amet.
        </p>
        {/* <StaticImage alt="Ethereum Finance" src="https://ethereum.org/static/0453c88b09ddaa2c7e7552840c650ad2/41cf9/finance_transparent.webp"/>
        <StaticImage alt="CryptoPunk #9998" src="../images/CP9998.png"/> */}
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage