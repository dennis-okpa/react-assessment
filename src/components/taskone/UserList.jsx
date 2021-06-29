import React, { useState } from 'react';
import styled from 'styled-components';
import { useData, useFilter } from '../../utils/hooks';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const UserList = () => {
  const [value, setValue] = useState(null);
  const filter = useFilter(value);
  const data = useData(filter);

  const handleFilterChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        Filter:
        <input
          data-testid="searchBox"
          type="text"
          onChange={handleFilterChange}
          value={value || ''}
          placeholder="Enter username"
        />
      </div>
      <Users data-testid="user_table">
        {data.map((user) => (
          <Row key={user.id} data-testid="user_rows">
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
};

export default UserList;
