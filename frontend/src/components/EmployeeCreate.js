import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_EMPLOYEE } from '../graphql/mutations';

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    age: '',
    dateOfJoining: '',
    title: 'Employee',
    department: 'IT',
    employeeType: 'FullTime',
  });

  const [errors, setErrors] = useState({});
  const [createEmployee] = useMutation(CREATE_EMPLOYEE);
  const [submissionError, setSubmissionError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const alphaRegex = /^[A-Za-z]+$/;

    if (!alphaRegex.test(employee.firstName)) {
      newErrors.firstName = 'Non Alphabetic Entries are Not Permitted';
    }

    if (!alphaRegex.test(employee.lastName)) {
      newErrors.lastName = 'Non Alphabetic Entries are Not Permitted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const formattedEmployee = {
        ...employee,
        age: parseInt(employee.age),
        dateOfJoining: new Date(employee.dateOfJoining).toISOString(), // Convert to UTC
      };
      await createEmployee({ variables: { input: formattedEmployee } });
      setEmployee({
        firstName: '',
        lastName: '',
        age: '',
        dateOfJoining: '',
        title: 'Employee',
        department: 'IT',
        employeeType: 'FullTime',
      });
      setSuccessMessage('Employee created successfully');
      setSubmissionError('');
    } catch (e) {
      setSubmissionError('Error creating employee: ' + e.message);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={employee.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        <input
          name="lastName"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={employee.age}
          onChange={handleChange}
          min="20"
          max="70"
          required
        />
        <input
          name="dateOfJoining"
          type="date"
          placeholder="Date of Joining"
          value={employee.dateOfJoining}
          onChange={handleChange}
          required
        />
        <select
          name="title"
          value={employee.title}
          onChange={handleChange}
        >
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
        </select>
        <select
          name="department"
          value={employee.department}
          onChange={handleChange}
        >
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
        </select>
        <select
          name="employeeType"
          value={employee.employeeType}
          onChange={handleChange}
        >
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </select>
        <button type="submit">Create Employee</button>
      </form>
      {submissionError && <p className="error-message">{submissionError}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default EmployeeCreate;
