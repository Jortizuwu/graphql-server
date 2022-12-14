const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const Book = dbconfig.define(
  'Book',
  {
    book_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'book',
    timestamps: false
  }
)
// ;(async function main () {
//   await Book.sync()
// })()
module.exports = Book
