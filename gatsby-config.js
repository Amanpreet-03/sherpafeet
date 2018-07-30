module.exports = {
    plugins: [`gatsby-plugin-emotion`,
              `gatsby-plugin-typography`,
              {
                resolve: `gatsby-source-mongodb`,
                options: { dbName: `test`, collection: [`blogs`, `bookings`,`departures`,`guides`,`ratings`,`treks`,`usrs`],
                server:` { address: 127.0.0.1, port: 27017 }`},
              },
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

  
