const { UserInputError } = require('apollo-server')
const { v4: uuidv4 } = require('uuid')

const { findUserByNickName } = require('../../../helpers/user')
const { UserModel } = require('../../../models/')

const userMutations = {
  createUser: async (args) => {
    const { nickName } = args
    try {
      const user = await findUserByNickName(nickName)
      if (user) { throw new UserInputError(`The nick name ${nickName} is arealy used`) }
      return await UserModel.create({ nickName, uid: uuidv4() })
    } catch (error) {
      return error
    }
  }
}

module.exports = userMutations
