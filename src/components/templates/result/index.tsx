import React from 'react';
import { SettingType } from '../setting/index';
import { TechType } from '../select/index';
import * as Style from './style';

interface ResultTemplateProps {
  setting: SettingType;
  techs: TechType[];
}

function ResultTemplate({ setting, techs }: ResultTemplateProps) {
  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      <Style.BackButton>BACK</Style.BackButton>
      <Style.Copyright>made by shellboy</Style.Copyright>
    </Style.Container>
  );
}

export default ResultTemplate;
