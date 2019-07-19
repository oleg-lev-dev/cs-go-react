import React from 'react';
import styled from 'styled-components';

import HeaderTop from 'components/Header/HeaderTop';
import HeaderBottom from 'components/Header/HeaderBottom';

const Divider = styled.div`
  background: #eff2f5;
  height: 1px;
`;

function Header() {
  return (
    <header>
      <HeaderTop/>
      <Divider/>
      <HeaderBottom/>
    </header>
  );
}

export default Header;