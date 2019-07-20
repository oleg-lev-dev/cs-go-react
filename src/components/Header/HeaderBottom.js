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

function HeaderBottom() {
  return (
    <Row>
      <Col>
        <Support/>
        <NavStyled>
          <MainMenu/>
        </NavStyled>
      </Col>
      <Col>
        <MenuSocials/>
        <SelectLanguageWrap>
          <SelectLanguage/>
        </SelectLanguageWrap>
      </Col>
    </Row>
  );
}

export default HeaderBottom;