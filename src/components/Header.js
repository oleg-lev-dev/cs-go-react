import React from 'react';
import styled from 'styled-components';

import Wrap from '../components/Wrap'
import Logo from '../components/Logo'
import MainMenu from '../components/MainMenu'

const Row = styled.div`
  height: 90px;
  border-bottom: 1px solid #eff2f5;        
  &:last-child {
    border-bottom: none;
  }        
`;

const RowIn = styled(Wrap)`
  display: flex;
  align-items: center;
  height: 100%;
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
        <RowIn>
          <Logo/>
        </RowIn>
      </Row>
      <Row>
        <RowIn>
          <Support href="/">
            <img src="/images/icon-support.svg" alt=""/>
          </Support>
          <NavStyled>
            <MainMenu/>
          </NavStyled>
        </RowIn>
      </Row>
    </header>
  );
}

export default Header;