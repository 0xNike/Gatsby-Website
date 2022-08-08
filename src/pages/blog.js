// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const BlogPage = () => {
  return (
    <Layout pageTitle="blog">
        <p>My thoughts about Blockchain</p>
        <p>This is system-ui font</p>
        <h6>This is apple system font</h6>
    </Layout>
  )
}

// Step 3: Export your component
export default BlogPage