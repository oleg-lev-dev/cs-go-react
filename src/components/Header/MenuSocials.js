import React from 'react';
import styled from 'styled-components';

import Menu from 'components/Menu';
import breakpoints from 'utils/breakpoints';
import IconTelegram from 'icons/telegram.svg';
import IconSteam from 'icons/steam.svg';
import IconVk from 'icons/vk.svg';

const StyledMenu = styled(Menu)`
  li {
    align-items: center;
    margin: 0 0 0 25px;
    &:first-child {
      margin-left: 0;    
    }
  }            
  
  a{
    path {
      fill: #818d9e;
    }
    &:hover{
      path{
        fill: #1b2129;
      }
    }
  }
  
  ${breakpoints.large}{
    li {
      margin: 0 0 0 13px;
    }
  }
`;

function MenuSocials() {
  return (
    <StyledMenu>
      <li>
        <a href="/">
          <IconTelegram/>
        </a>
      </li>
      <li>
        <a href="/">
          <IconSteam/>
        </a>
      </li>
      <li>
        <a href="/">
          <IconVk/>
        </a>
      </li>
    </StyledMenu>
  );
}

export default MenuSocials;