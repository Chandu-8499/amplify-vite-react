import { gql } from '@apollo/client';

// Create product mutation
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      price
      stock
    }
  }
`;

// Get all products query
export const GET_PRODUCTS = gql`
  query GetProducts {
    listProducts {
      items {
        id
        name
        description
        price
        stock
      }
    }
  }
`;

// Update product mutation
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      description
      price
      stock
    }
  }
`;

// Delete product mutation
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
