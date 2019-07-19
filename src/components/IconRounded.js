import React from 'react';
import styled from 'styled-components';
import Icon from "../components/Icon";

const Wrap = styled.span`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.bgColor};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: ${props=>props.bgColorHover};  
  }
`;

function IconRounded({wrapWidth, bgColor, bgColorHover, ...props}) {
  return (
    <Wrap width={wrapWidth}
          bgColorHover={bgColorHover}
          bgColor={bgColor}>
      <Icon {...props}/>
    </Wrap>
  )
}

export default IconRounded;