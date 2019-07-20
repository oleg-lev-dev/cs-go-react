import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';

import Menu from 'components/Menu';
import IconDota from 'icons/dota.svg';
import IconGift from 'icons/gift.svg';
import IconEyeBox from 'icons/eye-box.svg';
import breakpoints from 'utils/breakpoints';

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
  
  ${breakpoints.large}{
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
  ${breakpoints.xlarge}{{
    width: 70px;
  } 
  ${breakpoints.large}{
    width: 60px;  
  }
  ${breakpoints.small}{
    width: 40px;
    svg {
      height: 20px;
      width: 20px;
    } 
  }
`;

const StyledMenuItem = styled.li`
  border-right: 1px solid #eaeef1;
  path {
    fill: #fff;  
  }
  
  ${breakpoints.small}{
    width: 40px;
  }
`;

const StyledMenuText = styled.span`
  padding: 0 0 0 14px;
  strong {
    display: block;
  }
  
  ${breakpoints.small}{
    display: none;
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
  
  ${breakpoints.xlarge}{
    background-color: transparent;
    width: 26px;
    path {
      fill: ${(props)=>props.bgColor};
    }
    
    &:hover{
      background-color: transparent;  
    }
  }
  ${breakpoints.small}{
    svg {
      height: 20px;
      width: 20px;
    } 
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