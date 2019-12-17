module.exports = {
  siteMetadata: {
    title: 'Rodrigo Mello',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs and @rodrigomello'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://157.245.168.132:1337',
        contentTypes: ['article', 'user'],
        queryLimit: 1000
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    // 'gatsby-plugin-sass',
    'gatsby-plugin-scss-typescript'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
