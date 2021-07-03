import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent
} from '@testing-library/react';
import UserList from './UserList';
import { fetchUserUrl } from '../../utils/fetch';
import { mockFetchUsers } from '../../utils/unit-tests/mocks';

const renderUserList = () => render(<UserList />);

jest.useFakeTimers();

global.fetch = mockFetchUsers;

afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
  jest.clearAllMocks();
});

describe('The UserList component', () => {
  beforeEach(() => {
    mockFetchUsers.mockClear();
  });

  describe('when rendered', () => {
    let rows;
    let container;

    beforeEach(() => {
      ({ container } = renderUserList());
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should display the users table', () => {
      const table = screen.getByTestId('user_table');

      expect(table).toBeDefined();
    });

    it('should only display two rows', async () => {
      await waitFor(() => {
        rows = screen.getAllByTestId('user_rows');
      });

      expect(rows).toHaveLength(2);
    });

    it('should fetch users with the correct url', async () => {
      expect(mockFetchUsers).toHaveBeenCalledWith(`${fetchUserUrl}`);
    });

    it('should have called fetch only once', async () => {
      expect(mockFetchUsers).toHaveBeenCalledTimes(1);
    });
  });

  describe('when I enter Bret into the search filter', () => {
    beforeEach(() => {
      renderUserList();

      mockFetchUsers.mockClear();

      const input = screen.getByTestId('searchBox');

      fireEvent.change(input, { target: { value: 'Bret' } });

      jest.runAllTimers();
    });

    it('should call fetch with the correct url', async () => {
      expect(mockFetchUsers).toHaveBeenCalledWith(`${fetchUserUrl}?username=Bret`);
    });

    it('should have called fetch only once', async () => {
      expect(mockFetchUsers).toHaveBeenCalledTimes(1);
    });
  });
});
