/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import SelectTemplate from '.';
import { TechType } from '../select';
import { SettingType } from '../setting';
import { ResultType } from '../../ui/SettingResult';

const changeTemplate = jest.fn();
const changeSetting = jest.fn();
const setting: SettingType = {
  count: 1,
  interval: '50',
  size: '100',
  results: [ResultType.html, ResultType.markdown],
};

describe('Component/Template/SelectTemplate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('rendering test', async () => {
    const settingComponent = render(
      <SelectTemplate
        setting={setting}
        selectedCount={5}
        changeTemplate={changeTemplate}
        changeSetting={changeSetting}
      />
    );

    await waitFor(() => {
      settingComponent.getByText('TSG');
      settingComponent.getByText('animated TechStack Generator');
      settingComponent.getByText('BACK');
      settingComponent.getByText('shellboy');

      settingComponent.getByText('SIZE');
      settingComponent.getByText('COUNT IN ROW');
      settingComponent.getByText('ICON INTERVAL');
      settingComponent.getAllByText('RESULT');
    });
  });

  describe('change test', () => {
    it('change size', async () => {
      const settingComponent = render(
        <SelectTemplate
          setting={setting}
          selectedCount={5}
          changeTemplate={changeTemplate}
          changeSetting={changeSetting}
        />
      );

      await waitFor(() => {
        const sizeInput = settingComponent.getByLabelText('size-range');
        fireEvent.change(sizeInput, { target: { value: 70 } });
        expect(changeSetting).toHaveBeenCalledTimes(1);
      });
    });

    it('change count', async () => {
      const settingComponent = render(
        <SelectTemplate
          setting={setting}
          selectedCount={5}
          changeTemplate={changeTemplate}
          changeSetting={changeSetting}
        />
      );

      await waitFor(() => {
        const plusButton = settingComponent.getByText('+');
        fireEvent.click(plusButton);
        expect(changeSetting).toHaveBeenCalledTimes(1);
      });
    });

    it('change count', async () => {
      const settingComponent = render(
        <SelectTemplate
          setting={setting}
          selectedCount={5}
          changeTemplate={changeTemplate}
          changeSetting={changeSetting}
        />
      );

      await waitFor(() => {
        const minusButton = settingComponent.getByText('-');
        fireEvent.click(minusButton);
        expect(changeSetting).toHaveBeenCalledTimes(1);
      });
    });

    it('change interval', async () => {
      const settingComponent = render(
        <SelectTemplate
          setting={setting}
          selectedCount={5}
          changeTemplate={changeTemplate}
          changeSetting={changeSetting}
        />
      );

      await waitFor(() => {
        const intervalInput = settingComponent.getByLabelText('interval-range');
        fireEvent.change(intervalInput, { target: { value: 70 } });
        expect(changeSetting).toHaveBeenCalledTimes(1);
      });
    });

    it('change result', async () => {
      const settingComponent = render(
        <SelectTemplate
          setting={setting}
          selectedCount={5}
          changeTemplate={changeTemplate}
          changeSetting={changeSetting}
        />
      );

      await waitFor(() => {
        const htmlCheckbox = settingComponent.getByLabelText('html-checkbox');
        fireEvent.click(htmlCheckbox);
        expect(changeSetting).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('change template test', () => {
    it('click backButton', async () => {
      const settingComponent = render(
        <SelectTemplate
          setting={setting}
          selectedCount={5}
          changeTemplate={changeTemplate}
          changeSetting={changeSetting}
        />
      );

      await waitFor(() => {
        const backButton = settingComponent.getByText('BACK');
        fireEvent.click(backButton);
        expect(changeTemplate).toHaveBeenCalledTimes(1);
      });
    });

    it('click resultButton', async () => {
      const settingComponent = render(
        <SelectTemplate
          setting={setting}
          selectedCount={5}
          changeTemplate={changeTemplate}
          changeSetting={changeSetting}
        />
      );

      await waitFor(() => {
        const resultButton = settingComponent.getAllByText('RESULT');
        fireEvent.click(resultButton[1]);
        expect(changeTemplate).toHaveBeenCalledTimes(1);
      });
    });
  });
});
