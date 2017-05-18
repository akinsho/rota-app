import { gql } from 'react-apollo';

export const userQuery = gql`
  query UserQuery {
    users {
      id
      firstname
      surname
    }
    shifts {
      id
      assigned
      time
      day
    }
  }
`;
