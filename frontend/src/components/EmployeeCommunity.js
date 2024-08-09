import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_COMMUNITY } from '../graphql/mutations';

const EmployeeCommunity = () => {
  const [community, setCommunity] = useState({
    employeeName: '',
    departmentName: '',
    clubName: '',
    numberOfMembers: '',
  });

  const [errors, setErrors] = useState({});
  const [createCommunity] = useMutation(CREATE_COMMUNITY); // Removed unused 'error'
  const [submissionError, setSubmissionError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommunity({ ...community, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!community.employeeName) newErrors.employeeName = 'Employee name is required';
    if (!community.departmentName) newErrors.departmentName = 'Department name is required';
    if (!community.clubName) newErrors.clubName = 'Club name is required';
    if (!community.numberOfMembers || isNaN(community.numberOfMembers)) {
      newErrors.numberOfMembers = 'Number of members is required and must be a number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await createCommunity({
        variables: { input: {
          employeeName: community.employeeName,
          departmentName: community.departmentName,
          clubName: community.clubName,
          numberOfMembers: parseInt(community.numberOfMembers, 10),
        }}
      });
      setCommunity({
        employeeName: '',
        departmentName: '',
        clubName: '',
        numberOfMembers: '',
      });
      setSuccessMessage('Community created successfully');
      setSubmissionError('');
    } catch (e) {
      setSubmissionError('Error creating community: ' + e.message);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Employee Community</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="employeeName"
          placeholder="Employee Name"
          value={community.employeeName}
          onChange={handleChange}
          required
        />
        {errors.employeeName && <p className="error-message">{errors.employeeName}</p>}
        <input
          name="departmentName"
          placeholder="Department Name"
          value={community.departmentName}
          onChange={handleChange}
          required
        />
        {errors.departmentName && <p className="error-message">{errors.departmentName}</p>}
        <input
          name="clubName"
          placeholder="Club Name"
          value={community.clubName}
          onChange={handleChange}
          required
        />
        {errors.clubName && <p className="error-message">{errors.clubName}</p>}
        <input
          name="numberOfMembers"
          type="number"
          placeholder="Number of Members"
          value={community.numberOfMembers}
          onChange={handleChange}
          required
        />
        {errors.numberOfMembers && <p className="error-message">{errors.numberOfMembers}</p>}
        <button type="submit">Create Community</button>
      </form>
      {submissionError && <p className="error-message">{submissionError}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default EmployeeCommunity;
