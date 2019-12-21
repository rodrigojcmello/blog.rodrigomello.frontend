import React from 'react';
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import Layout from '../components/layout';
import { Query } from '../../graphql-types';

interface Props {
  data: Query;
}

function ArticleTemplate({ data }: Props): JSX.Element {
  return (
    <Layout>
      <h1>{data.strapiArticle?.title}</h1>
      {data.strapiArticle?.image?.childImageSharp?.fixed && (
        <Img
          fixed={data.strapiArticle.image.childImageSharp.fixed as FixedObject}
        />
      )}
      <p>{data.strapiArticle?.content}</p>
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
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
