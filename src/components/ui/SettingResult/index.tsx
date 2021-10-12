import React from 'react';
import * as Style from './style';

export enum ResultType {
  html = 'HTML',
  markdown = 'MARKDOWN',
}

interface SettingResultProps {
  results: ResultType[];
  changeResults: (results: ResultType[]) => void;
}

function SettingResult({ results, changeResults }: SettingResultProps) {
  const clickCheckBox = (selectedResult: ResultType) => {
    const existIndex = results.findIndex((result) => result === selectedResult);
    if (existIndex < 0) {
      changeResults([...results, selectedResult]);
      return;
    }
    changeResults(results.filter((result) => result !== selectedResult));
  };

  return (
    <Style.Container>
      <Style.Title>RESULT</Style.Title>
      <Style.CheckBoxWrapper>
        <Style.CheckBox onClick={() => clickCheckBox(ResultType.html)}>
          {results.find((result) => result === ResultType.html) && <Style.Check />}
        </Style.CheckBox>
        <Style.CheckTitle>{ResultType.html}</Style.CheckTitle>
      </Style.CheckBoxWrapper>
      <Style.CheckBoxWrapper>
        <Style.CheckBox onClick={() => clickCheckBox(ResultType.markdown)}>
          {results.find((result) => result === ResultType.markdown) && <Style.Check />}
        </Style.CheckBox>
        <Style.CheckTitle>{ResultType.markdown}</Style.CheckTitle>
      </Style.CheckBoxWrapper>
    </Style.Container>
  );
}

export default SettingResult;
