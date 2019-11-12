require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    useNullableAsDefault: true,
    connection: {
      database: process.env.DB_DEV_DATABASE,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASSWORD
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds "
    }
  }

};
