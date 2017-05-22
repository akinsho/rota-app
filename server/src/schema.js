import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

export const typeDefs = `
  type User {
    id: ID!
    firstname: String!
    surname: String!
    username: String!
    password: String!
    grade: String!
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
    findUser(firstname: String!, surname: String!): [User]
  }

type Mutation {
  # A mutation to add a user
  addUser(firstname: String!, surname: String!, grade: String!): User
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
