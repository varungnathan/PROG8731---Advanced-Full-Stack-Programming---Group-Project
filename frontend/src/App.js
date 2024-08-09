import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeCommunity from './components/EmployeeCommunity';
import EmployeeCommunityDetails from './components/EmployeeCommunityDetails'; // Import new component
import EmployeeDirectory from './components/EmployeeDirectory';
import Navbar from './components/Navbar';
import Recreation from './components/Recreation';
import './styles/styles.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/create" element={<EmployeeCreate />} />
      <Route path="/community" element={<EmployeeCommunity />} />
      <Route path="/community-details" element={<EmployeeCommunityDetails />} /> {/* New Route */}
      <Route path="/employees" element={<EmployeeDirectory />} />
      <Route path="/recreation" element={<Recreation />} />
      <Route path="/" element={<EmployeeDirectory />} /> {/* Default Route */}
    </Routes>
  </Router>
);

export default App;
