import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import DeleteReportModal from './DeleteReportModal';

const mockLog = jest.spyOn(global.console, 'log').mockImplementation();

describe('The DeleteReportModal Component', () => {
  describe('when rendered', () => {
    let container;
    let getByText;

    beforeEach(() => {
      ({ container, getByText } = render(
        <DeleteReportModal />
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should call console with the correct string when Delete all is clicked', async () => {
      await act(async () => {
        fireEvent.click(getByText('Delete all'));
      });

      expect(mockLog).toHaveBeenCalledWith('deleting all');
    });

    it('should call console with the correct string when Cancel is clicked', async () => {
      await act(async () => {
        fireEvent.click(getByText('Cancel'));
      });

      expect(mockLog).toHaveBeenCalledWith('canceling job');
    });
  });
});
