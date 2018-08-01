module.exports = {
    plugins: [`gatsby-plugin-emotion`,
              `gatsby-plugin-typography`,
              {
                resolve: `gatsby-source-mongodb`,
                options: { dbName: `test`, 
                           collection: [`guides`,`treks`,`usrs`]
                         }
              }
            ],
  };
  


  

/*

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
*/

  
