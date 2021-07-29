import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'

const BlogPage = ({ data }) => {
  return(
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.edges.map(({ node }) => (
            <li key={node.name}>{node.name}</li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default BlogPage
