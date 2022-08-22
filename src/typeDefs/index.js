const { gql } = require('apollo-server')
// const { GraphQLDateTime } = require('graphql-iso-date')

const typeDefs = gql`
  type User {
    uid: ID
    nickName: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getUsers: [User]
    getUserById(uid: ID!): User
  }

  type Mutation {
    createUser(nickName: String!): User
  }
`

module.exports = typeDefs
