import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { SettingType } from '../setting/index';
import { TechType } from '../select/index';
import { ResultType } from '../../ui/SettingResult';
import * as Style from './style';

import makeHTML from '../../../utils/makeHTML';
import makeMarkdown from '../../../utils/makeMarkdown';
import CopyButton from '../../ui/CopyButton';
import { pipe, filter, sort } from '@fxts/core';

interface ResultTemplateProps {
  setting: SettingType;
  techs: TechType[];
  changeTemplate: () => void;
}

function ResultTemplate({ setting, techs, changeTemplate }: ResultTemplateProps) {
  const selectedTechs = pipe(
    techs,
    filter((tech) => tech.selected),
    sort((a, b) => a.number - b.number)
  );
  const resultMarkdown = makeMarkdown({ setting, selectedTechs, forView: false });
  const resultMarkdownForView = makeMarkdown({ setting, selectedTechs, forView: true });
  const resultHTML = makeHTML({ setting, selectedTechs, forView: false });
  const resultHTMLForView = makeHTML({ setting, selectedTechs, forView: true });

  return (
    <Style.Container>
      <Style.Title>TSG</Style.Title>
      <Style.Description>animated TechStack Generator</Style.Description>
      {setting.results.includes(ResultType.html) && (
        <>
          <Style.CategoryWrapper>
            <Style.CategoryTitleWrapper>
              <Style.CategoryTitle>HTML RESULT</Style.CategoryTitle>
              <CopyButton text={resultHTML} />
            </Style.CategoryTitleWrapper>
            <Style.CategoryResultContentWrapper>
              <Style.CategoryResultContent dangerouslySetInnerHTML={{ __html: resultHTMLForView }} />
            </Style.CategoryResultContentWrapper>
          </Style.CategoryWrapper>
          <Style.CategoryWrapper>
            <Style.CategoryContent>{resultHTML}</Style.CategoryContent>
          </Style.CategoryWrapper>
        </>
      )}
      {setting.results.includes(ResultType.markdown) && (
        <>
          <Style.CategoryWrapper>
            <Style.CategoryTitleWrapper>
              <Style.CategoryTitle>MARKDOWN RESULT</Style.CategoryTitle>
              <CopyButton text={resultMarkdown} />
            </Style.CategoryTitleWrapper>
            <Style.CategoryResultContentWrapper>
              <Style.CategoryResultContent>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{resultMarkdownForView}</ReactMarkdown>
              </Style.CategoryResultContent>
            </Style.CategoryResultContentWrapper>
          </Style.CategoryWrapper>
          <Style.CategoryWrapper>
            <Style.CategoryContent>{resultMarkdown}</Style.CategoryContent>
          </Style.CategoryWrapper>
        </>
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
