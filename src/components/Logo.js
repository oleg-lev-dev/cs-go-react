import React from 'react';
import styled from 'styled-components';

const Wrap = styled.a`
  display: block;
  text-decoration: none;  
  width: 193px;
  img{
    display: block;
    width: 100%;
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
