/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import TechBox from '.';

describe('Component/UI/TechBox', () => {
  it('렌더링 테스트(selected)', async () => {
    const techBoxComponent = render(<TechBox selected={true} number={1} />);

    await waitFor(() => {
      techBoxComponent.getByText(1);
    });
  });

  it('렌더링 테스트(unselected)', async () => {
    const techBoxComponent = render(<TechBox selected={false} number={1} />);

    await waitFor(() => {
      const submitButton = techBoxComponent.queryByText('submit');
      expect(submitButton).toBeNull();
    });
  });
});
