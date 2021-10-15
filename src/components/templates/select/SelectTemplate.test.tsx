/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import SelectTemplate, { TechType } from '.';

const selectTechMock = jest.fn();
const changeTemplate = jest.fn();
const techs: TechType[] = new Array(20).fill(0).map((_, index) => ({
  src: String(index),
  selected: false,
  number: 0,
}));

describe('Component/Template/SelectTemplate', () => {
  it('rendering test', async () => {
    const selectComponent = render(
      <SelectTemplate techs={techs} selectTech={selectTechMock} changeTemplate={changeTemplate} />
    );
    await waitFor(() => {
      selectComponent.getByText('TSG');
      selectComponent.getByText('animated TechStack Generator');
      selectComponent.getByText('SETTING');
      selectComponent.getByText('shellboy');
      const techboxs = selectComponent.getAllByLabelText('techbox');
      expect(techboxs).toHaveLength(techs.length);
    });
  });

  it('click setting button', async () => {
    const selectComponent = render(
      <SelectTemplate techs={techs} selectTech={selectTechMock} changeTemplate={changeTemplate} />
    );
    await waitFor(() => {
      const settingButton = selectComponent.getByText('SETTING');
      fireEvent.click(settingButton);

      expect(changeTemplate).toHaveBeenCalledTimes(1);
    });
  });
});
