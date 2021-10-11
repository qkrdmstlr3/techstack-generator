import React from 'react';
import TechBox from '../../ui/TechBox';
import * as Style from './style';

interface TechType {
  selected: boolean;
}

interface SelectTemplateProps {
  techs: TechType[];
}

function SelectTemplate({ techs }: SelectTemplateProps) {
  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      <Style.TechStackList>
        {techs.map((tech, index) => (
          <Style.TechStackItem key={index}>
            <TechBox selected={tech.selected} />
          </Style.TechStackItem>
        ))}
      </Style.TechStackList>
      <Style.SettingButton>SETTING</Style.SettingButton>
      <Style.Copyright>made by shellboy</Style.Copyright>
    </Style.Container>
  );
}

export default SelectTemplate;
