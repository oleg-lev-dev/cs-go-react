import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Icon from 'components/Icon';

const Wrap = styled.div`
  margin: 0;
  position: relative;
  z-index: 3;
`;

const Button = styled.div`
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const Dropdown = styled.div`
  width: 240px;
  max-height: 365px;
  box-shadow: 0 12px 85px rgba(30, 46, 97, 0.28);
  background-color: #ffffff;
  position: absolute;
  right: -26px;
  top: 49px;
  user-select: none;
  &:before {
    content: '';
    display: block;
    position: absolute;
    right: 19px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15.5px 10px 15.5px;
    border-color: transparent transparent #ffffff transparent;  
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const DropdownItem = styled.li`
  border-bottom: 1px solid #f6f7f9;
  height: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #303441;
  font-size: 15px;
  font-weight: 400;
  line-height: 14px;
  padding: 0 0 0 54px;
  position: relative;
  border-left: 2px solid transparent;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    left: 22px;  
  }
  
  &:hover{
    border-left: 2px solid #0b76ff;
    path {
      fill: #0b76ff;    
    }
  }
`;

function MenuDropdown() {
  const node = useRef();

  const [isOpen, setOpen] = useState(!false);

  const handleClick = (event) => {
    if (node.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Wrap ref={node}>
      <Button onClick={() => setOpen(!isOpen)}>
        {isOpen && <Icon width={16}
                         height={16}
                         fill="#27303b"
                         viewBox="0 0 32 32"
                         path="M-0.00029,3.24931v0l2.96943,-3.25064v0l13.00469,12.92736v0l13.0561,-12.92736v0l2.96943,3.25064v0l-12.94054,12.78765v0l12.94054,12.78765v0l-2.96943,3.17368v0l-13.0561,-12.92795v0l-13.00469,12.92795v0l-2.96943,-3.17368v0l12.87661,-12.78765v0z"/>}
        {!isOpen && <Icon width={21}
                          height={9}
                          fill="#27303b"
                          viewBox="0 0 42 18"
                          path="M1.99961,-0.00088h37.99997c1.1044,0 2.00003,0.89509 2.00003,1.99975c0,1.10466 -0.89563,2.00035 -2.00003,2.00035h-37.99997c-1.10462,0 -2.00003,-0.89569 -2.00003,-2.00035c0,-1.10466 0.89541,-1.99975 2.00003,-1.99975zM17.99966,13.99917h21.99993c1.1044,0 2.00003,0.89509 2.00003,1.99975c0,1.10466 -0.89563,2.00035 -2.00003,2.00035h-21.99993c-1.10462,0 -2.00003,-0.89569 -2.00003,-2.00035c0,-1.10466 0.89541,-1.99975 2.00003,-1.99975z"/>}
        {isOpen && <Dropdown>
          <ul>
            <DropdownItem>
              <StyledLink>
                <Icon width={18}
                      height={19}
                      fill="#a2abb8"
                      viewBox="0 0 36 37"
                      path="M0.67902,19.46194l10.546,-17.38862c1.20521,-1.98732 3.83064,-2.7208 5.88477,-1.40539l16.91625,10.83289c1.93343,1.23786 2.57045,4.06048 1.36502,6.04721l-10.54578,17.38862c-1.28053,2.11105 -3.95134,2.64325 -5.88477,1.4048l-16.91647,-10.83229c-2.05413,-1.31482 -2.64578,-3.93557 -1.36502,-6.04721zM14.29906,11.11069c1.32903,0.85188 3.09438,0.43038 3.92318,-0.93535c0.82836,-1.36691 0.34355,-3.05646 -0.98549,-3.90775c-1.32926,-0.85129 -3.0195,-0.55411 -3.84785,0.81221c-0.8288,1.36632 -0.4191,3.18019 0.91016,4.03088zM26.14056,18.69413c1.32903,0.85129 2.97345,0.35224 3.80225,-1.01349c0.82836,-1.36691 0.46447,-2.9795 -0.86479,-3.8302c-1.32903,-0.85129 -3.01927,-0.55411 -3.84763,0.81281c-0.8288,1.36573 -0.41932,3.1796 0.91016,4.03088zM6.91672,23.28326c1.32903,0.85129 3.09482,0.4292 3.92318,-0.93594c0.8288,-1.36632 0.41887,-3.18078 -0.91016,-4.03207c-1.32926,-0.85069 -3.09438,-0.4292 -3.92318,0.93653c-0.82836,1.36632 -0.4191,3.18019 0.91016,4.03147zM16.52842,20.98869c1.32926,0.85129 3.09482,0.42979 3.92318,-0.93653c0.8288,-1.36573 0.4191,-3.18019 -0.90994,-4.03147c-1.32926,-0.85129 -3.0946,-0.42979 -3.9234,0.93653c-0.82836,1.36632 -0.41887,3.18078 0.91016,4.03147zM18.75823,30.8661c1.32926,0.85129 2.9739,0.35224 3.80225,-1.01349c0.8288,-1.36691 0.54024,-3.10323 -0.78902,-3.95452c-1.32903,-0.85129 -3.09482,-0.42979 -3.9234,0.93713c-0.82858,1.36514 -0.41887,3.18019 0.91016,4.03088z"/>
                Мои ставки
              </StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink>
                <Icon width={21}
                      height={16}
                      fill="#a2abb8"
                      viewBox="0 0 42 32"
                      path="M5.73941,23.10599h4.29332c0.28007,0 0.4667,0.18944 0.4667,0.47359v2.60477c0,0.28356 -0.18664,0.473 -0.4667,0.473h-4.29332c-0.27984,0 -0.46648,-0.18944 -0.46648,-0.473v-2.60477c0,-0.28416 0.18664,-0.47359 0.46648,-0.47359zM1.86585,31.96102c-1.02662,0.04677 -1.86637,-0.8057 -1.86637,-1.89438v-21.07141c0,-1.04132 0.83975,-1.89379 1.86637,-1.89379h5.13352v-3.55196c0,-1.94055 1.58675,-3.55078 3.50006,-3.55078h28.00025c1.91309,0 3.49984,1.61022 3.49984,3.55078v17.75684c0,1.94233 -1.58675,3.55255 -3.49984,3.55255h-3.50028v5.20777c0,1.0425 -0.83998,1.89438 -1.86659,1.89438h-31.26696c0,0.04677 0,0.04677 0,0zM10.49943,3.54949c0,0 0,1.9891 0,3.55196h22.63337c1.02662,0 1.86659,0.85247 1.86659,1.89379v12.31109h3.50028v-17.75684zM3.49931,28.40906h28.00003v-17.75625h-28.00003zM24.96615,12.45248h4.29332c0.28007,0 0.4667,0.18885 0.4667,0.473v2.60418c0,0.28416 -0.18664,0.47359 -0.4667,0.47359h-4.29332c-0.28007,0 -0.46693,-0.18944 -0.46693,-0.47359v-2.60418c0,-0.28416 0.23358,-0.473 0.46693,-0.473zM17.49955,14.25095c2.8865,0 5.22651,2.37449 5.22651,5.30426c0,2.92918 -2.34,5.30367 -5.22651,5.30367c-2.88673,0 -5.22695,-2.37449 -5.22695,-5.30367c0,-2.92977 2.34023,-5.30426 5.22695,-5.30426z"/>
                Пополнить баланс
              </StyledLink>
            </DropdownItem>
          </ul>
        </Dropdown>}
      </Button>
    </Wrap>
  );
}

export default MenuDropdown;