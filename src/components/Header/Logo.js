import React from 'react';
import styled from 'styled-components';

import breakpoints from 'utils/breakpoints';

const Wrap = styled.a`
  display: block;
  text-decoration: none;  
  width: 193px;
  margin: 0 39px 0 0;
  cursor: pointer;
  img{
    display: block;
    width: 100%;
  }
  ${breakpoints.medium}{
    width: 150px;
    margin-right: 20px;
  }
`;

function Logo() {
  return (
    <Wrap>
      <img src='/images/logo.png' alt=""/>
    </Wrap>
  );
}

export default Logo;
