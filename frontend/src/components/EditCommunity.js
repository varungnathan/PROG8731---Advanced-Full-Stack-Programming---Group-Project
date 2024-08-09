import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_COMMUNITY } from '../graphql/mutations';

const EditCommunity = ({ community, onClose }) => {
  const [formData, setFormData] = useState({
    employeeName: community.employeeName,
    departmentName: community.departmentName,
    clubName: community.clubName,
    numberOfMembers: community.numberOfMembers,
  });

  const [editCommunity, { loading, error }] = useMutation(EDIT_COMMUNITY, {
    onCompleted: () => {
      onClose(); // Close the edit form on success
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Edit Community:", { id: community.id, input: formData });
    editCommunity({ variables: { id: community.id, input: formData } });
  };

  return (
    <div>
      <h3>Edit Community</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="employeeName"
          placeholder="Employee Name"
          value={formData.employeeName}
          onChange={handleChange}
          required
        />
        <input
          name="departmentName"
          placeholder="Department Name"
          value={formData.departmentName}
          onChange={handleChange}
          required
        />
        <input
          name="clubName"
          placeholder="Club Name"
          value={formData.clubName}
          onChange={handleChange}
          required
        />
        <input
          name="numberOfMembers"
          type="number"
          placeholder="Number of Members"
          value={formData.numberOfMembers}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>Save</button>
      </form>
      {error && <p className="error-message">Error: {error.message}</p>}
    </div>
  );
};

export default EditCommunity;
