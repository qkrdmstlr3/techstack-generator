import { TechType } from '../components/templates/select';
import { SettingType } from '../components/templates/setting';

interface MakeTemplateProps {
  setting: SettingType;
  selectedTechs: TechType[];
  forView: boolean;
}

export default ({ setting, selectedTechs, forView }: MakeTemplateProps) => {
  let markdown = '';
  let i = 0;

  while (i < selectedTechs.length) {
    let row = '<div style="display: flex; align-items: flex-start;">';
    for (let j = 0; j < setting.count; j += 1) {
      if (i >= selectedTechs.length) break;

      if (forView) {
        row += `<img src="/${selectedTechs[i].src}" alt="icon" width="${setting.size}" height="${setting.size}" />`;
      } else {
        row += `<img src="https://techstack-generator.vercel.app/${selectedTechs[i].src}" alt="icon" width="${setting.size}" height="${setting.size}" />`;
      }
      i = i + 1;
    }

    row += '</div>';
    markdown += row;
  }

  return markdown;
};
