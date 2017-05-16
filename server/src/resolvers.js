const users = [
  {
    id: 1,
    firstname: 'Catherine',
    surname: 'Example',
  },
  {
    id: 2,
    firstname: 'John',
    surname: 'Example',
  },
];

export const resolvers = {
  Query: {
    users: () => {
      return users;
    },
  },
};
