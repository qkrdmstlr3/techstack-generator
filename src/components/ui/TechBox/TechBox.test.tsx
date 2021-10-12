/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import TechBox from '.';

const selectTechMock = jest.fn();
const selectedTech = { src: 'src', selected: true, number: 1 };
const unselectedTech = { src: 'src', selected: false, number: 0 };

describe('Component/UI/TechBox', () => {
  it('rendering test(selected)', async () => {
    const techBoxComponent = render(<TechBox tech={selectedTech} clickTech={selectTechMock} />);

    await waitFor(() => {
      techBoxComponent.getByText('1');
    });
  });

  it('rendering test(unselected)', async () => {
    const techBoxComponent = render(<TechBox tech={unselectedTech} clickTech={selectTechMock} />);

    await waitFor(() => {
      const submitButton = techBoxComponent.queryByText('1');
      expect(submitButton).toBeNull();
    });
  });

  it('click techbox ', async () => {
    const techBoxComponent = render(<TechBox tech={unselectedTech} clickTech={selectTechMock} />);

    await waitFor(() => {
      const techBox = techBoxComponent.getByLabelText('techbox');
      fireEvent.click(techBox);

      expect(selectTechMock).toHaveBeenCalledTimes(1);
    });
  });
});
