const crypto = require('crypto');
const _ = require('lodash');
const path = require('path');

const buildSlug = node => {
  return `/${_.kebabCase(node.title.toLowerCase())}`;
};

function makeRequest(graphql, request) {
  return new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return makeRequest(
    graphql,
    `
    {
      allStrapiArticle {
        edges {
          node {
            id,
            title
          }
        }
      }
    }
    `
  ).then(result => {
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: buildSlug(node),
        component: path.resolve('src/templates/article/index.tsx'),
        context: {
          id: node.id
        }
      });
    });
  });
};

exports.onCreateNode = async ({ node, actions }) => {
  const { createNode } = actions;
  if (node.internal.type === 'StrapiArticle') {
    createNode({
      ...node,
      slug: buildSlug(node),
      id: `${node.id}-markdown`,
      parent: node.id,
      children: [],
      internal: {
        type: 'Article',
        mediaType: 'text/markdown',
        content: node.content,
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(node))
          .digest('hex')
      }
    });
  }
};
