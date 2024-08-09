const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const connectDB = require('./config/databaseConfig');
const employeeTypeDefs = require('./schemas/employeeGraphQLSchema');
const communityTypeDefs = require('./schemas/communityGraphQLSchema');
const eventRegistrationTypeDefs = require('./schemas/eventRegistrationGraphQLSchema');
const employeeResolvers = require('./resolvers/employeeResolvers');
const communityResolvers = require('./resolvers/communityResolvers');
const eventRegistrationResolvers = require('./resolvers/eventRegistrationResolvers');

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS
app.use(cors());

const typeDefs = gql`
  ${employeeTypeDefs}
  ${communityTypeDefs}
  ${eventRegistrationTypeDefs}
`;

const resolvers = {
  Query: {
    ...employeeResolvers.Query,
    ...communityResolvers.Query,
    ...eventRegistrationResolvers.Query,
  },
  Mutation: {
    ...employeeResolvers.Mutation,
    ...communityResolvers.Mutation,
    ...eventRegistrationResolvers.Mutation,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen({ port: PORT }, () =>
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
});
