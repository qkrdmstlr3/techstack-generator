/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import SettingInterval from '.';

const changeIntervalMock = jest.fn();

describe('Component/UI/SettingInterval', () => {
  it('rendering test', async () => {
    const settingIntervalComponent = render(<SettingInterval interval="50" changeInterval={changeIntervalMock} />);

    await waitFor(() => {
      const exampleLine = settingIntervalComponent.getByLabelText('interval-line');
      const rangeInput = settingIntervalComponent.getByLabelText('interval-range');

      expect(rangeInput).toHaveAttribute('value', '50');
      expect(exampleLine).toHaveStyle({
        width: '50px',
      });
    });
  });

  it('change range', async () => {
    const settingIntervalComponent = render(<SettingInterval interval="50" changeInterval={changeIntervalMock} />);

    await waitFor(() => {
      const rangeInput = settingIntervalComponent.getByLabelText('interval-range');
      fireEvent.change(rangeInput, { target: { value: 68, valueAsNumber: 68 } });

      expect(changeIntervalMock).toHaveBeenCalledTimes(1);
    });
  });
});
