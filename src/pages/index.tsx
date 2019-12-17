import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { bgBlack, colorRed } from '../assets/styles/base.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function IndexPage({ data }: any): ReactElement {
  // eslint-disable-next-line no-console
  console.log({ data });
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className={`${bgBlack} ${colorRed}`}>DEPLOY TEST</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ul>
        {data.allStrapiArticle.edges.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (document: any): JSX.Element => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h2>
            </li>
          )
        )}
      </ul>
      <Link to="/page-2/">Go to page DOIS</Link>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle(filter: { publish: { eq: true } }) {
      edges {
        node {
          id
          title
          content
          publish
        }
      }
    }
  }
`;
