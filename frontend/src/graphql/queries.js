import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
      currentStatus
    }
  }
`;

export const GET_COMMUNITIES = gql`
  query GetCommunities {
    communities {
      id
      employeeName
      departmentName
      clubName
      numberOfMembers
    }
  }
`;
