import React from 'react';
import TechBox from '.';
import StyleWrapper from '../../../style/styleWrapper';

export default {
  title: 'Component/TechBox',
  component: TechBox,
};

export const techBox = (): React.ReactElement => (
  <StyleWrapper>
    <div style={{ backgroundColor: 'black' }}>
      <div className="description">not selected</div>
      <TechBox selected={false} />
    </div>
    <div>
      <div className="description">selected</div>
      <TechBox selected={true} number={1} />
    </div>
  </StyleWrapper>
);
