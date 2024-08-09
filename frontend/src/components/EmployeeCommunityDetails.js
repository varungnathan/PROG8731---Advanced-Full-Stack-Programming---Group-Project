import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMUNITIES } from '../graphql/queries';

const EmployeeCommunityDetails = () => {
  const { loading, error, data } = useQuery(GET_COMMUNITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Employee Community Details</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Department Name</th>
            <th>Club Name</th>
            <th>Number of Members</th>
          </tr>
        </thead>
        <tbody>
          {data.communities.map((community) => (
            <tr key={community.id}>
              <td>{community.employeeName}</td>
              <td>{community.departmentName}</td>
              <td>{community.clubName}</td>
              <td>{community.numberOfMembers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeCommunityDetails;
