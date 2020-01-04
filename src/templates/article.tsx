import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import { Query } from '../../graphql-types';
import H2 from '../components/Typografy/H2';
import H1 from '../components/Typografy/H1';
import P from '../components/Typografy/P';

interface Props {
  data: Query;
}

function ArticleTemplate({ data }: Props): JSX.Element {
  console.log(data);
  return (
    <Layout>
      <H1>{data.strapiArticle?.title}</H1>
      <>
        <h1>nada</h1>
        {/* {JSON.stringify(data.strapiArticle?.content as string)} */}
        {/* <MDXRenderer> */}
        {/* <ReactMarkdown source={data.strapiArticle?.content as string} /> */}
        {/* </MDXRenderer> */}
        {/* {data.strapiArticle?.content as string} */}
        {/* <MDXProvider components={{}}> */}
        <span>
          <MDXProvider
            components={{
              h2: H2,
              p: P
            }}
          >
            {data.mdx?.body && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
          </MDXProvider>
        </span>

        {/* </MDXProvider> */}
      </>
    </Layout>
  );
}

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
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
