import React from "react";
import { graphql } from "gatsby";
import TIL from "../components/TIL";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TilTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <TIL data={data.mdx} showReferences />
    </Layout>
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
        categories
        references
        order
      }
      fields {
        slug
      }
    }
  }
`;
