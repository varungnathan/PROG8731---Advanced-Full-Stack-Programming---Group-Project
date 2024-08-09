import { gql } from '@apollo/client';

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($input: EmployeeInput!) {
    createEmployee(input: $input) {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
    }
  }
`;

export const CREATE_COMMUNITY = gql`
  mutation CreateCommunity($input: CommunityInput!) {
    createCommunity(input: $input) {
      id
      employeeName
      departmentName
      clubName
      numberOfMembers
    }
  }
`;

export const CREATE_EVENT_REGISTRATION = gql`
  mutation CreateEventRegistration($input: EventRegistrationInput!) {
    createEventRegistration(input: $input) {
      id
      name
      department
      event
    }
  }
`;

export const EDIT_COMMUNITY = gql`
  mutation EditCommunity($id: ID!, $input: CommunityInput!) {
    editCommunity(id: $id, input: $input) {
      id
      employeeName
      departmentName
      clubName
      numberOfMembers
    }
  }
`;

export const DELETE_COMMUNITY = gql`
  mutation DeleteCommunity($id: ID!) {
    deleteCommunity(id: $id) {
      id
    }
  }
`;
