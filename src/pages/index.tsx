import React, { ReactElement, ReactNode } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Query } from '../../graphql-types';
import { cn, tagColor } from '../utils/style';
import H2 from '../components/Typografy/H2';
import tagIcon from '../assets/icons/simple-small/tag-black.png';

export interface Props {
  data: Query;
}

const buildSlug = (title: string): string => {
  return `/${title.toLowerCase().replace(/ /g, '-')}`;
};

function IndexPage({ data }: Props): ReactElement {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className={cn(['fs4', 'colorContrast8'], 'h1')}>Últimos Artigos:</h1>
      <ul>
        {data.allStrapiArticle.edges.map(
          (document): ReactNode => {
            if (
              document.node.title &&
              document.node.tags &&
              document.node.tags[0]?.name
            ) {
              return (
                <li
                  key={document.node.id}
                  className={cn(
                    [
                      'borderSolid',
                      'borderBottom1',
                      'borderContrastColor1',
                      'pt5',
                      'pb5'
                    ],
                    'article'
                  )}
                >
                  <H2>
                    <Link
                      className={cn(
                        [tagColor(document.node.tags[0].name)],
                        'link h2'
                      )}
                      to={`${buildSlug(document.node.title)}`}
                    >
                      {document.node.title}
                    </Link>
                  </H2>
                  <div className={cn(['flex', 'mb2'], 'flex wrapper')}>
                    {(document.node.tags || []).map(
                      (tag): ReactNode => {
                        if (tag?.id && tag.name) {
                          return (
                            <span
                              key={tag.id}
                              className={cn(
                                ['fs1', 'mr3', 'colorContrast8', 'flex'],
                                'tags'
                              )}
                            >
                              <img
                                src={tagIcon}
                                alt="tag"
                                className={cn(['width16px', 'mr1'], 'icon 16')}
                              />
                              <span>{tag.name}</span>
                            </span>
                          );
                        }
                        return undefined;
                      }
                    )}
                  </div>
                </li>
              );
            }
            return undefined;
          }
        )}
      </ul>
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
