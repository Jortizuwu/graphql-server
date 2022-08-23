const { userMutations, roleMutations } = require('./mutations')
const userQuery = require('./query/user')

const resolvers = {
  Query: {
    getUsers: () => userQuery.getUsers(),
    getUserById: (_, { uid }) => userQuery.getUserById(uid)
  },
  Mutation: {
    createUser: (_, args) => userMutations.createUser(args),
    createRole: (_, args) => roleMutations.createRole(args)
  }
}

module.exports = resolvers
