const { v4: uuidv4 } = require('uuid')
const { RoleModel } = require('../../../models/')

const roleMutations = {
  createRole: async (args) => {
    try {
      return await RoleModel.create({
        role_id: uuidv4(),
        name: args.name
      })
    } catch (error) {
      return error
    }
  }
}

module.exports = roleMutations
