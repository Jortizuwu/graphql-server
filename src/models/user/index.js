const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const User = dbconfig.define(
  'User',
  {
    uid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  { tableName: 'user' }
)

;(async function main () {
  await User.sync()
})()

module.exports = User
