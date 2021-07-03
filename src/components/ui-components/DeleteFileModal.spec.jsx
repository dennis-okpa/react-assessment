import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import DeleteFileModal from './DeleteFileModal';

const mockLog = jest.spyOn(global.console, 'log').mockImplementation();

describe('The DeleteFileModal Component', () => {
  describe('when rendered', () => {
    let container;
    let getByText;

    beforeEach(() => {
      ({ container, getByText } = render(
        <DeleteFileModal />
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should call console with the correct string when Yes is clicked', async () => {
      await act(async () => {
        fireEvent.click(getByText('Yes'));
      });

      expect(mockLog).toHaveBeenCalledWith('yes sir');
    });

    it('should call console with the correct string when No is clicked', async () => {
      await act(async () => {
        fireEvent.click(getByText('No'));
      });

      expect(mockLog).toHaveBeenCalledWith('no sir');
    });
  });
});
