import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';

import Menu from 'components/Menu';
import IconDota from 'icons/dota.svg';
import IconGift from 'icons/gift.svg';
import IconEyeBox from 'icons/eye-box.svg';

const StyledMenu = styled(Menu)`
  li {
    align-items: center;
    max-width: 250px;
  }          
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  color: ${props => props.color};
  border-bottom: 2px solid ${props => props.active ? props.color : 'transparent'};
  padding: 0 28px; 
  &:hover{
    border-bottom-color: ${props => props.color};      
  }
  strong {
    font-weight: 700;  
  }
  
  @media all and (max-width: 1190px){
    padding: 0 20px;
  }
`;

const StyledLinkCsGo = styled.a`
  width: 90px;
  height: 90px;
  background: #2f3647;
  cursor: pointer;
  display: block;
  svg {
    height: 35px;
    width: 35px;
  }
  path {
    fill: #fff;  
  }
  &:hover{
    path {
      fill: #ff3c00;  
    }    
  }
`;

const StyledMenuItem = styled.li`
  border-right: 1px solid #eaeef1;
  path {
    fill: #fff;  
  }
`;

const StyledMenuText = styled.span`
  padding: 0 0 0 14px;
  strong {
    display: block;
  }
  
  @media all and (max-width: 1190px){
    padding: 0;
  }
`;

const IconRounded = styled.span`
  width: 45px;
  height: 45px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: ${props => props.bgColor};  
  }
  
  @media all and (max-width: 1320px){
    background-color: transparent;
    width: 26px;
    path {
      fill: ${(props)=>props.bgColor};
    }
  }
  
  @media all and (max-width: 1190px){
    display: none;
  }
`;

const links = [{
  to: '/bonus',
  text: <><strong>Бонусы</strong> Ежедневные раздачи</>,
  icon: <IconGift/>,
  color: '#2db2f0'
}, {
  to: '/faq',
  text: <><strong>Интуиция</strong> Угадывай события</>,
  icon: <IconEyeBox/>,
  color: '#0656f9'
}];

function TopMenu({location: {pathname}}) {
  return (
    <StyledMenu>
      <li>
        <StyledLinkCsGo to="/bonus">
          <IconDota/>
        </StyledLinkCsGo>
      </li>
      {links.map((link) => (<StyledMenuItem>
        <StyledLink to={link.to}
                    active={pathname === link.to}
                    color={link.color}>
          <IconRounded bgColor={link.color}>
            {link.icon}
          </IconRounded>
          <StyledMenuText>{link.text}</StyledMenuText>
        </StyledLink>
      </StyledMenuItem>))}
    </StyledMenu>
  );
}

export default withRouter(TopMenu);