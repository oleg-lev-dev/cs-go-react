import React from 'react';
import styled from 'styled-components';

import IconSupport from 'icons/support.svg';

const Wrap = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  background: #7d8ea0;
  path {
    fill: #fff;  
  }
  &:hover{
    background-color: #0075f3;  
  }
`;

function Support() {
  return (
    <Wrap>
      <IconSupport/>
    </Wrap>
  );
}

export default Support;