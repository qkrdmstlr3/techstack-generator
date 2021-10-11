import React from 'react';
import SelectTemplate from '.';

export default {
  title: 'Templates/select',
  component: SelectTemplate,
};

const techs = new Array(20).fill({ selected: false });

export const selectTemplated = () => (
  <div style={{ backgroundColor: 'black' }}>
    <SelectTemplate techs={techs} />
  </div>
);
