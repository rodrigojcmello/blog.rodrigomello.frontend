import React, { ReactElement, ReactNode } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Query } from '../../graphql-types';
import { cn, tagColor } from '../utils/style';
import H2 from '../components/Typografy/H2';
import tagIcon from '../assets/icons/simple-small/tag-black.png';
import tagIcon2x from '../assets/icons/simple-small/tag-black@2x.png';
import tagIcon3x from '../assets/icons/simple-small/tag-black@3x.png';

export interface Props {
  data: Query;
}

function IndexPage({ data }: Props): ReactElement {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className={cn(['fs4', 'colorContrast8', 'pl10', 'mt8'], 'h1')}>
        Últimos Artigos:
      </h1>
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
                      'lg_pt10',
                      'pt5',
                      'pb5',
                      'pr10',
                      'ml10',
                      'lg_pr0',
                      'lg_pl0'
                    ],
                    'article'
                  )}
                >
                  <div
                    className={cn(
                      ['fs1', 'lg_textRight', 'mb3'],
                      'article time'
                    )}
                  >
                    Criado há 2 dias
                  </div>
                  <div>
                    <H2 className={['mb2']}>
                      <Link
                        className={cn(
                          [
                            tagColor(document.node.tags[0].name),
                            'noUnderline',
                            'lg_underline'
                          ],
                          'link h2'
                        )}
                        to={`/${kebabCase(
                          document.node.title.toLocaleLowerCase()
                        )}`}
                      >
                        {document.node.title}
                      </Link>
                    </H2>
                    <div className={cn(['flex', 'flexWrap'], 'flex wrapper')}>
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
                                  className={cn(['icon16', 'mr1'], 'icon 16')}
                                  srcSet={`${tagIcon}, ${tagIcon2x} 2x, ${tagIcon3x} 3x`}
                                />
                                <span>{tag.name}</span>
                              </span>
                            );
                          }
                          return undefined;
                        }
                      )}
                    </div>
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
          publishedAt
          updatedAt
          tags {
            id
            name
          }
        }
      }
    }
  }
`;
