import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu'
import {Link, withRouter} from 'react-router-dom';

const StyledNav = styled.nav`
  height: 100%;
`;

const StyledMenu = styled(Menu)`
  display: flex;
  align-items: center;
  height: 100%;
  ul {
     height: 100%;
  }
  li {
     height: 100%;
  }         
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
  route: '/bets',
  text: 'Ставки'
}, {
  route: '/news',
  text: 'Новости'
}, {
  route: '/ratings',
  text: 'Рейтинги'
}, {
  route: '/discounts',
  text: 'Скидки'
}, {
  route: '/help',
  text: 'Техподдержка'
}, {
  route: '/faq',
  text: 'Как это работает?'
}];

function MainMenu({location: {pathname}}) {
  return (
    <StyledNav>
      <StyledMenu>
        {links.map(({route, text}) => (
          <li>
            <StyledLink active={pathname === route} to={route}>{text}</StyledLink>
          </li>
        ))}
      </StyledMenu>
    </StyledNav>
  );
}

export default withRouter(MainMenu);