import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import Layout from '../../components/layout';
import { Query } from '../../../graphql-types';
import H2 from '../../components/Typografy/H2';
import H1 from '../../components/Typografy/H1';
import P from '../../components/Typografy/P';
import Blockquote from '../../components/Typografy/Blockquote';
import './style.scss';
import SEO from '../../components/seo';
import H3 from '../../components/Typografy/H3';
import H4 from '../../components/Typografy/H4';

interface Props {
  data: Query;
}

function ArticleTemplate({ data }: Props): JSX.Element {
  // const disqusConfig = {
  //   url: 'https://rodrigomello.blog/teste',
  //   identifier: data.strapiArticle?.id,
  //   title: data.strapiArticle?.title
  // };

  return (
    <Layout>
      {data.strapiArticle?.title && <SEO title={data.strapiArticle.title} />}
      <H1>{data.strapiArticle?.title}</H1>
      <MDXProvider
        components={{
          h2: H2,
          h3: H3,
          h4: H4,
          p: P,
          blockquote: Blockquote
        }}
      >
        {data.mdx?.body && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
      </MDXProvider>
      {/* <Disqus config={disqusConfig} /> */}
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
