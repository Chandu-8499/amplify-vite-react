import { gql } from '@apollo/client';

// Query to list all products
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

// Mutation to create a new product
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      price
      stock
      image
    }
  }
`;

// Mutation to update an existing product
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      description
      price
      stock
      image
    }
  }
`;

// Mutation to delete a product
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($input: DeleteProductInput!) {
    deleteProduct(input: $input) {
      id
    }
  }
`;
