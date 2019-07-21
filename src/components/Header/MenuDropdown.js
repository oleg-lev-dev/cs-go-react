import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {Transition} from 'react-transition-group';
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
  position: relative;
  z-index: 1;
  ${breakpoints.xsmall}{
    z-index: 4;
  }
`;

const Dropdown = styled.div`
  width: 240px;
  box-shadow: 0 12px 85px rgba(30, 46, 97, 0.28);
  background-color: #ffffff;
  user-select: none;
  transition: all 300ms ease-in-out;
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
    box-shadow: none;
    opacity: 1 !important;
    &:before{
      display: none;
    }  
  }
  
  @media (min-width: 768px){
    position: absolute;
    right: -25px !important;
    top: 49px !important;
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

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000;
  display: none;
  transition: all 500ms ease-in-out;
  z-index: 2;
  ${breakpoints.small}{
    display: block;  
  }
`;

const transitionDropdownStyles = {
  entering: {right: 0, opacity: 1, boxShadow: '0 12px 85px rgba(30, 46, 97, 0.28)', zIndex: 3},
  entered: {right: 0, opacity: 1, boxShadow: '0 12px 85px rgba(30, 46, 97, 0.28)', zIndex: 3},
  exiting: {right: -320, opacity: 0, boxShadow: null, zIndex: 0},
  exited: {right: -320, opacity: 0, boxShadow: null, zIndex: 0},
};

const transitionOverlayStyles = {
  entering: {opacity: 0.5, display: 'block'},
  entered: {opacity: 0.5},
  exiting: {opacity: 0},
  exited: {opacity: 0, display: 'none'},
};

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

  return [
    <Wrap ref={node}>
      <Button onClick={() => setOpen(!isOpen)}>
        {isOpen && <IconCross/>}
        {!isOpen && <IconBurger/>}
      </Button>
      <Transition in={isOpen} timeout={300}>
        {state => (
          <Dropdown style={transitionDropdownStyles[state]}>
            <>
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
            </>
          </Dropdown>
        )}
      </Transition>
    </Wrap>,
    <Transition in={isOpen}
                timeout={500}>
      {state => (<Overlay onClick={() => setOpen(false)} style={transitionOverlayStyles[state]}/>)}
    </Transition>
  ];
}

export default MenuDropdown;