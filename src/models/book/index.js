const { DataTypes } = require('sequelize')
const { dbconfig } = require('../../db')

const Book = dbconfig.define(
  'Book',
  {
    book_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'book'
  }
)

;(async function main () {
  await Book.sync()
})()

module.exports = Book
