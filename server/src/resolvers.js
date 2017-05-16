const users = [
  {
    id: 1,
    firstname: 'Catherine',
    surname: 'Example',
  },
  {
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
