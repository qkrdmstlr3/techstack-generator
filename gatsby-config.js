module.exports = {
  siteMetadata: {
    siteUrl: 'https://techstack-generator.vercel.app/',
    title: 'Techstack Generator',
    description: `animated techstack markdown/html generator`,
    author: `shellboy`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Techstack-Generator',
        short_name: 'Techstack-Generator',
        start_url: '/',
        icon: 'src/asset/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://techstack-generator.vercel.app/',
        sitemap: 'https://techstack-generator.vercel.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
