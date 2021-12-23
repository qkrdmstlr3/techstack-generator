import { pipe, map, join, chunk } from '@fxts/core';
import { TechType } from '../components/templates/select';
import { SettingType } from '../components/templates/setting';

interface MakeTemplateProps {
  setting: SettingType;
  selectedTechs: TechType[];
  forView: boolean;
}

const makeImgTag = (forView: boolean, techSrc: string, size: string) => {
  const url = forView ? '' : 'https://techstack-generator.vercel.app/';
  return `<img src="${url}${techSrc}" alt="icon" width="${size}" height="${size}" />`;
};

const makeDivTag = (imgTagList: string[]) => {
  return `<div style="display: flex; align-items: flex-start;">${join('', imgTagList)}</div>`;
};

export default ({ setting, selectedTechs, forView }: MakeTemplateProps) => {
  const markdown = pipe(
    selectedTechs,
    map((tech) => makeImgTag(forView, tech.src, setting.size)),
    chunk(setting.count),
    map((imgTagList) => makeDivTag(imgTagList)),
    join('')
  );
  return markdown;
};
