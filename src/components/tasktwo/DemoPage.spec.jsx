import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DemoPage from './DemoPage';

jest.mock('@components/ui-components/DeleteFileModal', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: () => <div data-testid="delete_file_modal" />
}));

jest.mock('@components/ui-components/DeleteReportModal', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: () => <div data-testid="delete_report_modal" />
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('The DemoPage component', () => {
  describe('when renders', () => {
    let container;
    let getByText;
    let getByTestId;
    let getByAltText;

    beforeEach(() => {
      ({
        container, getByText, getByTestId, getByAltText
      } = render(<DemoPage />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    describe('when the show data loader modal button is clicked', () => {
      it('should dispatch the data loader modal', () => {
        fireEvent.click(getByText('Data loading modal'));

        expect(getByAltText('data loader')).toBeInTheDocument();
      });
    });

    describe('when the show delete file modal button is clicked', () => {
      it('should dispatch the data loader modal', () => {
        fireEvent.click(getByText('Delete file modal'));

        expect(getByTestId('delete_file_modal')).toBeInTheDocument();
      });
    });

    describe('when the show delete report modal button is clicked', () => {
      it('should dispatch the data loader modal', () => {
        fireEvent.click(getByText('Delete report modal'));

        expect(getByTestId('delete_report_modal')).toBeInTheDocument();
      });
    });
  });
});
