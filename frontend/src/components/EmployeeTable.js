import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EMPLOYEES } from '../graphql/queries';
import EmployeeRow from './EmployeeRow';

const EmployeeTable = ({ searchTerm }) => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const filteredEmployees = data.employees.filter(employee =>
    (employee.firstName?.toLowerCase().includes(searchTerm?.toLowerCase() || '') ||
    employee.lastName?.toLowerCase().includes(searchTerm?.toLowerCase() || '') ||
    employee.department?.toLowerCase().includes(searchTerm?.toLowerCase() || '') ||
    employee.title?.toLowerCase().includes(searchTerm?.toLowerCase() || ''))
  );

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Date of Joining</th>
            <th>Title</th>
            <th>Department</th>
            <th>Employee Type</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
