export const typeDefs = `
  type User {
    id: ID!
    firstname: String!
    surname: String!
  }

  type Query {
    users: [User]
  }
`;
