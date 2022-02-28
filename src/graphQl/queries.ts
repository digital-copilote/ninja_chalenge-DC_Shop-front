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
      idDraw
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
      idDraw
      idSize
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

export const sizesQuery = gql`
  query AllSizes($idDraw: ID) {
    AllSizes(idDraw: $idDraw) {
      idSize
      name
    }
  }
`;

export const artistsQuery = gql`
  query AllArtists($role: String) {
    AllArtists(role: $role) {
      idUser
      firstname
      lastname
      city
      role
      bio
      draws {
        idDraw
        name
        urlDraw
        idTheme
        theme {
          name
          color
          iconUrl
        }
      }
    }
  }
`;
