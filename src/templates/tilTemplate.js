import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

const TilTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <h2>{frontmatter.title}</h2>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default TilTemplate

export const query = graphql`
  query TILsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
