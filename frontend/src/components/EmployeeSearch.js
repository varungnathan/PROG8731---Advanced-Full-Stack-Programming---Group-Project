import React from 'react';

const EmployeeSearch = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search employees..."
        onChange={handleChange}
      />
    </div>
  );
};

export default EmployeeSearch;
