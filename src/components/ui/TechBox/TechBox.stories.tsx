import React from 'react';
import { action } from '@storybook/addon-actions';
import TechBox from '.';
import StyleWrapper from '../../../style/styleWrapper';

export default {
  title: 'Component/TechBox',
  component: TechBox,
};

const clickAction = action('onclick');

const unselectedTech = { src: 'https://techstack-generator.vercel.app/js-icon.svg', selected: false, number: 0 };
const selectedTech = { src: 'https://techstack-generator.vercel.app/js-icon.svg', selected: true, number: 1 };
export const techBox = (): React.ReactElement => (
  <StyleWrapper>
    <div className="description" style={{ color: '#fff' }}>
      not selected
    </div>
    <TechBox tech={unselectedTech} clickTech={clickAction} />
    <div className="description" style={{ color: '#fff' }}>
      selected
    </div>
    <TechBox tech={selectedTech} clickTech={clickAction} />
  </StyleWrapper>
);
