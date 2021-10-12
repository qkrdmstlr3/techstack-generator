/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import SettingSize from '.';

const changeSizeMock = jest.fn();

describe('Component/UI/SettingSize', () => {
  it('rendering test', async () => {
    const settingSizeComponent = render(<SettingSize size="65" changeSize={changeSizeMock} />);

    await waitFor(() => {
      const exampleBox = settingSizeComponent.getByLabelText('example-box');
      const rangeInput = settingSizeComponent.getByLabelText('size-range');

      expect(rangeInput).toHaveAttribute('value', '65');
      expect(exampleBox).toHaveStyle({
        width: '65px',
        height: '65px',
      });
    });
  });

  it('change range', async () => {
    const settingSizeComponent = render(<SettingSize size="65" changeSize={changeSizeMock} />);

    await waitFor(() => {
      const rangeInput = settingSizeComponent.getByLabelText('size-range');
      fireEvent.change(rangeInput, { target: { value: 68, valueAsNumber: 68 } });

      expect(changeSizeMock).toHaveBeenCalled();
    });
  });
});
