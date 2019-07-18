import React from 'react';
import styled from 'styled-components';

const WrapDiv = styled.div`
  width: 1645px;
  margin: 0 auto;
`;

export default function Wrap({children}) {
  return (
    <WrapDiv>{children}</WrapDiv>
  );
}