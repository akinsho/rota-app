import { gql } from 'react-apollo';

export const userQuery = gql`
  query UserQuery {
    users {
      id
      firstname
      surname
      username
      password
    }
    shifts {
      id
      firstname
      surname
      assigned
      time
      day
    }
  }
`;
