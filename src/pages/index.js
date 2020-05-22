import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TIL from "../components/TIL"
//  import Dump from "../components/dump"

const IndexWrapper = styled.main``
const TILWrapper = styled.div``

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/* <Dump data={data} /> */}
      <SEO title="Home" />
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, body, frontmatter, fields }) => (
          <TILWrapper key={id}>
            <TIL data={{ frontmatter, body, fields }} />
          </TILWrapper>
        ))}
      </IndexWrapper>
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
        }
        fields {
          slug
        }
      }
    }
  }
`
