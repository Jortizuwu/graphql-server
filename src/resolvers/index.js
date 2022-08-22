const userMutations = require('./mutations/user')
const userQuery = require('./query/user')

const resolvers = {
  Query: {
    getUserById: (_, { id }) => userQuery.getUserById(id),
    getUsers: () => userQuery.getUsers()
  },
  Mutation: {
    createUser: (_, args) => userMutations.createUser(args)
  }
}

module.exports = resolvers
