import { gql } from '@apollo/client';

export const usersQuery = gql`
  query {
    AllUsers {
      idUser
      firstname
      lastname
      email
      organizations {
        name
      }
      draws {
        name
      }
    }
  }
`;
export const shirtsQuery = gql`
  query Query($idTheme: ID) {
    AllShirts(idTheme: $idTheme) {
      idShirt
      price
      draw {
        idTheme
        name
        urlDraw
        theme {
          name
        }
      }
    }
  }
`;
