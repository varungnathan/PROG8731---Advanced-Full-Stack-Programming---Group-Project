import React, { useState } from 'react';
import EmployeeTable from './EmployeeTable';
import EmployeeSearch from './EmployeeSearch';

const EmployeeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <h2>Employee Directory</h2>
      <EmployeeSearch onSearch={onSearch} />
      <EmployeeTable searchTerm={searchTerm} />
    </div>
  );
};

export default EmployeeDirectory;
