import React from 'react';
import * as Style from './style';

interface SettingCountProps {
  count: number;
  changeCount: (count: number) => void;
}

function SettingCount({ count, changeCount }: SettingCountProps) {
  return (
    <Style.Container>
      <Style.Title>COUNT IN ROW</Style.Title>
      <Style.Wrapper>
        <Style.Opperation onClick={() => changeCount(count - 1)}>-</Style.Opperation>
        <Style.Number>{count}</Style.Number>
        <Style.Opperation onClick={() => changeCount(count + 1)}>+</Style.Opperation>
      </Style.Wrapper>
    </Style.Container>
  );
}

export default SettingCount;
