import { TechType } from '../components/templates/select';
import makeMarkdown from './makeMarkdown';
import { SettingType } from '../components/templates/setting/index';
import { ResultType } from '../components/ui/SettingResult';

const selectedTechs: TechType[] = new Array(21).fill(0).map((_, index) => ({
  src: String(index),
  selected: true,
  number: 0,
}));
const setting: SettingType = {
  count: 10,
  interval: '50',
  size: '50',
  results: [ResultType.html],
};

describe('Utils/makeMarkdown', () => {
  it('forview is true', () => {
    const markdown = makeMarkdown({ setting, selectedTechs, forView: true });

    expect(markdown).not.toBeNull();
    expect(markdown).not.toContain('https://techstack-generator.vercel.app/');
  });

  it('forview is false', () => {
    const markdown = makeMarkdown({ setting, selectedTechs, forView: false });

    expect(markdown).not.toBeNull();
    expect(markdown).toContain('https://techstack-generator.vercel.app/');
  });
});
