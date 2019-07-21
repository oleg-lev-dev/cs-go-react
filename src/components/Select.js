import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';

const SelectWrap = styled.div`
  color: #3c4252;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  .react-select__single-value{
    margin: 0;
  }
  .react-select__control {
    cursor: pointer;
    width: 100%;
    border-radius: 0;
    height: 43px;
    border: 1px solid #e8ebf5 !important;
    background-color: #fff;
    box-shadow: none;
  }
  .react-select__value-container {
    padding: 0;
    height: 100%;
    justify-content: center;
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__menu{
    top: 0;
    left: 0;
    margin: 0;
    border-radius: 0;
    box-shadow: 0 9px 34px rgba(79, 113, 154, 0.18);
    border-bottom: 1px solid #fff;
  }
  .react-select__menu-list {
    padding: 0;
  }
  .react-select__option {
    cursor: pointer;
    height: 42px;
    display: flex;
    padding: 0 12px;
    align-items: center;
    background-color: #fff !important;
    &:hover{
      background-color: #f7f9fc !important;
    }
  }      
  .react-select__option--is-selected {
    background: #f7f9fc !important;    
    color: #3c4252;
  }
  .react-select__indicators {
    position: relative;
    z-index: 2;  
  }
  .react-select__indicator {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 3.5px 0 3.5px;
    border-color: #3c4252 transparent transparent transparent;
    padding: 0;
    margin: 0 18px 0 0;
    svg {
      display: none;
    }
  }
`;

function Select({value, onChange, options}) {
  return (
    <SelectWrap>
      <ReactSelect
        //menuIsOpen
        classNamePrefix="react-select"
        isSearchable={false}
        value={value}
        onChange={onChange}
        options={options}/>
    </SelectWrap>
  );
}

export default Select;