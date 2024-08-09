const { gql } = require('apollo-server-express');

const eventRegistrationTypeDefs = gql`
  type EventRegistration {
    id: ID!
    name: String!
    department: String!
    event: String!
  }

  input EventRegistrationInput {
    name: String!
    department: String!
    event: String!
  }

  type Query {
    getEventRegistrations: [EventRegistration]
  }

  type Mutation {
    createEventRegistration(input: EventRegistrationInput): EventRegistration
  }
`;

module.exports = eventRegistrationTypeDefs;
