import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 45px;
  border-radius: 23px;
  background-color: #333f51;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  padding: 0 26px;
  svg {
    margin: 0 11px 0 -5px;  
    path {
      fill: #fff;
    }
  }
  &:hover,
  &:active {
    background-color: #6d809a;
  }
`;

function Button({children}) {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

export default Button;