import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu'
import {Link, withRouter} from 'react-router-dom';

const StyledNav = styled.nav`
  height: 100%;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  margin: 0 26px;  
  text-decoration: none;
  color: #4c5768;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.active ? '#0075f3' : 'transparent'}; 
  &:hover{
    border-bottom: 1px solid #0075f3;      
  }
`;

const links = [{
  to: '/bets',
  text: 'Ставки'
}, {
  to: '/news',
  text: 'Новости'
}, {
  to: '/ratings',
  text: 'Рейтинги'
}, {
  to: '/discounts',
  text: 'Скидки'
}, {
  to: '/help',
  text: 'Техподдержка'
}, {
  to: '/faq',
  text: 'Как это работает?'
}];

function MainMenu({location: {pathname}}) {
  return (
    <StyledNav>
      <Menu>
        {links.map(({to, text}) => (
          <li>
            <StyledLink active={pathname === to} to={to}>{text}</StyledLink>
          </li>
        ))}
      </Menu>
    </StyledNav>
  );
}

export default withRouter(MainMenu);