import { useState, useEffect } from 'react';
import { act } from '@testing-library/react';
import { fetchUsers } from './fetch';

const debounce = (func, wait = 5000) => {
  let timeout = null;

  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return () => {
    cleanup();

    timeout = setTimeout(func, wait);
  };
};

export const useFilter = (value) => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (value !== null) {
      const debounceFn = debounce(() => {
        act(() => {
          setFilter(value);
        });
      });

      debounceFn();
    }
  }, [value]);

  return filter;
};

export const useData = (filter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchUsers(async (response) => {
        const responseData = await response.json();
        act(() => {
          setData(responseData);
        });
      }, filter);
    };

    fetchData();
  }, [filter]);

  return data;
};
