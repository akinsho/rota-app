import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

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

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
