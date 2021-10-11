/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import SelectTemplate from '.';

describe('Component/Template/SelectTemplate', () => {
  it('렌더링 테스트', async () => {
    const techs = new Array(20).fill({ selected: false });
    const selectComponent = render(<SelectTemplate techs={techs} />);

    await waitFor(() => {
      selectComponent.getByText('TSG');
      selectComponent.getByText('animated TechStack Generator');
      selectComponent.getByText('SETTING');
      selectComponent.getByText('made by shellboy');
      const techboxs = selectComponent.getAllByLabelText('techbox');
      expect(techboxs).toHaveLength(techs.length);
    });
  });
});
