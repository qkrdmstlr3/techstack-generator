import React from 'react';
import * as Style from './style';

interface SettingIntervalProps {
  interval: string;
  changeInterval: (interval: string) => void;
}

function SettingInterval({ interval, changeInterval }: SettingIntervalProps) {
  return (
    <Style.Container>
      <Style.Title>ICON INTERVAL</Style.Title>
      <Style.Range
        aria-label="interval-range"
        type="range"
        min="0"
        max="100"
        step="1"
        value={interval}
        onChange={(event) => changeInterval(event.target.value)}
      />
      <Style.ExampleBox>
        <Style.Bar />
        <Style.Line aria-label="interval-line" width={interval} />
        <Style.Bar />
      </Style.ExampleBox>
    </Style.Container>
  );
}

export default SettingInterval;
