const { gql } = require('apollo-server-express');

const communityTypeDefs = gql`
  type Community {
    id: ID!
    employeeName: String!
    departmentName: String!
    clubName: String!
    numberOfMembers: Int!
  }

  input CommunityInput {
    employeeName: String!
    departmentName: String!
    clubName: String!
    numberOfMembers: Int!
  }

  type Query {
    communities: [Community]
  }

  type Mutation {
    createCommunity(input: CommunityInput!): Community
    editCommunity(id: ID!, input: CommunityInput!): Community
    deleteCommunity(id: ID!): Community
  }
`;

module.exports = communityTypeDefs;
