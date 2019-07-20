import React from 'react';
import styled from 'styled-components';

import Wrap from 'components/Wrap'
import breakpoints from 'utils/breakpoints';

const HeaderRow = styled(Wrap)`
  height: 90px;             
  display: flex;
  justify-content: space-between;
  
  ${breakpoints.xlarge}{{
    height: 70px;
  } 
  ${breakpoints.large}{
    height: 60px;  
  }
`;

export default HeaderRow;