// src/graphql/products.js
import { gql } from '@apollo/client';

// Query to fetch all products
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

// Mutation to add a product
export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Float!, $stock: Int!) {
    createProduct(input: { name: $name, description: $description, price: $price, stock: $stock }) {
      id
      name
      description
      price
      stock
    }
  }
`;

// Mutation to update a product
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $name: String!, $description: String!, $price: Float!, $stock: Int!) {
    updateProduct(input: { id: $id, name: $name, description: $description, price: $price, stock: $stock }) {
      id
      name
      description
      price
      stock
    }
  }
`;

// Mutation to delete a product
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(input: { id: $id }) {
      id
    }
  }
`;
