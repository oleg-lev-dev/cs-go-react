import React, {useState} from 'react';
import styled from 'styled-components';

import MainMenu from 'components/Header/MainMenu';
import Col from 'components/Header/HeaderCol';
import Row from 'components/Header/HeaderRow';
import Support from 'components/Support';
import SelectLanguage from 'components/SelectLanguage';
import MenuSocials from 'components/Header/MenuSocials';
import breakpoints from 'utils/breakpoints';

const NavStyled = styled.nav`
  height: 100%;
`;

const SelectLanguageWrap = styled.div`
  width: 105px;
  margin: 0 0 0 35px;
  ${breakpoints.large}{
    //width: 76px;
    margin: 0 0 0 20px;
  }
`;

const RowBottom = styled(Row)`
  ${breakpoints.normal}{
    padding-top: 20px;
    height: auto !important;
    flex-direction: column;
    align-items: center;    
  }
  
`;

const ColBottom = styled(Col)`
  ${breakpoints.normal}{
    padding-bottom: 20px;    
  }
`;

function HeaderBottom() {
  return (
    <RowBottom>
      <ColBottom>
        <Support/>
        <NavStyled>
          <MainMenu/>
        </NavStyled>
      </ColBottom>
      <ColBottom>
        <MenuSocials/>
        <SelectLanguageWrap>
          <SelectLanguage/>
        </SelectLanguageWrap>
      </ColBottom>
    </RowBottom>
  );
}

export default HeaderBottom;