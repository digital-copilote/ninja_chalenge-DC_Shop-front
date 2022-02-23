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
          color
          iconUrl
        }
      }
    }
  }
`;
export const shirtQuery = gql`
  query OneShirt($idShirt: ID!) {
    OneShirt(idShirt: $idShirt) {
      idShirt
      price
      draw {
        idDraw
        name
        urlDraw
        user {
          idUser
          lastname
          firstname
        }
        organization {
          name
          idOrganization
        }
        theme {
          idTheme
          name
          color
          iconUrl
        }
      }
    }
  }
`;
