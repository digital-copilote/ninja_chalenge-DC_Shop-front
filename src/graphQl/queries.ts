import { gql } from '@apollo/client';

export const usersQuery = gql`
  query {
    AllUsers {
      idUser
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
        user {
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
