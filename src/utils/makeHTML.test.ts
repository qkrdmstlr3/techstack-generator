import { TechType } from '../components/templates/select';
import makeHTML from './makeHTML';
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

describe('Utils/makeHTML', () => {
  it('forview is true', () => {
    const html = makeHTML({ setting, selectedTechs, forView: true });

    expect(html).not.toBeNull();
    expect(html).not.toContain('https://techstack-generator.vercel.app/');
  });

  it('forview is false', () => {
    const html = makeHTML({ setting, selectedTechs, forView: false });

    expect(html).not.toBeNull();
    expect(html).toContain('https://techstack-generator.vercel.app/');
  });
});
