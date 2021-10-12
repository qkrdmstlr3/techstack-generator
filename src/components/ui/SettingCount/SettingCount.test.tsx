/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import SettingCount from '.';

const changeCountMock = jest.fn();

describe('Component/UI/SettingCount', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('rendering test', async () => {
    const settingCountComponent = render(<SettingCount count={5} changeCount={changeCountMock} />);

    await waitFor(() => {
      settingCountComponent.getByText(5);
      settingCountComponent.getByText('-');
      settingCountComponent.getByText('+');
    });
  });

  it('plus count', async () => {
    const settingCountComponent = render(<SettingCount count={5} changeCount={changeCountMock} />);

    await waitFor(() => {
      const plusButton = settingCountComponent.getByText('+');
      fireEvent.click(plusButton);

      expect(changeCountMock).toHaveBeenCalledTimes(1);
    });
  });

  it('minus count', async () => {
    const settingCountComponent = render(<SettingCount count={5} changeCount={changeCountMock} />);

    await waitFor(() => {
      const minusButton = settingCountComponent.getByText('-');
      fireEvent.click(minusButton);

      expect(changeCountMock).toHaveBeenCalledTimes(1);
    });
  });
});
