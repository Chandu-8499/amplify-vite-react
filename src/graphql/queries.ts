import { gql } from '@apollo/client';

export const LIST_PRODUCTS = gql`
  query ListProducts {
    listProducts {
      items {
        id
        name
        description
        price
        stock
        image
      }
    }
  }
`;
