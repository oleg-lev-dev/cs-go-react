import React, {useState} from 'react';
import styled from 'styled-components';

import MainMenu from 'components/Header/MainMenu';
import Col from 'components/Header/HeaderCol';
import Row from 'components/Header/HeaderRow';
import Support from 'components/Support';
import SelectLanguage from 'components/SelectLanguage';
import MenuSocials from 'components/Header/MenuSocials';

const NavStyled = styled.nav`
  height: 100%;
`;

const SelectLanguageWrap = styled.div`
  width: 105px;
  margin: 0 0 0 35px;
`;

const RowBottom = styled(Row)`
  @media all and (max-width: 1190px){
    height: auto;
    flex-direction: column;
    padding-top: 20px;   
  }
`;

const ColBottom = styled(Col)`
  @media all and (max-width: 1190px){
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