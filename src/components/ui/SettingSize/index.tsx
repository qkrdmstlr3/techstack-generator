import React from 'react';
import * as Style from './style';

interface SettingSizeProps {
  size: string;
  changeSize: (size: string) => void;
}

function SettingSize({ size, changeSize }: SettingSizeProps) {
  return (
    <Style.Container>
      <Style.Title>SIZE</Style.Title>
      <Style.Range
        aria-label="size-range"
        type="range"
        min="30"
        max="100"
        step="1"
        value={size}
        onChange={(event) => changeSize(event.target.value)}
      />
      <Style.ExampleBox aria-label="example-box" size={size} />
    </Style.Container>
  );
}

export default SettingSize;
