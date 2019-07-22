import styled from 'styled-components';

import Wrap from 'components/Wrap'
import breakpoints from 'utils/breakpoints';

const HeaderRow = styled(Wrap)`
  height: 90px;             
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;  
  border-bottom: 1px solid #eff2f5;
  background: #fff;
  ${breakpoints.xlarge}{{
    height: 70px;
    margin-top: 70px;
  } 
  ${breakpoints.large}{
    height: 60px;  
    margin-top: 60px;
  }
  ${breakpoints.small}{
    height: 50px;
    margin-top: 50px;
  }
  ${breakpoints.xsmall}{
    height: 40px;
    margin-top: 40px;
  }
`;

export default HeaderRow;