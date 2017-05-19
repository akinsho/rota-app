import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

export const typeDefs = `
  type User {
    id: ID!
    firstname: String!
    surname: String!
  }
  type Shifts {
    id: ID!
    firstname: String!
    surname: String!
    speciality: String!
    day: Int!
    time: String!
    assigned: Int!
  }

  type Query {
    users: [User]
    shifts: [Shifts]
  }

type Mutation {
  # A mutation to add a user
  addUser(firstname: String!, surname: String!): User
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
