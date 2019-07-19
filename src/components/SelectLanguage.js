import React, {useState} from 'react';
import styled from 'styled-components';

import Select from 'components/Select';

const SelectItem = styled.div`
  display: flex;
  img {
    display: block;
    width: 20px;
    height: 13px;  
    margin: 0 9px 0 0;    
  }
`;

const options = ['en', 'ru', 'de'].map((language) => ({
  value: language,
  label: <SelectItem><img src={`/images/flag-${language}.png`} alt={language}/> {language.toUpperCase()}</SelectItem>
}));

function SelectLanguage() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onChange = (language) => {
    setSelectedOption(language)
  };

  return (
    <Select
      value={selectedOption}
      onChange={onChange}
      options={options}/>
  );
}

export default SelectLanguage;