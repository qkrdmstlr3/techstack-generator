import React from 'react';
import { action } from '@storybook/addon-actions';
import TechBox from '.';
import StyleWrapper from '../../../style/styleWrapper';

export default {
  title: 'Component/TechBox',
  component: TechBox,
};

const clickAction = action('onclick');

const unselectedTech = { src: 'src', selected: false, number: 0 };
const selectedTech = { src: 'src', selected: true, number: 1 };
export const techBox = (): React.ReactElement => (
  <StyleWrapper>
    <div style={{ backgroundColor: 'black' }}>
      <div className="description">not selected</div>
      <TechBox tech={unselectedTech} clickTech={clickAction} />
    </div>
    <div>
      <div className="description">selected</div>
      <TechBox tech={selectedTech} clickTech={clickAction} />
    </div>
  </StyleWrapper>
);
