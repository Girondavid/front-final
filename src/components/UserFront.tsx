import * as React from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const GreenAvatar = styled(Avatar)`
  background-color: green;
`;

const UserFront =()=> {
  return (
    <div>
        <GreenAvatar>V</GreenAvatar>
    </div>
  );
}
export default UserFront;
