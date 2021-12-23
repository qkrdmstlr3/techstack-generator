import { pipe, map, join, chunk, toArray } from '@fxts/core';
import { TechType } from '../components/templates/select';
import { SettingType } from '../components/templates/setting';

interface MakeTemplateProps {
  setting: SettingType;
  selectedTechs: TechType[];
  forView: boolean;
}

const makeImgTag = (forView: boolean, techSrc: string, setting: SettingType, order: number, colNumber: number) => {
  const isLastInRow = (order + 1) % setting.count === 0;
  const isLastRow = order + 1 > (colNumber - 1) * setting.count;
  const marginRight = isLastInRow ? 0 : setting.interval;
  const marginBottom = isLastRow ? 0 : setting.interval;
  const imgStyle = `style="width: ${setting.size}px; height: ${setting.size}px; margin-right: ${marginRight}px; margin-bottom: ${marginBottom}px;"`;

  const url = forView ? '' : 'https://techstack-generator.vercel.app/';
  return `<img src="${url}${techSrc}" alt="icon" width="${setting.size}" ${imgStyle} />`;
};

const makeDivTag = (imgTagList: string[]) => {
  return `<div style="display: flex;">${join('', imgTagList)}</div>`;
};

export default ({ setting, selectedTechs, forView }: MakeTemplateProps) => {
  const colNumber = Math.ceil(selectedTechs.length / setting.count);
  const markdown = pipe(
    Object.entries(selectedTechs),
    map(([order, tech]) => makeImgTag(forView, tech.src, setting, Number(order), colNumber)),
    chunk(setting.count),
    map((imgTagList) => makeDivTag(imgTagList)),
    join('')
  );

  return markdown;
};
