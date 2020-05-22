import React from "react"
import { graphql } from "gatsby"
import TIL from "../components/TIL"
import Layout from "../components/layout"

const TilTemplate = ({ data }) => {
  return (
    <Layout>
      <TIL data={data.mdx} />
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
        rarity
        categories
      }
      fields {
        slug
      }
    }
  }
`
