
import { gql } from '@apollo/client';

// Query to get a product by ID
export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      stock
      image
      createdAt
      updatedAt
    }
  }
`;

// Query to list all products with optional filtering
export const LIST_PRODUCTS = gql`
  query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        stock
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
