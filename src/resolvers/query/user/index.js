const { UserInputError } = require('apollo-server')
const { userExist } = require('../../../helpers/user')
const { UserModel } = require('../../../models')

const userQuery = {
  getUsers: async () => {
    try {
      return await UserModel.findAll()
    } catch (error) {
      console.log(error)
    }
  },
  getUserById: async (uid) => {
    try {
      const user = userExist(uid)
      if (user) throw new UserInputError('user not found')
      return UserModel.findByPk(uid)
    } catch (error) {
      return error
    }
  }
}

module.exports = userQuery
