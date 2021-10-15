import React from 'react';
import { SettingType } from '../setting/index';
import { TechType } from '../select/index';
import { ResultType } from '../../ui/SettingResult';
import * as Style from './style';

import makeHTML from '../../../utils/makeHTML';
import Copy from '../../ui/Icon/Copy';

interface ResultTemplateProps {
  setting: SettingType;
  techs: TechType[];
  changeTemplate: () => void;
}

function ResultTemplate({ setting, techs, changeTemplate }: ResultTemplateProps) {
  const selectedTechs = techs.filter((tech) => tech.selected).sort((a, b) => a.number - b.number);
  const resultHTML = makeHTML({ setting, selectedTechs });
  const resultColNumber = Math.ceil(selectedTechs.length / setting.count);
  const resultHeight = resultColNumber * Number(setting.size) + (resultColNumber - 1) * Number(setting.interval);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      <Style.CategoryWrapper>
        <Style.CategoryTitle>RESULT</Style.CategoryTitle>
        <Style.CategoryResultContentWrapper contentHeight={resultHeight}>
          <Style.CategoryResultContent dangerouslySetInnerHTML={{ __html: resultHTML }} />
        </Style.CategoryResultContentWrapper>
      </Style.CategoryWrapper>
      {setting.results.includes(ResultType.html) && (
        <Style.CategoryWrapper>
          <Style.CategoryTitleWrapper>
            <Style.CategoryTitle>HTML</Style.CategoryTitle>
            <Style.IconWrapper onClick={() => copyToClipboard(resultHTML)}>
              <Copy />
            </Style.IconWrapper>
          </Style.CategoryTitleWrapper>
          <Style.CategoryContent>{resultHTML}</Style.CategoryContent>
        </Style.CategoryWrapper>
      )}
      <Style.BackButton onClick={changeTemplate}>BACK</Style.BackButton>
      <Style.Copyright>
        made by{' '}
        <Style.ATag href="https://github.com/qkrdmstlr3" target="_blank">
          shellboy
        </Style.ATag>
      </Style.Copyright>
    </Style.Container>
  );
}

export default ResultTemplate;
