const { DataTypes } = require('sequelize')
const { RoleModel } = require('..')
const { dbconfig } = require('../../db')

const User = dbconfig.define(
  'User',
  {
    uid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    nick_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        key: 'role_id',
        model: RoleModel
      }
    }
  },
  { tableName: 'user', timestamps: false }
)

// ;(async function main () {
//   await User.sync()
// })()

module.exports = User
