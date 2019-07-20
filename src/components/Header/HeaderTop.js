import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Button from 'components/Button';
import Logo from 'components/Header/Logo';
import Profile from 'components/Header/Profile';
import TopMenu from 'components/Header/TopMenu';
import Col from 'components/Header/HeaderCol';
import Row from 'components/Header/HeaderRow';
import MenuDropdown from 'components/Header/MenuDropdown';

import IconDice from 'icons/dice.svg';
import IconPlus from 'icons/plus.svg';

const StyledButton = styled(Button)`
  @media all and (max-width: 1320px){
    width: 45px;
    padding: 0;
    justify-content: center;
    span {
      display: none;
    }
    svg {
      margin: 0;
    }
  }
  @media all and (max-width: 1060px){
    display: none;       
  }
`;

const BalanceLink = styled(Link)`
  width: 24px;
  height: 24px;
  background-color: #17c06d;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
   width: 12px;
   height: 12px;   
  }
  &:hover,
  &:active {
    background-color: #68f1ad;
  }
  @media all and (max-width: 1060px){
    display: none;       
  }
`;

function HeaderTop() {
  return (
    <Row>
      <Col>
        <Logo/>
        <TopMenu/>
      </Col>
      <Col>
        <StyledButton>
          <IconDice/>
          <span>Мои ставки</span>
        </StyledButton>
        <Profile/>
        <BalanceLink to="/balance">
          <IconPlus/>
        </BalanceLink>
        <MenuDropdown/>
      </Col>
    </Row>
  );
}

export default HeaderTop;