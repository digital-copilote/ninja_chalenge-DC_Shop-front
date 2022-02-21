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
  query Query {
    AllShirts {
      idShirt
      price
      draw {
        idDraw
        name
        urlDraw
        theme {
          idTheme
          name
        }
        user {
          idUser
          firstname
          lastname
          role
          idUser
          bio
          organizations {
            idOrganization
            name
          }
        }
      }
    }
  }
`;
