import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { bgBlack, colorRed } from '../assets/styles/base.module.scss';
import { Props } from './types';
// import Lulu from './lulu.jpeg';

function IndexPage({ data }: Props): ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className={`${bgBlack} ${colorRed}`}>DEPLOY TEST</h1>
      <p>123 Nova home</p>
      <p>Now go build something great.</p>
      <ul>
        {data.allStrapiArticle.edges.map(
          (document): JSX.Element => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
                <Img
                  fixed={
                    document.node.image?.childImageSharp?.fixed as FixedObject
                  }
                />
                <p>{document.node.content}</p>
              </h2>
            </li>
          )
        )}
      </ul>
      {/* <img alt="lulu" src={Lulu} /> */}
      <Link to="/page-2/">Go to page two</Link>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle(filter: { published: { eq: true } }) {
      edges {
        node {
          id
          title
          content
          published
          content
          image {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
