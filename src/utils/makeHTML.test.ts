import { TechType } from '../components/templates/select';
import makeHTML from './makeHTML';
import { SettingType } from '../components/templates/setting/index';
import { ResultType } from '../components/ui/SettingResult';

const selectedTechs: TechType[] = new Array(20).fill(0).map((_, index) => ({
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
  it('test result', () => {
    const result = makeHTML({ setting, selectedTechs });

    expect(result).not.toBeNull();
  });
});
