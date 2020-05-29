/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kebabCase = require(`lodash.kebabcase`);

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
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
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
    tils.forEach(til => {
      createPage({
        path: til.fields.slug,
        component: tilTemplate,
        context: {
          slug: til.fields.slug,
        },
      });
    });
  });
};
