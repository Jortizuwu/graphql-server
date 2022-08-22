const { Sequelize } = require('sequelize')

const dbconfig = new Sequelize(
  process.env.DB_NAME,
  'root',
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
)

const connection = async () => {
  try {
    await dbconfig.authenticate()
    dbconfig.sync()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = { connection, dbconfig }
