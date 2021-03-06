import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import breakpoints from 'utils/breakpoints';

const Wrap = styled(Link)`
  display: block;
  text-decoration: none;  
  width: 193px;
  margin: 0 39px 0 0;
  cursor: pointer;
  img{
    display: block;
    width: 100%;
  }
  ${breakpoints.large}{
    width: 150px;
    margin-right: 20px;
  }
  ${breakpoints.small}{
    width: 115px;
    margin-right: 15px;
  }
`;

function Logo() {
  return (
    <Wrap to="/">
      <img src='/images/logo.png' alt=""/>
    </Wrap>
  );
}

export default Logo;
