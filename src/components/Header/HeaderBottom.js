import React from 'react';
import styled from 'styled-components';

import MainMenu from 'components/Header/MainMenu';
import Col from 'components/Header/HeaderCol';
import Row from 'components/Header/HeaderRow';
import Support from 'components/Support';

const NavStyled = styled.nav`
  height: 100%;
`;

function HeaderBottom() {
  return (
    <Row>
      <Col>
        <Support/>
        <NavStyled>
          <MainMenu/>
        </NavStyled>
      </Col>
      <Col>
        Right
      </Col>
    </Row>
  );
}

export default HeaderBottom;