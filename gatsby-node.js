/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kebabCase = require(`lodash.kebabcase`);

// FUTURE TODO: Check if I can remove this.
// https://stackoverflow.com/questions/56093598/react-dom-patch-is-not-detected-react-16-6-features-may-not-work
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};

/**
 * Converts a title to a slug.
 * It lowercases it first or it will convert JavaScript to java-script.
 * There is no need to deburr.
 * @param {*} title
 */
const titleToSlug = title => kebabCase(title.toLowerCase());

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    // const value = createFilePath({ node, getNode });
    const value = titleToSlug(node.frontmatter.title);
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const tilTemplate = path.resolve("src/templates/tilTemplate.js");

  return graphql(`
    query PAGES {
      allMdx(
        sort: { fields: [frontmatter___order], order: ASC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            order
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const tils = result.data.allMdx.nodes;

    // create page for each mdx file
    tils.forEach((til, idx) => {
      createPage({
        path: til.fields.slug,
        component: tilTemplate,
        context: {
          slug: til.fields.slug,
          prev: idx === 0 ? null : tils[idx - 1],
          next: idx === tils.length - 1 ? null : tils[idx + 1],
        },
      });
    });
  });
};
