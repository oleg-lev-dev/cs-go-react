import React, {useState} from 'react';
import styled from 'styled-components';

import MainMenu from 'components/Header/MainMenu';
import Col from 'components/Header/HeaderCol';
import Row from 'components/Header/HeaderRow';
import Support from 'components/Support';
import SelectLanguage from 'components/SelectLanguage';

const NavStyled = styled.nav`
  height: 100%;
`;

const SelectLanguageWrap = styled.div`
  width: 105px;
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
        <SelectLanguageWrap>
          <SelectLanguage/>
        </SelectLanguageWrap>
      </Col>
    </Row>
  );
}

export default HeaderBottom;