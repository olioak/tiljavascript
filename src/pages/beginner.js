import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
// import Dump from "../components/dump"

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: ${p => p.theme.spacing[2]} ${p => p.theme.spacing[8]};
  font-size: ${p => p.theme.fontSize.lg};
`;

const padNumber = num => `00${num}`.slice(-3);

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/* <Dump data={data} /> */}
      <SEO title="Beginner JavaScript" />
      <main>
        <Card>
          {data.allMdx.nodes.map(({ id, body, frontmatter, fields }) => (
            <StyledLink to={"/" + fields.slug} key={id}>
              # {padNumber(frontmatter.order)} {frontmatter.title}
            </StyledLink>
          ))}
        </Card>
      </main>
    </Layout>
  );
};

export default IndexPage;

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
`;
