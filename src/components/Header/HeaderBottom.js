import React from 'react';
import styled from 'styled-components';
import MainMenu from './MainMenu';
import Col from './HeaderCol';
import Row from './HeaderRow';
import Support from '../Support';

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