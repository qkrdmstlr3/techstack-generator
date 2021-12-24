/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import CopyButton from '.';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('Component/UI/CopyButton', () => {
  const text = 'copy text';

  it('clipboard test', async () => {
    jest.spyOn(navigator.clipboard, 'writeText');
    const copyButtonComponent = render(<CopyButton text={text} />);

    await waitFor(() => {
      const copyButton = copyButtonComponent.getByLabelText('copy-button');
      fireEvent.click(copyButton);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    });
  });

  it('timeout test', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    const copyButtonComponent = render(<CopyButton text={text} />);

    await waitFor(() => {
      const copyButton = copyButtonComponent.getByLabelText('copy-button');
      fireEvent.click(copyButton);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 700);
    });
  });
});
