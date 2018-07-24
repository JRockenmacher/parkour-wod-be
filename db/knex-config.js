const config = require('../knexfile')
const environment = process.env.NODE_ENV || 'development'
const pg = require('knex')(config[environment])

module.exports = pg

// const knexConfig = require('./knexfile')
// const configEnv = knexConfig[environment]

// const knex = require('knex')
// const connection = knex(configEnv)