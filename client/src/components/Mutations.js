import { gql } from 'react-apollo';

export const AddUserMutation = gql`
  mutation addUser($firstname: String!, $surname: String!, $grade: String!) {
    addUser(firstname: $firstname, surname: $surname, grade: $grade){
      id
      firstname
      surname
      grade
    }
  }
`;
