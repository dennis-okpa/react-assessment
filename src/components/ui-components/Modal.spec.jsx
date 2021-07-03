import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('The Modal Component', () => {
  describe('when rendered', () => {
    let container;
    let getByText;
    let getByTestId;

    beforeEach(() => {
      ({ getByText, getByTestId } = render(
        <Modal
          title="mock-title"
          explanation="mock-explanation"
          actionPanel={(
            <div data-testid="mock-acton-panel" />
          )}
        >
          <div data-testid="mock-body" />
        </Modal>
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should display title', () => {
      expect(getByText('mock-title')).toBeInTheDocument();
    });

    it('should display explanation', () => {
      expect(getByText('mock-explanation')).toBeInTheDocument();
    });

    it('should display action panel', () => {
      expect(getByTestId('mock-acton-panel')).toBeInTheDocument();
    });

    it('should display content body', () => {
      expect(getByTestId('mock-body')).toBeInTheDocument();
    });
  });
});
