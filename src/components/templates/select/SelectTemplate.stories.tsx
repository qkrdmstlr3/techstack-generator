import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SelectTemplate, { TechType } from '.';

export default {
  title: 'Templates/selectTemplate',
  component: SelectTemplate,
  decorators: [withKnobs],
};

const techs: TechType[] = new Array(20).fill(0).map((_, index) => ({
  src: 'https://techstack-generator.vercel.app/js-icon.svg',
  selected: false,
  number: index + 1,
}));

const techsKnob = object('techs', techs);
const clickAction = action('onclick');
const changeAction = action('onchange');

export const selectTemplate = () => (
  <SelectTemplate techs={techsKnob} selectTech={clickAction} changeTemplate={changeAction} />
);
