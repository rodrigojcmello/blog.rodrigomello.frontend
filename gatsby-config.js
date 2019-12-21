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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 800
    //         }
    //       }
    //     ]
    //   }
    // },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `your_space_id`,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    //   }
    // },
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
