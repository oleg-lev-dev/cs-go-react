import React, {useState} from 'react';
import styled from 'styled-components';

import MainMenu from 'components/Header/MainMenu';
import Col from 'components/Header/HeaderCol';
import Row from 'components/Header/HeaderRow';
import Support from 'components/Support';
import Select from 'components/Select';

const NavStyled = styled.nav`
  height: 100%;
`;

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
];

function HeaderBottom() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <Row>
      <Col>
        <Support/>
        <NavStyled>
          <MainMenu/>
        </NavStyled>
      </Col>
      <Col>
        <Select
          classNamePrefix="react-select"
          //styles={customStyles}
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}/>
      </Col>
    </Row>
  );
}

export default HeaderBottom;