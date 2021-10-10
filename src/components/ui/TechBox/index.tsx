import React from 'react';
import * as Style from './style';

interface TechBoxProps {
  selected: boolean;
  number?: number;
}

function TechBox({ selected, number = 0 }: TechBoxProps) {
  return (
    <Style.Container>
      <Style.Wrapper selected={selected} />
      <Style.Cover selected={selected}>
        {selected && (
          <Style.NumberWrapper>
            <Style.Number>{number}</Style.Number>
          </Style.NumberWrapper>
        )}
      </Style.Cover>
    </Style.Container>
  );
}

export default TechBox;
