import React from 'react';
import TechBox from '../../ui/TechBox';
import * as Style from './style';

export interface TechType {
  selected: boolean;
  src: string;
  number: number;
}

interface SelectTemplateProps {
  techs: TechType[];
  selectTech: (selectedTech: TechType) => void;
  changeTemplate: () => void;
}

function SelectTemplate({ techs, selectTech, changeTemplate }: SelectTemplateProps) {
  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      <Style.TechStackList>
        {techs.map((tech) => (
          <Style.TechStackItem key={tech.src}>
            <TechBox tech={tech} clickTech={selectTech} />
          </Style.TechStackItem>
        ))}
      </Style.TechStackList>
      <Style.SettingButton onClick={changeTemplate}>SETTING</Style.SettingButton>
      <Style.Copyright>
        made by{' '}
        <Style.ATag href="https://github.com/qkrdmstlr3" target="_blank">
          shellboy
        </Style.ATag>
      </Style.Copyright>
    </Style.Container>
  );
}

export default SelectTemplate;
