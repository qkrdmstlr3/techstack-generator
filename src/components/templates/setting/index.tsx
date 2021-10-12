import React from 'react';
import * as Style from './style';

function SettingTemplate() {
  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      <Style.ButtonWrapper>
        <Style.BackButton>BACK</Style.BackButton>
        <Style.ResultButton>RESULT</Style.ResultButton>
      </Style.ButtonWrapper>
      <Style.Copyright>made by shellboy</Style.Copyright>
    </Style.Container>
  );
}

export default SettingTemplate;
