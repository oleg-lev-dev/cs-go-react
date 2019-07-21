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
import breakpoints from 'utils/breakpoints';

import IconDice from 'icons/dice.svg';
import IconPlus from 'icons/plus.svg';

const StyledRow = styled(Row)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  margin-top: 0 !important;
`;
const StyledButton = styled(Button)`
  ${breakpoints.xlarge}{
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
  ${breakpoints.large}{
    display: none;       
  }
`;

const StyledProfile = styled(Profile)`
  ${breakpoints.normal}{
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
  ${breakpoints.large}{
    display: none;       
  }
`;

function HeaderTop() {
  return (
    <StyledRow>
      <Col>
        <Logo/>
        <TopMenu/>
      </Col>
      <Col>
        <StyledButton to="/balance">
          <IconDice/>
          <span>Мои ставки</span>
        </StyledButton>
        <StyledProfile/>
        <BalanceLink to="/balance">
          <IconPlus/>
        </BalanceLink>
        <MenuDropdown/>
      </Col>
    </StyledRow>
  );
}

export default HeaderTop;