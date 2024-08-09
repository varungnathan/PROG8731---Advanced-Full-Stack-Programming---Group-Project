const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    currentStatus: Boolean!
  }

  input EmployeeInput {
    firstName: String!
    lastName: String!
    age: Int!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
  }

  type Query {
    employees: [Employee]
  }

  type Mutation {
    createEmployee(input: EmployeeInput): Employee
  }
`;

module.exports = typeDefs;
