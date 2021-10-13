/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import SettingResult, { ResultType } from '.';

const changeResultslMock = jest.fn();

describe('Component/UI/SettingResult', () => {
  describe('rendering test', () => {
    it('check none', async () => {
      const settingResultComponent = render(<SettingResult results={[]} changeResults={changeResultslMock} />);

      await waitFor(() => {
        settingResultComponent.getByText('HTML');
        settingResultComponent.getByText('MARKDOWN');
      });
    });

    it('check html', async () => {
      const settingResultComponent = render(
        <SettingResult results={[ResultType.html]} changeResults={changeResultslMock} />
      );

      await waitFor(() => {
        settingResultComponent.getByText('HTML');
        settingResultComponent.getByText('MARKDOWN');
        settingResultComponent.getByLabelText('html-check');
        const markdownCheck = settingResultComponent.queryByLabelText('markdown-check');
        expect(markdownCheck).toBeNull();
      });
    });

    it('check markdown', async () => {
      const settingResultComponent = render(
        <SettingResult results={[ResultType.markdown]} changeResults={changeResultslMock} />
      );

      await waitFor(() => {
        settingResultComponent.getByText('HTML');
        settingResultComponent.getByText('MARKDOWN');
        settingResultComponent.getByLabelText('markdown-check');
        const htmlCheck = settingResultComponent.queryByLabelText('html-check');
        expect(htmlCheck).toBeNull();
      });
    });
  });

  it('click checkbox able', async () => {
    const settingResultComponent = render(<SettingResult results={[]} changeResults={changeResultslMock} />);

    await waitFor(() => {
      const htmlCheckbox = settingResultComponent.getByLabelText('html-checkbox');
      const markdownCheckbox = settingResultComponent.getByLabelText('markdown-checkbox');
      fireEvent.click(htmlCheckbox);
      fireEvent.click(markdownCheckbox);

      expect(changeResultslMock).toHaveBeenCalledTimes(2);
    });
  });

  it('click checkbox disable', async () => {
    const settingResultComponent = render(
      <SettingResult results={[ResultType.html]} changeResults={changeResultslMock} />
    );

    await waitFor(() => {
      const htmlCheckbox = settingResultComponent.getByLabelText('html-checkbox');
      fireEvent.click(htmlCheckbox);

      expect(changeResultslMock).toHaveBeenCalledWith([]);
    });
  });
});
