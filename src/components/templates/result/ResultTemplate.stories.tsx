import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ResultTemplate from '.';
import { SettingType } from '../setting/index';
import { ResultType } from '../../ui/SettingResult/index';
import { TechType } from '../select/index';

export default {
  title: 'Templates/resultTemplate',
  component: ResultTemplate,
  decorators: [withKnobs],
};

const techs: TechType[] = new Array(20).fill(0).map((_, index) => ({
  src: 'js-icon.svg',
  selected: true,
  number: index + 1,
}));

const setting: SettingType = {
  count: 5,
  interval: '50',
  size: '100',
  results: [ResultType.html],
};

const techsKnob = object('techs', techs);
const settingKnob = object('setting', setting);
const changeAction = action('onchange');

export const resultTemplate = () => (
  <ResultTemplate setting={settingKnob} techs={techsKnob} changeTemplate={changeAction} />
);
