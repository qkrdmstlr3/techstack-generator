import React from 'react';
import Check from './Check';
import Copy from './Copy';
import Question from './Question';

export default {
  title: 'Component/Icon',
  component: [Check, Copy, Question],
};

export const check = () => <Check />;
export const copy = () => <Copy />;
export const question = () => <Question />;
