// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres:///parkour-wod'
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres:///parkour-wod'
    
  }

};
