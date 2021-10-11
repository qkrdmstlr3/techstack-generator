import React from 'react';
import * as Style from './style';

interface TechBoxProps {
  selected: boolean;
  number?: number;
}

function TechBox({ selected, number = 0 }: TechBoxProps) {
  return (
    <Style.Wrapper aria-label="techbox" selected={selected}>
      <Style.Cover selected={selected}>
        {selected && (
          <Style.NumberWrapper>
            <Style.Number>{number}</Style.Number>
          </Style.NumberWrapper>
        )}
      </Style.Cover>
    </Style.Wrapper>
  );
}

export default TechBox;
