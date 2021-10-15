import React from 'react';
import * as Style from './style';
import { ResultType } from '../../ui/SettingResult/index';
import SettingSize from '../../ui/SettingSize';
import SettingCount from '../../ui/SettingCount';
import SettingInterval from '../../ui/SettingInterval';
import SettingResult from '../../ui/SettingResult';

export interface SettingType {
  size: string;
  count: number;
  interval: string;
  results: ResultType[];
}

interface SettingTemplateProps {
  setting: SettingType;
  selectedCount: number;
  changeSetting: (key: string, value: any) => void;
  changeTemplate: (isBackButton?: boolean) => void;
}

function SettingTemplate({ setting, selectedCount, changeSetting, changeTemplate }: SettingTemplateProps) {
  const changeSize = (size: string) => {
    changeSetting('size', size);
  };

  const changeCount = (count: number) => {
    changeSetting('count', count < 1 ? 1 : Math.min(count, selectedCount));
  };

  const changeInterval = (interval: string) => {
    changeSetting('interval', interval);
  };

  const changeResults = (results: ResultType[]) => {
    changeSetting('results', results);
  };

  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      <Style.ContentWrapper>
        <SettingSize size={setting.size} changeSize={changeSize} />
        <SettingCount count={setting.count} changeCount={changeCount} />
        <SettingInterval interval={setting.interval} changeInterval={changeInterval} />
        <SettingResult results={setting.results} changeResults={changeResults} />
      </Style.ContentWrapper>
      <Style.ButtonWrapper>
        <Style.BackButton onClick={() => changeTemplate(true)}>BACK</Style.BackButton>
        <Style.ResultButton onClick={() => changeTemplate()}>RESULT</Style.ResultButton>
      </Style.ButtonWrapper>
      <Style.Copyright>
        made by{' '}
        <Style.ATag href="https://github.com/qkrdmstlr3" target="_blank">
          shellboy
        </Style.ATag>
      </Style.Copyright>
    </Style.Container>
  );
}

export default SettingTemplate;
