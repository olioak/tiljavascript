import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Dump from "../components/Dump"

const IndexWrapper = styled.main``
const PostWrapper = styled.div``

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Dump data={data} /> */}
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
