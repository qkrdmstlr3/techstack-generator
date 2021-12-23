import React from 'react';
import { withKnobs, object, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SettingTemplate, { SettingType } from '.';
import { ResultType } from '../../ui/SettingResult';

export default {
  title: 'Templates/settingTemplate',
  component: SettingTemplate,
  decorators: [withKnobs],
};

const setting: SettingType = {
  count: 5,
  interval: '50',
  size: '100',
  results: [ResultType.html],
};

const settingKnob = object('setting', setting);
const selectedCountKnob = number('selectedCount', 10);
const changeSettingAction = action('changeAction');
const changeTemplateAction = action('changeTemplate');

export const settingTemplate = () => (
  <SettingTemplate
    setting={settingKnob}
    selectedCount={selectedCountKnob}
    changeSetting={changeSettingAction}
    changeTemplate={changeTemplateAction}
  />
);
