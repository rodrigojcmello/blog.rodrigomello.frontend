import React, { ReactElement, ReactNode } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { bgPrimary1 } from '../assets/style/base.module.scss';
import { Query } from '../../graphql-types';
import { cn } from '../utils/style';
import H2 from '../components/Typografy/H2';

export interface Props {
  data: Query;
}

const buildSlug = (title: string): string => {
  return title.toLowerCase().replace(/ /g, '-');
};

function IndexPage({ data }: Props): ReactElement {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className={`${bgPrimary1}`}>Articles</h1>
      <ul>
        {data.allStrapiArticle.edges.map(
          (document): ReactNode => {
            if (document.node.title) {
              return (
                <li key={document.node.id}>
                  <H2>
                    <Link to={`${buildSlug(document.node.title)}`}>
                      {document.node.title}
                    </Link>
                  </H2>
                  {(document.node.tags || []).map(
                    (tag): ReactNode => {
                      if (tag?.id && tag.name) {
                        return (
                          <span
                            key={tag.id}
                            className={cn(
                              ['fs1', 'mr2', 'colorContrast8'],
                              'tags'
                            )}
                          >
                            {tag.name}
                          </span>
                        );
                      }
                      return undefined;
                    }
                  )}
                </li>
              );
            }
            return undefined;
          }
        )}
      </ul>
      <Link to="/page-2/">Go to page two</Link>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allStrapiArticle(filter: { published: { eq: true } }) {
      edges {
        node {
          id
          title
          tags {
            id
            name
          }
        }
      }
    }
  }
`;
