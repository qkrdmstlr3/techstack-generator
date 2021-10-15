import { TechType } from '../components/templates/select';
import { SettingType } from '../components/templates/setting';

interface MakeTemplateProps {
  setting: SettingType;
  selectedTechs: TechType[];
}

// TODO: Recursive
export default ({ setting, selectedTechs }: MakeTemplateProps) => {
  const colNumber = Math.ceil(selectedTechs.length / setting.count);
  let html = '<div>';
  let i = 0;

  while (i < selectedTechs.length) {
    let row = '<div style="display: flex;">';
    for (let j = 0; j < setting.count; j += 1) {
      if (i >= selectedTechs.length) break;

      const isLastInRow = (i + 1) % setting.count === 0;
      const isLastRow = i + 1 > (colNumber - 1) * setting.count;
      const marginRight = isLastInRow ? 0 : setting.interval;
      const marginBottom = isLastRow ? 0 : setting.interval;
      const imgStyle = `style="width: ${setting.size}px; height: ${setting.size}px; margin-right: ${marginRight}px; margin-bottom: ${marginBottom}px;"`;
      row += `<img src="https://techstack-generator.vercel.app/${selectedTechs[i].src}" alt="icon" ${imgStyle} />`;
      i = i + 1;
    }
    row += `</div>`;
    html += row;
  }
  return html + '</div>';
};
