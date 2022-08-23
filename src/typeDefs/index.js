const { gql } = require('apollo-server')
// const { GraphQLDateTime } = require('graphql-iso-date')

const typeDefs = gql`
  # interfaces
  interface QueryResponse {
    code: String!
    success: Boolean!
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String
  }

  # types for the models
  type User {
    uid: ID
    nick_name: String
    role_id: ID
    Role: Role
  }

  type Role {
    role_id: ID
    name: String
  }

  type Book {
    book_id: ID
    content: String
    uid: ID
  }

  # types respones
  type getUsersResponse implements QueryResponse {
    code: String!
    success: Boolean!
    users: [User]!
  }

  type getUserResponse implements QueryResponse {
    code: String!
    success: Boolean!
    user: User
  }

  type createUserResponse implements QueryResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  # root Query
  type Query {
    getUsers: getUsersResponse
    getUserById(uid: ID!): getUserResponse
  }

  # root Mutation
  type Mutation {
    createUser(nick_name: String!, role_id: ID!): createUserResponse
    createRole(name: String!): Role
  }
`

module.exports = typeDefs
