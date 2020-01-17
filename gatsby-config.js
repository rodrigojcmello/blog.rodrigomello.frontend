const autoPrefixer = require('autoprefixer');
const combineMediaQuery = require('postcss-combine-media-query');

module.exports = {
  siteMetadata: {
    title: 'Rodrigo Mello',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: 'Rodrigo José Carvalho de Mello'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://157.245.168.132:1337',
        contentTypes: ['article'],
        queryLimit: 1000
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // 'gatsby-transformer-remark',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/article/index.tsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              colorTheme: 'Monokai'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'graphql-types.ts',
        codegen: true,
        codegenDelay: 250
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#264199',
        theme_color: '#2e993c',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-scss-typescript',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName:
            process.env.NODE_ENV === 'production'
              ? '[hash:base64:5]'
              : '[local]'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [autoPrefixer, combineMediaQuery]
      }
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'rodrigomello'
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: false,
        ignore: ['src/templates/article/style.scss']
      }
    }
  ]
};
