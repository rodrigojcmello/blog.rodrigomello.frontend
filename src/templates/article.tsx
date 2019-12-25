import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
// import { MDXProvider } from '@mdx-js/react';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
// import ReactMarkdown from 'react-markdown';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Prism from 'prismjs';
import Layout from '../components/layout';
import { Query } from '../../graphql-types';

interface Props {
  data: Query;
}

function ArticleTemplate({ data }: Props): JSX.Element {
  // eslint-disable-next-line no-console
  console.log({ data });

  return (
    <Layout>
      <h1>{data.strapiArticle?.title}</h1>
      <>
        <h1>nada</h1>
        {/* {JSON.stringify(data.strapiArticle?.content as string)} */}
        {/* <MDXRenderer> */}
        {/* <ReactMarkdown source={data.strapiArticle?.content as string} /> */}
        {/* </MDXRenderer> */}
        {/* {data.strapiArticle?.content as string} */}
        {/* <MDXProvider components={{}}> */}
        <span>
          <MDXRenderer>{data.mdx?.body as string}</MDXRenderer>
        </span>

        {/* </MDXProvider> */}
      </>
    </Layout>
  );
}

export default ArticleTemplate;

// export const query = graphql`
//   query ArticleTemplate($id: String!) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
    }
    markdownRemark(parent: { parent: { id: { eq: $id } } }) {
      htmlAst
      id
    }
    mdx(parent: { parent: { id: { eq: $id } } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
