import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  max-width: 1660px;
  margin: 0 auto;
  padding: 0 15px;
`;

function Wrap({children, className}) {
  return (
    <StyledWrap className={className}>{children}</StyledWrap>
  );
}

export default Wrap;