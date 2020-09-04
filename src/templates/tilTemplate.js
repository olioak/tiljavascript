import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import TIL from "../components/TIL";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NavContainer = styled.div`
  position: relative;
  height: 50px;
`;

const NavTitle = styled.span`
  font-size: ${p => p.theme.fontSize.sm};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.palette.gray[700]};
`;

const NavPrev = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
`;

const NavNext = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  text-align: right;
`;

const Prev = styled(Link)`
  max-width: 300px;
  color: ${p => p.theme.palette.blue[600]};
`;

const Next = styled(Link)`
  max-width: 300px;
  color: ${p => p.theme.palette.blue[600]};
`;

const TilTemplate = ({ data, pageContext }) => {
  const { prev, next } = pageContext;

  return (
    <>
      <Layout>
        <SEO title={data.mdx.frontmatter.title} />
        <TIL data={data.mdx} />
        <NavContainer>
          {prev && (
            <NavPrev>
              <NavTitle>Previous</NavTitle>
              <Prev to={`/${prev.fields.slug}`}>{prev.frontmatter.title}</Prev>
            </NavPrev>
          )}

          {next && (
            <NavNext>
              <NavTitle>Next</NavTitle>
              <Next to={`/${next.fields.slug}`}>{next.frontmatter.title}</Next>
            </NavNext>
          )}
        </NavContainer>
      </Layout>
    </>
  );
};

export default TilTemplate;

export const query = graphql`
  query TILsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        rarity                
        order
      }
      fields {
        slug
      }
    }
  }
`;
