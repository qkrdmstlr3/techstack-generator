import React from 'react';
import { TechType } from '../../templates/select';
import * as Style from './style';

interface TechBoxProps {
  tech: TechType;
  clickTech: (tech: TechType) => void;
}

function TechBox({ tech, clickTech }: TechBoxProps) {
  return (
    <Style.Wrapper aria-label="techbox" selected={tech.selected} onClick={() => clickTech(tech)}>
      <Style.ImageWrapper selected={tech.selected}>
        <Style.Image src={tech.src} alt="icon" />
      </Style.ImageWrapper>
      {tech.selected && (
        <Style.NumberWrapper>
          <Style.Number>{tech.number}</Style.Number>
        </Style.NumberWrapper>
      )}
    </Style.Wrapper>
  );
}

export default TechBox;
