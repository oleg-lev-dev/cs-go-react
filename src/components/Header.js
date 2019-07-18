import React from 'react';
import styled from 'styled-components';

import Wrap from '../components/Wrap'
import Logo from '../components/Logo'
import MainMenu from '../components/MainMenu'

const Row = styled(Wrap)`
  height: 90px;             
  display: flex;
  justify-content: space-between; 
`;

const Divider = styled.div`
  background: #eff2f5;
  height: 1px;
`;

const Col = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavStyled = styled.nav`
  height: 100%;
`;

const Support = styled.a`
  width: 41px;
  height: 41px;
  background-color: #7d8ea0;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #0075f3;  
  }
`;


function Header() {
  return (
    <header>
      <Row>
        <Col>
          <Logo/>
        </Col>
      </Row>
      <Divider/>
      <Row>
        <Col>
          <Support href="/">
            <img src="/images/icon-support.svg" alt=""/>
          </Support>
          <NavStyled>
            <MainMenu/>
          </NavStyled>
        </Col>
        <Col>
          Right
        </Col>
      </Row>
    </header>
  );
}

export default Header;