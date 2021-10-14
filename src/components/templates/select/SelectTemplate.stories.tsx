import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectTemplate, { TechType } from '.';

export default {
  title: 'Templates/selectTemplate',
  component: SelectTemplate,
};

const techs: TechType[] = new Array(20).fill(0).map((_, index) => ({
  src: String(index),
  selected: false,
  number: 0,
}));

const clickAction = action('onclick');
const changeAction = action('onchange');
export const selectTemplate = () => (
  <div style={{ backgroundColor: 'black' }}>
    <SelectTemplate techs={techs} selectTech={clickAction} changeTemplate={changeAction} />
  </div>
);
