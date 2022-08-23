const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const Role = dbconfig.define(
  'Role',
  {
    role_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'role',
    timestamps: false
  }
)
// ;(async function main () {
//   await Role.sync()
// })()
module.exports = Role
