import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  width: 1345px;
  max-width: 1645px;
  margin: 0 auto;
`;

function Wrap({children, className}) {
  return (
    <StyledWrap className={className}>{children}</StyledWrap>
  );
}

export default Wrap;