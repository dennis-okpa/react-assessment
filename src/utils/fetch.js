export const fetchUserUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = (callback, filter) => {
  fetch(`${fetchUserUrl}${filter ? `?username=${encodeURIComponent(filter)}` : ''}`).then(callback);
};
