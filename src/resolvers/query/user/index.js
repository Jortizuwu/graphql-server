const { UserInputError } = require('apollo-server')
const { userExist } = require('../../../helpers/user')
const { UserModel, RoleModel } = require('../../../models')

const userQuery = {
  getUsers: async () => {
    try {
      const users = await UserModel.findAll({
        include: RoleModel
      })
      return {
        users,
        code: 200,
        success: true
      }
    } catch (error) {
      console.log(error)
    }
  },
  getUserById: async (uid) => {
    try {
      const userExi = userExist(uid)
      if (!userExi) throw new UserInputError('user not found')
      const user = await UserModel.findByPk(uid, {
        include: RoleModel
      })
      return {
        user,
        code: 200,
        success: true
      }
    } catch (error) {
      return error
    }
  }
}

module.exports = userQuery
