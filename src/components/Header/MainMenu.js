import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';

import Menu from 'components/Menu'
import breakpoints from 'utils/breakpoints';

const StyledMenu = styled(Menu)`
  height: 100%;
  ${breakpoints.small}{
    flex-direction: column;  
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
  border-bottom: 1px solid ${props => props.active === 'active' ? '#0075f3' : 'transparent'}; 
  &:hover{
    border-bottom: 1px solid #0075f3;      
  }
  ${breakpoints.large}{
    margin: 0 15px 0 ${props => props.index === 1 ? 0 : '15px'};
    font-size: 14px;
  }
  ${breakpoints.normal}{
    height: 45px !important;  
  }
  ${breakpoints.small}{
    margin: 0;  
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
    <StyledMenu>
      {links.map(({to, text}, index) => (
        <li key={to}>
          <StyledLink active={(pathname === to).toString()}
                      index={index}
                      to={to}>{text}</StyledLink>
        </li>
      ))}
    </StyledMenu>
  );
}

export default withRouter(MainMenu);