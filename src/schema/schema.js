import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

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

const schema = makeExecutableSchema({ typeDefs });
export { schema };
