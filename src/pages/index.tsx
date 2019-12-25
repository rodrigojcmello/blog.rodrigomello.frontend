import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';
// import Img, { FixedObject } from 'gatsby-image';
// import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import _ from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { bgBlack, colorRed } from '../assets/styles/base.module.scss';
import { Query } from '../../graphql-types';

export interface Props {
  data: Query;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildSlug = (node: any): string => {
  let slug = `/${_.kebabCase(node.title)}`;
  if (node.categories) {
    slug += `/${node.categories
      .split(',')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((n: any) => _.trim(n))
      .join('/')}`;
  }
  return slug;
};

function IndexPage({ data }: Props): ReactElement {
  // eslint-disable-next-line no-console
  console.log({ data });

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
                <Link to={`${buildSlug(document.node)}`}>
                  {document.node.title}
                </Link>
                {/* <Link to={`/${document.node.id}`}>{document.node.title}</Link> */}
                {/* <Img */}
                {/*  fixed={ */}
                {/*    document.node.image?.childImageSharp?.fixed as FixedObject */}
                {/*  } */}
                {/* /> */}
                {/* <ReactMarkdown source={document.node.content as string} /> */}
              </h2>
            </li>
          )
        )}
      </ul>
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
          published
          content
          image {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
