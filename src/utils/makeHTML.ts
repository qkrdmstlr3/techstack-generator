import { TechType } from '../components/templates/select';
import { SettingType } from '../components/templates/setting';

interface MakeTemplateProps {
  setting: SettingType;
  selectedTechs: TechType[];
}

// TODO: Recursive
export default ({ setting, selectedTechs }: MakeTemplateProps) => {
  let html = '<div>';

  for (let i = 1; i <= selectedTechs.length; i += 1) {
    let row = '<div style="display: flex;">';
    for (let j = 0; j <= setting.count; j += 1) {
      if (i === selectedTechs.length) break;

      const isLastInRow = setting.count % i === setting.count - 1;
      const rowLastImageMargin = isLastInRow ? 0 : setting.interval;
      const imgStyle = `style="width: ${setting.size}px; height: ${setting.size}px; margin-right: ${rowLastImageMargin}px; margin-bottom: ${setting.interval}px;"`;
      row += `<img src="${selectedTechs[i].src}" alt="icon" ${imgStyle} />`;
      i = i + 1;
    }
    row += `</div>`;
    html += row;
  }
  return html + '</div>';
};
