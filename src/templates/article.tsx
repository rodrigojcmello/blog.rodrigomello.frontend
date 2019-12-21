import React from 'react';
import { graphql } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import { Query } from '../../graphql-types';

interface Props {
  data: Query;
}

function ArticleTemplate({ data }: Props): JSX.Element {
  return (
    <Layout>
      <h1>{data.strapiArticle?.title}</h1>
      {/* {data.strapiArticle?.image?.childImageSharp?.fluid && ( */}
      {/*  <Img */}
      {/*    fluid={data.strapiArticle.image.childImageSharp.fluid as FluidObject} */}
      {/*  /> */}
      {/* )} */}
      <ReactMarkdown source={data.strapiArticle?.content as string} />
    </Layout>
  );
}

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
