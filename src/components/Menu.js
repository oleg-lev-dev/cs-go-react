import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;          
`;

function Menu({className, children}) {
  return (
    <StyledMenu className={className}>
      {children}
    </StyledMenu>
  );
}

export default Menu;