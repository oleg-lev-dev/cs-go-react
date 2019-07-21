import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Profile from 'components/Header/Profile';
import breakpoints from 'utils/breakpoints';
import IconCross from 'icons/cross.svg';
import IconBurger from 'icons/burger.svg';
import IconDice from 'icons/dice.svg';
import IconMoneyIn from 'icons/money-in.svg';
import IconMoneyOut from 'icons/money-out.svg';
import IconHistory from 'icons/history.svg';
import IconSetup from 'icons/setup.svg';
import IconExit from 'icons/exit.svg';

const Wrap = styled.div`
  margin: 0;
  position: relative;
  z-index: 3;
`;

const StyledProfile = styled(Profile)`
  border-bottom: 1px solid #f6f7f9;
  display: none;
  ${breakpoints.normal}{
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const Button = styled.div`
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const Dropdown = styled.div`
  width: 240px;
  box-shadow: 0 12px 85px rgba(30, 46, 97, 0.28);
  background-color: #ffffff;
  position: absolute;
  right: -26px;
  top: 49px;
  user-select: none;
  &:before {
    content: '';
    display: block;
    position: absolute;
    right: 19px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15.5px 10px 15.5px;
    border-color: transparent transparent #ffffff transparent;  
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  ${breakpoints.normal}{
    width: 320px;
  }
  
  ${breakpoints.small}{
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    &:before{
      display: none;
    }  
  }
  
`;

const DropdownItem = styled.li`
  border-bottom: 1px solid #f6f7f9;
  height: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #303441;
  font-size: 15px;
  font-weight: 400;
  line-height: 14px;
  padding: 0 0 0 54px;
  position: relative;
  border-left: 2px solid transparent;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    left: 22px;  
  }
  path {
    fill: #a2abb8;
  }
  
  &:hover{
    border-left: 2px solid #0b76ff;
    path {
      fill: #0b76ff;    
    }
  }
`;

const StyledExit = styled(StyledLink)`
  background-color: #0f1118;
  color: #fff;
  path {
    fill: #fff;
  }  
  &:hover {
    background-color: #f6f7f9;
    border-left: 2px solid transparent;
    color: #8d99a8;
    path {
      fill: #8d99a8;
    }
  }
`;

const Overlay = styled(StyledLink)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: .5;
  display: none;
  ${breakpoints.small}{
    display: block;  
  }
`;


function MenuDropdown() {
  const node = useRef();

  const [isOpen, setOpen] = useState(false);

  const handleClick = (event) => {
    // if (node.current.contains(event.target)) {
    //   return;
    // }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Wrap ref={node}>
      <Button onClick={() => setOpen(!isOpen)}>
        {isOpen && <IconCross/>}
        {!isOpen && <IconBurger/>}
      </Button>
      {isOpen && <Overlay/>}
      {isOpen && <Dropdown>
        <StyledProfile/>
        <ul>
          <DropdownItem>
            <StyledLink>
              <IconDice/>
              Мои ставки
            </StyledLink>
          </DropdownItem>
          <DropdownItem>
            <StyledLink>
              <IconMoneyIn/>
              Пополнить баланс
            </StyledLink>
          </DropdownItem>
          <DropdownItem>
            <StyledLink>
              <IconMoneyOut/>
              Вывести средства
            </StyledLink>
          </DropdownItem>
          <DropdownItem>
            <StyledLink>
              <IconHistory/>
              История операций
            </StyledLink>
          </DropdownItem>
          <DropdownItem>
            <StyledLink>
              <IconSetup/>
              Настройки аккаунта
            </StyledLink>
          </DropdownItem>
          <DropdownItem>
            <StyledExit>
              <IconExit/>
              Выйти из аккаунта
            </StyledExit>
          </DropdownItem>
        </ul>
      </Dropdown>}
    </Wrap>
  );
}

export default MenuDropdown;