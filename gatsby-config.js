const path = require('path');

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
    'gatsby-transformer-remark',
    // 'gatsby-transformer-remote-image',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/article.tsx')
        },
        gatsbyRemarkPlugins: [
          // 'gatsby-remark-images-anywhere',
          'gatsby-remark-responsive-image',
          // {
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     maxWidth: 1035,
          //     sizeByPixelDensity: true
          //   }
          // },
          // 'gatsby-remark-code-buttons',
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              colorTheme: 'Light+ (default light)' // Read on for list of included themes. Also accepts object and function forms.
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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-scss-typescript'
  ]
};
