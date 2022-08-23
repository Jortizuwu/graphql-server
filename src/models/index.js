const UserModel = require('./user')
const BookModel = require('./book')
const RoleModel = require('./role')

RoleModel.hasOne(UserModel, {
  foreignKey: 'role_id'
})
UserModel.belongsTo(RoleModel, {
  foreignKey: 'role_id'
})

// user
UserModel.hasMany(BookModel, {
  foreignKey: 'uid'
})
BookModel.belongsTo(UserModel)

module.exports = { RoleModel, UserModel, BookModel }
