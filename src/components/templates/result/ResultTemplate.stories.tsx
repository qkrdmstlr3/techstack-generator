import React from 'react';
import { action } from '@storybook/addon-actions';
import ResultTemplate from '.';
import { SettingType } from '../setting/index';
import { ResultType } from '../../ui/SettingResult/index';
import { TechType } from '../select/index';

export default {
  title: 'Templates/resultTemplate',
  component: ResultTemplate,
};

const techs: TechType[] = new Array(20).fill(0).map((_, index) => ({
  src: 'https://github.com/qkrdmstlr3/techstack-generator/raw/master/techs/js-icon/js-icon.gif',
  selected: true,
  number: index + 1,
}));

const setting: SettingType = {
  count: 5,
  interval: '50',
  size: '100',
  results: [ResultType.html],
};

const changeAction = action('onchange');
export const resultTemplate = () => (
  <div style={{ backgroundColor: 'black' }}>
    <ResultTemplate setting={setting} techs={techs} changeTemplate={changeAction} />
  </div>
);
