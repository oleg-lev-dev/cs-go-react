import React from 'react';
import styled from 'styled-components';

import IconRounded from '../IconRounded';
import MainMenu from './MainMenu';
import Col from './HeaderCol';
import Row from './HeaderRow';

const NavStyled = styled.nav`
  height: 100%;
`;

const Support = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  background: #7d8ea0;
  path {
    fill: #fff;  
  }
  &:hover{
    background-color: #0075f3;  
  }
`;

function HeaderBottom() {
  return (
    <Row>
      <Col>
        <Support>
          <IconRounded
            width={21}
            height={17}
            wrapWidth={45}
            viewBox="0 0 33 42"
            bgColor="#7d8ea0"
            bgColorHover="#0075f3"
            path="M32.99927,16.15154v11.30766c0,0.96969 -0.66005,1.61555 -1.65023,1.61555h-3.29979c-0.99018,0 -1.65023,-0.64586 -1.65023,-1.61555v-7.10806c0,-0.64527 0.49509,-1.13012 0.99018,-1.45334l2.30983,-1.13071v-1.61555c0,-7.10806 -5.93998,-12.92321 -13.19982,-12.92321c-7.26007,0 -13.20004,5.81515 -13.20004,12.92321v1.61555l2.30983,1.13071c0.66005,0.32323 0.99018,0.80807 0.99018,1.45334v7.10806c0,0.96969 -0.66005,1.61555 -1.65023,1.61555h-3.29979c-0.99018,0 -1.65023,-0.64586 -1.65023,-1.61555v-11.30766c0,-8.88464 7.42525,-16.15372 16.50028,-16.15372c9.07481,0 16.50006,7.26909 16.50006,16.15372zM28.04925,32.30586h3.29979c0,4.52283 -3.62992,8.07657 -8.25003,8.07657h-3.7951c-0.49487,0.96909 -1.64978,1.61555 -2.8047,1.61555c-1.81518,0 -3.30023,-1.45453 -3.30023,-3.2311c0,-1.77657 1.48505,-3.23051 3.30023,-3.23051c1.15491,0 2.30983,0.64646 2.8047,1.61496h3.7951c2.80514,0 4.95024,-2.09921 4.95024,-4.84547z"/>
        </Support>
        <NavStyled>
          <MainMenu/>
        </NavStyled>
      </Col>
      <Col>
        Right
      </Col>
    </Row>
  );
}

export default HeaderBottom;