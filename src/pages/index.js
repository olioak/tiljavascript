import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TIL from "../components/TIL"
//  import Dump from "../components/dump"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/* <Dump data={data} /> */}
      <SEO title="Home" />
      <main>
        {data.allMdx.nodes.map(({ id, body, frontmatter, fields }) => (
          <div key={id}>
            <TIL data={{ frontmatter, body, fields }} />
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          order
          rarity
          categories
          references
        }
        fields {
          slug
        }
      }
    }
  }
`
