const { ApolloServer } = require('apollo-server')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} = require('apollo-server-core')

const { connection } = require('./db')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

connection()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false })
  ]
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
