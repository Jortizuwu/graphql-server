const { v4: uuidv4 } = require('uuid')
const { UserInputError } = require('apollo-server')

const { findUserByNickName } = require('../../../helpers/user')
const { UserModel } = require('../../../models/')
const { roleExist } = require('../../../helpers/role')

const userMutations = {
  createUser: async (args) => {
    try {
      const [userExist, role] = await Promise.all([
        await findUserByNickName(args.nick_name),
        await roleExist(args.role_id)
      ])

      if (userExist) {
        throw new UserInputError(
          `The nick name ${args.nick_name} is arealy used`
        )
      }

      if (!role) {
        throw new UserInputError('role not found')
      }

      const user = await UserModel.create({
        nick_name: args.nick_name,
        role_id: args.role_id,
        uid: uuidv4()
      })

      return {
        user,
        code: 200,
        message: 'user created',
        success: true
      }
    } catch (error) {
      return error
    }
  }
}

module.exports = userMutations
