import React from 'react';
import { SettingType } from '../setting/index';
import { TechType } from '../select/index';
import * as Style from './style';

import makeHTML from '../../../utils/makeHTML';

interface ResultTemplateProps {
  setting: SettingType;
  techs: TechType[];
}

function ResultTemplate({ setting, techs }: ResultTemplateProps) {
  const selectedTechs = techs.filter((tech) => tech.selected).sort((a, b) => a.number - b.number);
  const resultHTML = makeHTML({ setting, selectedTechs });
  const resultColNumber = Math.ceil(techs.length / setting.count);
  const resultHeight = resultColNumber * Number(setting.size) + (resultColNumber - 1) * Number(setting.interval);

  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      <Style.CategoryWrapper>
        <Style.CategoryTitle>RESULT</Style.CategoryTitle>
        <Style.CategoryContent contentHeight={resultHeight}>
          <Style.CategoryResultContent dangerouslySetInnerHTML={{ __html: resultHTML }} />
        </Style.CategoryContent>
      </Style.CategoryWrapper>
      <Style.BackButton>BACK</Style.BackButton>
      <Style.Copyright>made by shellboy</Style.Copyright>
    </Style.Container>
  );
}

export default ResultTemplate;
