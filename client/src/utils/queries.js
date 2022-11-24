import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query GET_ME {
    me {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;
