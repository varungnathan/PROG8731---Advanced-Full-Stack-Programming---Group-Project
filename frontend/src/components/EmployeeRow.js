import React from 'react';
import { parseISO, format } from 'date-fns';

const formatDate = (dateString) => {
  let date;
  if (!isNaN(dateString)) {
    date = new Date(parseInt(dateString, 10));
  } else {
    date = parseISO(dateString);
  }
  return format(date, 'MMMM dd, yyyy');
};

const EmployeeRow = ({ employee }) => {
  const formattedDate = formatDate(employee.dateOfJoining);

  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.age}</td>
      <td>{formattedDate}</td>
      <td>{employee.title}</td>
      <td>{employee.department}</td>
      <td>{employee.employeeType}</td>
      <td>{employee.currentStatus ? 'Working' : 'Retired'}</td>
    </tr>
  );
};

export default EmployeeRow;
