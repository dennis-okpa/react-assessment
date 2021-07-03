export const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      city: 'Gwenborough',
      geo: { lat: '-37.3159', lng: '81.1496' },
      lat: '-37.3159',
      lng: '81.1496',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874'
    },
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net'
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
  },
  {
    id: 2,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      city: 'Gwenborough',
      geo: { lat: '-37.3159', lng: '81.1496' },
      lat: '-37.3159',
      lng: '81.1496',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874'
    },
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net'
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
  }
];

export const mockFetchUsers = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve(mockUsers),
}));
