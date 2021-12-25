import { reverse } from './fp';

describe('Util/fp/reverse', () => {
  it('if exist', () => {
    const array = ['1', '2', '3', '4'];
    const result = reverse('4', array);

    expect(result).toHaveLength(3);
    expect(result).not.toContain('4');
  });

  it('if not exist', () => {
    const array = ['1', '2', '3'];
    const result = reverse('4', array);

    expect(result).toHaveLength(4);
    expect(result).toContain('4');
  });
});
