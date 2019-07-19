import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
  ul {
    height: 100%;
  }
  li {
    height: 100%;
  }
  a {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    text-decoration: none;
  }          
`;

function Menu({className, children}) {
  return (
    <StyledMenu className={className}>
      {children}
    </StyledMenu>
  );
}

export default Menu;